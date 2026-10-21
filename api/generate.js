const hits = new Map();
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST lazımdır' });
  const ip = String(req.headers['x-forwarded-for'] || 'x').split(',')[0].trim();
  const now = Date.now();
  const h = (hits.get(ip) || []).filter(t => now - t < 3600e3);
  if (h.length >= 12) return res.status(429).json({ error: 'limit' });
  h.push(now); hits.set(ip, h);

  const { text, n } = req.body || {};
  if (typeof text !== 'string' || text.length < 300) return res.status(400).json({ error: 'mətn qısadır' });
  const count = Math.min(Math.max(parseInt(n) || 10, 3), 20);
  const system = 'Sən təcrübəli müəllimsən. Verilən mətn əsasında anlayış və başa düşmə yoxlayan çoxvariantlı imtahan sualları hazırlayırsan. ' +
    'Suallar mətnin dilində olsun. "Boşluğu doldur" tipli sual yazma. Hər sual nə, niyə, necə, hansı, nəyə görə kimi real sual olsun və mətnin müxtəlif hissələrindən götürülsün. ' +
    'Hər sualın 4 variantı olsun, yalnız biri düzgün, səhvlər inandırıcı olsun. Düzgün cavabın yerini təsadüfi seç. Yalnız mətndə olan məlumata əsaslan. ' +
    'Hər sual üçün 1 cümləlik qısa izah yaz. Cavabı YALNIZ JSON massivi kimi ver: [{"q":"sual","o":["a","b","c","d"],"a":0,"x":"izah"}] ("a" düzgün variantın indeksidir).';
  const key = process.env.GEMINI_API_KEY;
  if (!key) return res.status(500).json({ error: 'GEMINI_API_KEY Vercel-də təyin edilməyib' });
  const models = [process.env.GEMINI_MODEL, 'gemini-3.1-flash-lite', 'gemini-3.5-flash-lite', 'gemini-3-flash-preview'].filter(Boolean);
  const body = JSON.stringify({
    systemInstruction: { parts: [{ text: system }] },
    contents: [{ role: 'user', parts: [{ text: count + ' sual hazırla. Təsadüfilik nömrəsi: ' + Math.floor(Math.random() * 1e6) + '\n\nMƏTN:\n' + text.slice(0, 15000) }] }],
    generationConfig: { responseMimeType: 'application/json', maxOutputTokens: 8192 }
  });
  try {
    let r, lastErr = '';
    for (const m of models) {
      r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + m + ':generateContent', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-goog-api-key': key },
        body
      });
      if (r.status !== 404) break;
      lastErr = await r.text();
    }
    if (r.status === 404) return res.status(502).json({ error: 'AI xətası 404', detail: lastErr.slice(0, 160) });
    if (r.status === 429) return res.status(429).json({ error: 'limit' });
    if (!r.ok) { const e = await r.text(); return res.status(502).json({ error: 'AI xətası ' + r.status, detail: e.slice(0, 160) }); }
    const d = await r.json();
    const p = d.candidates && d.candidates[0] && d.candidates[0].content && d.candidates[0].content.parts;
    const raw = (p && p.map(x => x.text || '').join('')) || '';
    const arr = JSON.parse((raw.match(/\[[\s\S]*\]/) || ['[]'])[0]);
    const questions = arr.filter(x => x && typeof x.q === 'string' && Array.isArray(x.o) && x.o.length >= 3 && Number.isInteger(x.a) && x.o[x.a] !== undefined)
      .slice(0, count).map(x => ({ q: x.q, o: x.o.map(String), a: x.a, x: String(x.x || '') }));
    return res.status(200).json({ questions });
  } catch (e) {
    return res.status(500).json({ error: 'server xətası', detail: String(e).slice(0, 120) });
  }
};

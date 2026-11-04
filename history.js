import { auth, app } from "./firebase-config.js";
import { getFirestore, collection, doc, setDoc, addDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const db = getFirestore(app);
const clean = (s, n = 150) => String(s ?? "").slice(0, n);

/**
 * window.yd.log({ type, status, title, score, total, code, id })
 *  type:   "exam" | "course" | "certificate"
 *  status: "started" | "done"
 *  score/total: nəticə (məs. 17 / 20)
 *  code:   sertifikat kodu
 *  id:     verilsə, eyni id ilə təkrar yazılmır (dublikat olmur)
 */
async function log(rec) {
  try {
    await auth.authStateReady();
    const u = auth.currentUser;
    if (!u) return;

    const data = {
      type: ["exam", "course", "certificate"].includes(rec.type) ? rec.type : "exam",
      status: rec.status === "done" ? "done" : "started",
      title: clean(rec.title),
      page: clean(rec.page || location.pathname.split("/").pop(), 80),
      ts: serverTimestamp(),
    };
    if (Number.isFinite(rec.score)) data.score = rec.score;
    if (Number.isFinite(rec.total)) data.total = rec.total;
    if (rec.code) data.code = clean(rec.code, 60);

    const col = collection(db, "users", u.uid, "records");
    if (rec.id) await setDoc(doc(col, clean(rec.id, 100).replace(/\//g, "_")), data);
    else await addDoc(col, data);
  } catch (e) {
    console.warn("yd.log xətası:", e.code || e);
  }
}
window.yd = { log };

// Avtomatik tarixçə: imtahan və kurs səhifəsi açılanda "başladı" qeydi (gündə bir dəfə)
const page = location.pathname.split("/").pop();
let type = null;
if (/^exam-|^quiz\.html$|^sinaqlar|^psixoloji-imtahan|^pdf-imtahan|^miq-kurikulum/.test(page)) type = "exam";
else if (/-kursu\.html$/.test(page)) type = "course";

if (type) {
  const day = new Date().toISOString().slice(0, 10);
  const title = document.title.replace(/\s*[—–-]\s*Youdidit.*$/i, "").trim() || page;
  log({ type, status: "started", title, id: `visit_${page}_${day}` });
}

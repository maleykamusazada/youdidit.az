// Shared A1/A2/B1/B2/C1/C2 quiz engine — expects a global QUESTIONS array:
// [{ q: "...", options: ["...","...","...","..."], a: correctIndex }, ...]
// and QUIZ_META = { title, lang }
//
// Set FORMSPREE_ENDPOINT below to your own Formspree form URL to receive
// results by email. Get one free at https://formspree.io (sign up with
// youdiditaz@gmail.com, create a new form, copy the URL it gives you).

var FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
var TIME_LIMIT_SECONDS = 90 * 60;

(function () {
  var current = 0;
  var score = 0;
  var answers = new Array(QUESTIONS.length).fill(null);
  var student = { name: "", email: "" };
  var timeRemaining = TIME_LIMIT_SECONDS;
  var timerInterval = null;
  var timedOut = false;

  var root = document.getElementById("quiz-root");

  function formatTime(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(function () {
      timeRemaining--;
      var el = document.getElementById("timer-display");
      if (el) {
        el.textContent = formatTime(Math.max(0, timeRemaining));
        if (timeRemaining <= 60) el.classList.add("timer-low");
      }
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        timedOut = true;
        finish();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  }

  function renderIntro() {
    var html = '';
    html += '<div class="quiz-intro">';
    html += '<p class="quiz-intro-text">Nəticəni email ilə almaq üçün adını və emailini yaz. Bu, yalnız nəticəni göndərmək üçün istifadə olunur.</p>';
    html += '<div class="field"><label for="qs-name">Ad, Soyad</label><input type="text" id="qs-name" placeholder="Adın"></div>';
    html += '<div class="field"><label for="qs-email">Email</label><input type="email" id="qs-email" placeholder="sən@example.com"></div>';
    html += '<button type="button" id="start-btn" class="btn btn-primary">Testə başla</button>';
    html += '<p class="quiz-skip"><a href="#" id="skip-link">Email olmadan davam et</a></p>';
    html += '</div>';
    root.innerHTML = html;

    document.getElementById("start-btn").addEventListener("click", function () {
      student.name = document.getElementById("qs-name").value.trim();
      student.email = document.getElementById("qs-email").value.trim();
      startTimer();
      render();
    });
    document.getElementById("skip-link").addEventListener("click", function (e) {
      e.preventDefault();
      startTimer();
      render();
    });
  }

  function render() {
    var item = QUESTIONS[current];
    var pct = Math.round((current / QUESTIONS.length) * 100);

    var html = '';
    html += '<div class="quiz-progress-track"><div class="quiz-progress-fill" style="width:' + pct + '%"></div></div>';
    html += '<div class="quiz-count">Sual ' + (current + 1) + ' / ' + QUESTIONS.length + ' <span id="timer-display" class="timer-display">' + formatTime(timeRemaining) + '</span></div>';
    html += '<h2 class="quiz-question">' + item.q.replace(/\n/g, '<br>') + '</h2>';
    html += '<div class="quiz-options">';
    item.options.forEach(function (opt, i) {
      var checked = answers[current] === i ? ' checked' : '';
      html += '<label class="quiz-option"><input type="radio" name="opt" value="' + i + '"' + checked + '><span>' + opt + '</span></label>';
    });
    html += '</div>';
    html += '<div class="quiz-nav">';
    html += '<button type="button" id="prev-btn" class="btn btn-outline"' + (current === 0 ? ' disabled' : '') + '>Geri</button>';
    html += '<button type="button" id="next-btn" class="btn btn-primary">' + (current === QUESTIONS.length - 1 ? 'Bitir' : 'Növbəti') + '</button>';
    html += '</div>';

    root.innerHTML = html;

    root.querySelectorAll('input[name="opt"]').forEach(function (input) {
      input.addEventListener("change", function () {
        answers[current] = parseInt(this.value, 10);
      });
    });

    document.getElementById("next-btn").addEventListener("click", function () {
      if (answers[current] === null) {
        alert("Zəhmət olmasa bir cavab seç.");
        return;
      }
      if (current < QUESTIONS.length - 1) {
        current++;
        render();
        window.scrollTo({ top: root.offsetTop - 90, behavior: "smooth" });
      } else {
        finish();
      }
    });

    var prevBtn = document.getElementById("prev-btn");
    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        if (current > 0) {
          current--;
          render();
          window.scrollTo({ top: root.offsetTop - 90, behavior: "smooth" });
        }
      });
    }
  }

  function finish() {
    stopTimer();
    score = 0;
    for (var i = 0; i < QUESTIONS.length; i++) {
      if (answers[i] === QUESTIONS[i].a) score++;
    }
    var pct = Math.round((score / QUESTIONS.length) * 100);
    var verdict, verdictClass;
    if (timedOut) {
      verdict = "Vaxt bitdi. ";
    } else {
      verdict = "";
    }
    if (pct >= 80) {
      verdict += "Əla! Bu səviyyəni rahat keçdin — növbəti səviyyəyə keçməyə hazırsan.";
      verdictClass = "ok";
    } else if (pct >= 55) {
      verdict += "Yaxşı nəticə. Əsas mövzular mənimsənilib, bəzilərini təkrar etmək faydalı olar.";
      verdictClass = "ok";
    } else {
      verdict += "Bu səviyyənin mövzularını təkrar etmək tövsiyə olunur.";
      verdictClass = "err";
    }

    var html = '';
    html += '<div class="quiz-result">';
    html += '<h2>Nəticə: ' + score + ' / ' + QUESTIONS.length + ' (' + pct + '%)</h2>';
    html += '<p class="' + verdictClass + '">' + verdict + '</p>';
    html += '<p id="email-status" class="quiz-email-status"></p>';
    html += '<div class="quiz-result-actions">';
    html += '<button type="button" id="cert-btn" class="btn btn-primary">Sertifikatı yüklə</button>';
    html += '<button type="button" id="restart-btn" class="btn btn-outline">Yenidən başla</button>';
    html += '</div>';
    html += '<canvas id="cert-canvas" width="1200" height="850" style="display:none;"></canvas>';
    html += '</div>';
    root.innerHTML = html;

    document.getElementById("restart-btn").addEventListener("click", function () {
      current = 0;
      score = 0;
      answers = new Array(QUESTIONS.length).fill(null);
      timeRemaining = TIME_LIMIT_SECONDS;
      timedOut = false;
      renderIntro();
    });

    document.getElementById("cert-btn").addEventListener("click", function () {
      downloadCertificate(pct);
    });

    sendResultByEmail(pct);
  }

  function downloadCertificate(pct) {
    var canvas = document.getElementById("cert-canvas");
    var ctx = canvas.getContext("2d");
    var W = canvas.width, H = canvas.height;
    var name = (student.name && student.name.trim()) || "Tələbə";
    var dateStr = formatAzDate(new Date());

    function draw() {
      // Background
      ctx.fillStyle = "#FAFAF8";
      ctx.fillRect(0, 0, W, H);

      // Outer gold border
      ctx.strokeStyle = "#C9A227";
      ctx.lineWidth = 10;
      ctx.strokeRect(30, 30, W - 60, H - 60);

      // Inner thin forest border
      ctx.strokeStyle = "#1B4332";
      ctx.lineWidth = 2;
      ctx.strokeRect(50, 50, W - 100, H - 100);

      ctx.textAlign = "center";

      // Brand
      ctx.fillStyle = "#1B4332";
      ctx.font = "italic 32px 'Libre Baskerville', serif";
      ctx.fillText("Youdidit.az", W / 2, 140);

      // Title
      ctx.fillStyle = "#1B4332";
      ctx.font = "56px 'Libre Baskerville', serif";
      ctx.fillText("SERTİFİKAT", W / 2, 240);

      // Gold divider
      ctx.strokeStyle = "#C9A227";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(W / 2 - 80, 270);
      ctx.lineTo(W / 2 + 80, 270);
      ctx.stroke();

      // Body text
      ctx.fillStyle = "#4C554E";
      ctx.font = "26px 'Inter', sans-serif";
      ctx.fillText("Bu sənəd təsdiq edir ki,", W / 2, 340);

      ctx.fillStyle = "#1B4332";
      ctx.font = "44px 'Libre Baskerville', serif";
      ctx.fillText(name, W / 2, 410);

      ctx.fillStyle = "#4C554E";
      ctx.font = "26px 'Inter', sans-serif";
      wrapText(ctx, QUIZ_META.title + " testini uğurla tamamlayıb.", W / 2, 470, W - 260, 34);

      // Score
      ctx.fillStyle = "#1B4332";
      ctx.font = "bold 34px 'Inter', sans-serif";
      ctx.fillText("Nəticə: " + score + " / " + QUESTIONS.length + " (" + pct + "%)", W / 2, 560);

      // Date
      ctx.fillStyle = "#4C554E";
      ctx.font = "22px 'Inter', sans-serif";
      ctx.fillText(dateStr, W / 2, 720);

      // Footer
      ctx.fillStyle = "#C9A227";
      ctx.font = "italic 20px 'Libre Baskerville', serif";
      ctx.fillText("youdidit.az", W / 2, 770);

      // Trigger download
      var link = document.createElement("a");
      var safeName = name.replace(/[^a-zA-Z0-9əöüçşğıƏÖÜÇŞĞİ ]/g, "").replace(/\s+/g, "_");
      link.download = "sertifikat-" + safeName + ".png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(draw);
    } else {
      draw();
    }
  }

  function formatAzDate(d) {
    var months = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"];
    return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    var words = text.split(" ");
    var line = "";
    var lines = [];
    for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + " ";
      if (ctx.measureText(testLine).width > maxWidth && n > 0) {
        lines.push(line);
        line = words[n] + " ";
      } else {
        line = testLine;
      }
    }
    lines.push(line);
    var startY = y - ((lines.length - 1) * lineHeight) / 2;
    for (var i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i].trim(), x, startY + i * lineHeight);
    }
  }

  function sendResultByEmail(pct) {
    var statusEl = document.getElementById("email-status");
    if (!student.email) {
      if (statusEl) statusEl.textContent = "";
      return;
    }
    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.indexOf("YOUR_FORM_ID") !== -1) {
      if (statusEl) statusEl.textContent = "Nəticə göndərilmədi — Formspree hələ qurulmayıb.";
      return;
    }
    if (statusEl) statusEl.textContent = "Nəticə göndərilir...";

    var data = new FormData();
    data.append("Ad Soyad", student.name || "(qeyd olunmayıb)");
    data.append("Email", student.email);
    data.append("Test", QUIZ_META.title);
    data.append("Nəticə", score + " / " + QUESTIONS.length + " (" + pct + "%)");
    data.append("Tarix", formatAzDate(new Date()));

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (statusEl) {
          statusEl.textContent = response.ok
            ? "Nəticə " + student.email + " ünvanına göndərildi."
            : "Nəticəni göndərmək mümkün olmadı.";
        }
      })
      .catch(function () {
        if (statusEl) statusEl.textContent = "Nəticəni göndərmək mümkün olmadı.";
      });
  }

  renderIntro();
})();

// quiz-engine.js
// Youdidit.az — Çoxvariantlı imtahan testləri üçün mühərrik

(function () {
  "use strict";

  var FORMSPREE_ENDPOINT = "https://formspree.io/f/mqpkglkb";
  var TIME_LIMIT_SECONDS = 2 * 60 * 60;

  var root = document.getElementById("quiz-root");
  if (!root) return;

  if (
    typeof QUESTIONS === "undefined" ||
    !Array.isArray(QUESTIONS) ||
    QUESTIONS.length === 0
  ) {
    root.innerHTML =
      '<p style="color:red;">Suallar tapılmadı və ya fayl yüklənmədi.</p>';
    return;
  }

  var current = 0;
  var answers = new Array(QUESTIONS.length).fill(null);
  var student = {
    name: "",
    email: ""
  };

  var timeRemaining = TIME_LIMIT_SECONDS;
  var timerInterval = null;
  var timedOut = false;
  var finished = false;

  /* =========================
     TIME
  ========================= */
  function formatTime(sec) {
    sec = Math.max(0, sec);
    var h = Math.floor(sec / 3600);
    var m = Math.floor((sec % 3600) / 60);
    var s = sec % 60;
    var mm = m < 10 ? "0" + m : m;
    var ss = s < 10 ? "0" + s : s;
    if (h > 0) {
      return h + ":" + mm + ":" + ss;
    }
    return m + ":" + ss;
  }

  function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(function () {
      timeRemaining--;
      var timer = document.getElementById("timer-display");
      if (timer) {
        timer.textContent = formatTime(timeRemaining);
        if (timeRemaining <= 60) {
          timer.classList.add("timer-low");
        }
      }
      if (timeRemaining <= 0) {
        stopTimer();
        timedOut = true;
        finish();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  /* =========================
     INTRO
  ========================= */
  function renderIntro() {
    var html = "";
    html += '<div class="quiz-intro">';
    html +=
      '<p class="quiz-intro-text">' +
      "Testə başlamaq üçün ad və soyadını daxil et. " +
      "Email əlavə etsən, nəticən emailə göndəriləcək." +
      "</p>";
    html +=
      '<div class="field">' +
      '<label for="qs-name">Ad, Soyad *</label>' +
      '<input type="text" id="qs-name" placeholder="Ad Soyad" autocomplete="name">' +
      "</div>";
    html +=
      '<div class="field">' +
      '<label for="qs-email">Email</label>' +
      '<input type="email" id="qs-email" placeholder="example@email.com" autocomplete="email">' +
      "</div>";
    html +=
      '<button type="button" id="start-btn" class="btn btn-primary">' +
      "Testə başla" +
      "</button>";
    html += "</div>";

    root.innerHTML = html;

    var startBtn = document.getElementById("start-btn");
    var nameInput = document.getElementById("qs-name");
    var emailInput = document.getElementById("qs-email");

    startBtn.addEventListener("click", function () {
      var name = nameInput.value.trim();
      var email = emailInput.value.trim();

      if (!name) {
        alert("Zəhmət olmasa ad və soyadını daxil et.");
        nameInput.focus();
        return;
      }

      if (email && !isValidEmail(email)) {
        alert("Zəhmət olmasa düzgün email ünvanı daxil et.");
        emailInput.focus();
        return;
      }

      student.name = name;
      student.email = email;
      startTimer();
      render();
    });

    nameInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        startBtn.click();
      }
    });

    emailInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        startBtn.click();
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* =========================
     QUESTIONS
  ========================= */
  function render() {
    var item = QUESTIONS[current];
    var pct = Math.round((current / QUESTIONS.length) * 100);

    var html = "";
    html +=
      '<div class="quiz-progress-track">' +
      '<div class="quiz-progress-fill" style="width:' +
      pct +
      '%"></div>' +
      "</div>";

    html +=
      '<div class="quiz-count">' +
      "Sual " +
      (current + 1) +
      " / " +
      QUESTIONS.length +
      ' <span id="timer-display" class="timer-display">' +
      formatTime(timeRemaining) +
      "</span>" +
      "</div>";

    html +=
      '<h2 class="quiz-question">' +
      escapeHTML(item.q).replace(/\n/g, "<br>") +
      "</h2>";

    html += '<div class="quiz-options">';
    for (var i = 0; i < item.options.length; i++) {
      var checked = answers[current] === i ? " checked" : "";
      html +=
        '<label class="quiz-option">' +
        '<input type="radio" name="quiz-answer" value="' +
        i +
        '"' +
        checked +
        ">" +
        "<span>" +
        escapeHTML(item.options[i]) +
        "</span>" +
        "</label>";
    }
    html += "</div>";

    html += '<div class="quiz-nav">';
    html +=
      '<button type="button" id="prev-btn" class="btn btn-outline"' +
      (current === 0 ? " disabled" : "") +
      ">" +
      "Geri" +
      "</button>";
    html +=
      '<button type="button" id="next-btn" class="btn btn-primary"' +
      (answers[current] === null ? " disabled" : "") +
      ">" +
      (current === QUESTIONS.length - 1 ? "Bitir" : "Növbəti") +
      "</button>";
    html += "</div>";

    root.innerHTML = html;

    var radios = root.querySelectorAll('input[name="quiz-answer"]');
    for (var r = 0; r < radios.length; r++) {
      radios[r].addEventListener("change", function (e) {
        answers[current] = parseInt(e.target.value, 10);
        var nextBtn = document.getElementById("next-btn");
        if (nextBtn) {
          nextBtn.disabled = false;
        }
      });
    }

    var nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", function () {
      if (answers[current] === null) {
        alert("Zəhmət olmasa bir cavab seç.");
        return;
      }
      if (current < QUESTIONS.length - 1) {
        current++;
        render();
        window.scrollTo({
          top: root.offsetTop - 90,
          behavior: "smooth"
        });
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
          window.scrollTo({
            top: root.offsetTop - 90,
            behavior: "smooth"
          });
        }
      });
    }
  }

  /* =========================
     FINISH
  ========================= */
  function finish() {
    if (finished) return;
    finished = true;
    stopTimer();

    var score = 0;
    for (var i = 0; i < QUESTIONS.length; i++) {
      if (answers[i] === QUESTIONS[i].a) {
        score++;
      }
    }

    var pct = Math.round((score / QUESTIONS.length) * 100);

    var verdict;
    var verdictClass;
    var prefix = timedOut ? "Vaxt bitdi. " : "";

    if (pct >= 80) {
      verdict = prefix + "Əla nəticə! Bu səviyyəni yaxşı mənimsəmisən.";
      verdictClass = "ok";
    } else if (pct >= 55) {
      verdict =
        prefix + "Yaxşı nəticə. Bəzi mövzuları təkrar etmək faydalı olar.";
      verdictClass = "ok";
    } else {
      verdict =
        prefix + "Bu səviyyəni müəllimlə birgə təkrar etmək tövsiyə olunur.";
      verdictClass = "err";
    }

    var html = "";
    html += '<div class="quiz-result">';
    html +=
      "<h2>Nəticə: " +
      score +
      " / " +
      QUESTIONS.length +
      " (" +
      pct +
      "%)</h2>";
    html += '<p class="' + verdictClass + '">' + verdict + "</p>";
    html += '<p id="email-status" class="quiz-email-status"></p>';
    html += '<div class="quiz-result-actions">';
    html +=
      '<button type="button" id="cert-btn" class="btn btn-primary">' +
      "Sertifikatı yüklə" +
      "</button>";
    html +=
      '<button type="button" id="restart-btn" class="btn btn-outline">' +
      "Yenidən başla" +
      "</button>";
    html += "</div>";
    html +=
      '<canvas id="cert-canvas" width="1200" height="850" style="display:none;"></canvas>';
    html += "</div>";

    root.innerHTML = html;

    document.getElementById("cert-btn").addEventListener("click", function () {
      downloadCertificate(pct, score);
    });

    document
      .getElementById("restart-btn")
      .addEventListener("click", function () {
        current = 0;
        answers = new Array(QUESTIONS.length).fill(null);
        timeRemaining = TIME_LIMIT_SECONDS;
        timedOut = false;
        finished = false;
        renderIntro();
      });

    sendResultByEmail(pct, score);
  }

  /* =========================
     EMAIL
  ========================= */
  function sendResultByEmail(pct, score) {
    var statusEl = document.getElementById("email-status");

    if (!student.email) {
      if (statusEl) {
        statusEl.textContent = "";
      }
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      if (statusEl) {
        statusEl.textContent = "Nəticə göndərilə bilmədi.";
      }
      return;
    }

    if (statusEl) {
      statusEl.textContent = "Nəticə göndərilir...";
    }

    var data = new FormData();
    data.append("Ad Soyad", student.name);
    data.append("Email", student.email);
    data.append("Test", getQuizTitle());
    data.append(
      "Nəticə",
      score + " / " + QUESTIONS.length + " (" + pct + "%)"
    );
    data.append("Tarix", formatAzDate(new Date()));

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    })
      .then(function (response) {
        if (!statusEl) return;
        if (response.ok) {
          statusEl.textContent =
            "Nəticə " + student.email + " ünvanına göndərildi.";
        } else {
          statusEl.textContent = "Nəticəni göndərmək mümkün olmadı.";
        }
      })
      .catch(function () {
        if (statusEl) {
          statusEl.textContent = "Nəticəni göndərmək mümkün olmadı.";
        }
      });
  }

  /* =========================
     CERTIFICATE
  ========================= */
  function downloadCertificate(pct, score) {
    var canvas = document.getElementById("cert-canvas");
    if (!canvas) {
      alert("Sertifikat hazırlana bilmədi.");
      return;
    }

    var ctx = canvas.getContext("2d");
    if (!ctx) {
      alert("Sertifikat hazırlana bilmədi.");
      return;
    }

    var name = (student.name || "").trim();
    if (!name) {
      alert("Sertifikat üçün ad və soyad daxil edilməlidir.");
      return;
    }

    var W = canvas.width;
    var H = canvas.height;
    var dateStr = formatAzDate(new Date());
    var title = getQuizTitle();

    /* Fon */
    ctx.fillStyle = "#FCFCFA";
    ctx.fillRect(0, 0, W, H);

    /* Xarici çərçivə */
    ctx.strokeStyle = "#3D6FA6";
    ctx.lineWidth = 3;
    ctx.strokeRect(18, 18, W - 36, H - 36);

    /* Daxili çərçivə */
    ctx.strokeStyle = "#3D6FA6";
    ctx.lineWidth = 1;
    ctx.strokeRect(30, 30, W - 60, H - 60);

    ctx.textAlign = "center";

    /* Logo: youdidit.az */
    ctx.font = "bold 42px Arial, sans-serif";
    var logoLeft = "youdidit";
    var logoRight = ".az";
    var logoLeftWidth = ctx.measureText(logoLeft).width;
    var logoRightWidth = ctx.measureText(logoRight).width;
    var logoTotal = logoLeftWidth + logoRightWidth;
    var logoStartX = W / 2 - logoTotal / 2;
    ctx.textAlign = "left";
    ctx.fillStyle = "#0A2540";
    ctx.fillText(logoLeft, logoStartX, 130);
    ctx.fillStyle = "#5A8FC2";
    ctx.fillText(logoRight, logoStartX + logoLeftWidth, 130);
    ctx.textAlign = "center";

    /* Başlıq */
    ctx.fillStyle = "#0A2540";
    ctx.font = "bold 64px Arial, sans-serif";
    ctx.fillText("S E R T İ F İ K A T", W / 2, 240);

    /* Alt yazı */
    ctx.fillStyle = "#3D6FA6";
    ctx.font = "16px Arial, sans-serif";
    ctx.fillText("B U   S E R T İ F İ K A T", W / 2, 275);

    /* Ad soyad (imza tərzi) */
    ctx.fillStyle = "#0A2540";
    ctx.font = "italic 54px Georgia, serif";
    drawCenteredText(ctx, name, W / 2, 380, W - 180);

    /* Xətt */
    ctx.strokeStyle = "#5A8FC2";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 220, 415);
    ctx.lineTo(W / 2 + 220, 415);
    ctx.stroke();

    /* Mətn */
    ctx.fillStyle = "#3D6FA6";
    ctx.font = "22px Arial, sans-serif";
    wrapText(
      ctx,
      "youdidit.az platformasında keçirilən " +
        title +
        " testində yüksək nəticə göstərdiyinə görə bu sertifikatı qazanmışdır.",
      W / 2,
      465,
      W - 320,
      32
    );

    /* Medal (nişan) */
    var medalX = W / 2;
    var medalY = 610;
    ctx.strokeStyle = "#5A8FC2";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(medalX, medalY, 45, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#5A8FC2";
    drawStar(ctx, medalX, medalY, 5, 20, 9);

    ctx.fillStyle = "#3D6FA6";
    ctx.beginPath();
    ctx.moveTo(medalX - 20, medalY + 40);
    ctx.lineTo(medalX - 8, medalY + 100);
    ctx.lineTo(medalX - 20, medalY + 85);
    ctx.lineTo(medalX - 32, medalY + 100);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(medalX + 20, medalY + 40);
    ctx.lineTo(medalX + 32, medalY + 100);
    ctx.lineTo(medalX + 20, medalY + 85);
    ctx.lineTo(medalX + 8, medalY + 100);
    ctx.closePath();
    ctx.fill();

    /* Tarix (sol) */
    ctx.textAlign = "left";
    ctx.fillStyle = "#3D6FA6";
    ctx.font = "18px Arial, sans-serif";
    ctx.fillText("Tarix", 130, 700);
    ctx.strokeStyle = "#5A8FC2";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(110, 715);
    ctx.lineTo(300, 715);
    ctx.stroke();
    ctx.fillStyle = "#0A2540";
    ctx.font = "20px Arial, sans-serif";
    ctx.fillText(dateStr, 130, 745);

    /* Sayt (sağ) */
    ctx.textAlign = "right";
    ctx.fillStyle = "#0A2540";
    ctx.font = "bold 20px Arial, sans-serif";
    ctx.fillText("youdidit.az", W - 110, 700);
    ctx.strokeStyle = "#5A8FC2";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W - 300, 715);
    ctx.lineTo(W - 110, 715);
    ctx.stroke();
    ctx.fillStyle = "#3D6FA6";
    ctx.font = "13px Arial, sans-serif";
    ctx.fillText("ÖYRƏN · İNKİŞAF ET · UĞUR QAZAN", W - 110, 745);

    ctx.textAlign = "center";

    /* PNG */
    try {
      var image = canvas.toDataURL("image/png");
      var safeName = makeSafeFileName(name);
      var fileName = "sertifikat-" + safeName + ".png";

      if (isIOS()) {
        openCertificateForIOS(image, fileName);
        return;
      }

      var link = document.createElement("a");
      link.href = image;
      link.download = fileName;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Certificate error:", error);
      alert("Sertifikat hazırlana bilmədi. Səhifəni yeniləyib yenidən yoxla.");
    }
  }

  /* =========================
     iOS CERTIFICATE
  ========================= */
  function isIOS() {
    return (
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    );
  }

  function openCertificateForIOS(image, fileName) {
    var newWindow = window.open("", "_blank");
    if (!newWindow) {
      alert(
        "Sertifikatı açmaq mümkün olmadı. Safari-də pop-up icazəsini yoxla və düyməyə yenidən bas."
      );
      return;
    }

    newWindow.document.open();
    newWindow.document.write(
      "<!DOCTYPE html>" +
        '<html lang="az">' +
        "<head>" +
        '<meta name="viewport" content="width=device-width, initial-scale=1">' +
        "<title>Sertifikat</title>" +
        "</head>" +
        '<body style="margin:0;padding:20px;background:#f5f5f5;text-align:center;">' +
        '<p style="font-family:Arial,sans-serif;">' +
        "Sertifikatı yadda saxlamaq üçün " +
        "şəkli uzun bas və ya Share düyməsindən istifadə et." +
        "</p>" +
        '<img src="' +
        image +
        '" alt="Sertifikat" style="max-width:100%;height:auto;display:block;margin:20px auto;">' +
        "</body>" +
        "</html>"
    );
    newWindow.document.close();
  }

  /* =========================
     HELPERS
  ========================= */
  function getQuizTitle() {
    if (typeof QUIZ_META !== "undefined" && QUIZ_META && QUIZ_META.title) {
      return QUIZ_META.title;
    }
    return document.title || "İmtahan";
  }

  function formatAzDate(d) {
    var months = [
      "yanvar",
      "fevral",
      "mart",
      "aprel",
      "may",
      "iyun",
      "iyul",
      "avqust",
      "sentyabr",
      "oktyabr",
      "noyabr",
      "dekabr"
    ];
    return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
  }

  function makeSafeFileName(name) {
    var safe = name
      .replace(/[^a-zA-Z0-9əöüçşğıƏÖÜÇŞĞİİ ]/g, "")
      .replace(/\s+/g, "_");
    return safe || "sertifikat";
  }

  function drawCenteredText(ctx, text, x, y, maxWidth) {
    var fontSize = 54;
    while (ctx.measureText(text).width > maxWidth && fontSize > 24) {
      fontSize -= 2;
      ctx.font = "italic " + fontSize + "px Georgia, serif";
    }
    ctx.fillText(text, x, y);
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

  function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    var rot = (Math.PI / 2) * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (var i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;
      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* Başlat */
  renderIntro();
})();
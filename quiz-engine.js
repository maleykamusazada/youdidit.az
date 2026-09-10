// quiz-engine.js — Çoxvariantlı imtahan testləri üçün mühərrik

// exam-data-*.js faylları ilə işləyir:

// QUIZ_META = {...}

// QUESTIONS = [{ q, options: [...], a: cavabIndeksi }, ...]

(function () {

  var FORMSPREE_ENDPOINT = "https://formspree.io/f/mqpkglkb";

  var TIME_LIMIT_SECONDS = 2 * 60 * 60; // 2 saat

  var root = document.getElementById("quiz-root");

  if (!root) return;

  if (typeof QUESTIONS === "undefined" || !QUESTIONS.length) {

    root.innerHTML = '<p style="color:red;">Suallar tapılmadı və ya fayl yüklənmədi.</p>';

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

  function formatTime(sec) {

    var h = Math.floor(sec / 3600);

    var m = Math.floor((sec % 3600) / 60);

    var s = sec % 60;

    var mm = (m < 10 ? "0" : "") + m;

    var ss = (s < 10 ? "0" : "") + s;

    return h > 0

      ? (h + ":" + mm + ":" + ss)

      : (m + ":" + ss);

  }

  function startTimer() {

    if (timerInterval) return;

    timerInterval = setInterval(function () {

      timeRemaining--;

      var el = document.getElementById("timer-display");

      if (el) {

        el.textContent = formatTime(Math.max(0, timeRemaining));

        if (timeRemaining <= 60) {

          el.classList.add("timer-low");

        }

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

    if (timerInterval) {

      clearInterval(timerInterval);

      timerInterval = null;

    }

  }

  function renderIntro() {

    var html = "";

    html += '<div class="quiz-intro">';

    html += '<p class="quiz-intro-text">';

    html += 'İmtahana başlamaq üçün ad və soyadınızı yazın. ';

    html += 'Email ünvanı nəticənin göndərilməsi üçün istifadə olunur.';

    html += '</p>';

    html += '<div class="field">';

    html += '<label for="qs-name">Ad, Soyad *</label>';

    html += '<input type="text" id="qs-name" placeholder="Ad və soyadınız" autocomplete="name">';

    html += '</div>';

    html += '<div class="field">';

    html += '<label for="qs-email">Email</label>';

    html += '<input type="email" id="qs-email" placeholder="email@example.com" autocomplete="email">';

    html += '</div>';

    html += '<button type="button" id="start-btn" class="btn btn-primary">';

    html += 'Testə başla';

    html += '</button>';

    html += '</div>';

    root.innerHTML = html;

    document.getElementById("start-btn").addEventListener("click", function () {

      var nameInput = document.getElementById("qs-name");

      var emailInput = document.getElementById("qs-email");

      student.name = nameInput.value.trim();

      student.email = emailInput.value.trim();

      // Ad və soyad mütləq daxil edilməlidir

      if (!student.name) {

        alert("Zəhmət olmasa ad və soyadınızı yazın.");

        nameInput.focus();

        return;

      }

      // Email yazılıbsa, formatını yoxla

      if (student.email && !isValidEmail(student.email)) {

        alert("Zəhmət olmasa düzgün email ünvanı yazın.");

        emailInput.focus();

        return;

      }

      startTimer();

      render();

    });

  }

  function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  }

  function render() {

    var item = QUESTIONS[current];

    var pct = Math.round((current / QUESTIONS.length) * 100);

    var html = "";

    html += '<div class="quiz-progress-track">';

    html += '<div class="quiz-progress-fill" style="width:' + pct + '%"></div>';

    html += '</div>';

    html += '<div class="quiz-count">';

    html += 'Sual ' + (current + 1) + ' / ' + QUESTIONS.length;

    html += ' <span id="timer-display" class="timer-display">';

    html += formatTime(timeRemaining);

    html += '</span>';

    html += '</div>';

    html += '<h2 class="quiz-question">';

    html += item.q.replace(/\n/g, "<br>");

    html += '</h2>';

    html += '<div class="quiz-options">';

    for (var i = 0; i < item.options.length; i++) {

      var checked = answers[current] === i ? " checked" : "";

      html += '<label class="quiz-option">';

      html += '<input type="radio" name="quiz-answer" value="' + i + '"' + checked + '>';

      html += ' <span>' + item.options[i] + '</span>';

      html += '</label>';

    }

    html += '</div>';

    html += '<div class="quiz-nav">';

    html += '<button type="button" id="prev-btn" class="btn btn-outline"';

    if (current === 0) {

      html += " disabled";

    }

    html += '>Geri</button>';

    html += '<button type="button" id="next-btn" class="btn btn-primary"';

    if (answers[current] === null) {

      html += " disabled";

    }

    html += '>';

    html += current === QUESTIONS.length - 1 ? "Bitir" : "Növbəti";

    html += '</button>';

    html += '</div>';

    root.innerHTML = html;

    var radios = root.querySelectorAll('input[name="quiz-answer"]');

    for (var r = 0; r < radios.length; r++) {

      radios[r].addEventListener("change", function (e) {

        answers[current] = parseInt(e.target.value, 10);

        var nextButton = document.getElementById("next-btn");

        if (nextButton) {

          nextButton.disabled = false;

        }

      });

    }

    document.getElementById("next-btn").addEventListener("click", function () {

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

  function finish() {

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

      verdict = prefix + "Yaxşı nəticə. Bəzi mövzuları təkrar etmək faydalı olar.";

      verdictClass = "ok";

    } else {

      verdict = prefix + "Bu səviyyəni müəllimlə birgə təkrar etmək tövsiyə olunur.";

      verdictClass = "err";

    }

    var html = "";

    html += '<div class="quiz-result">';

    html += '<h2>';

    html += 'Nəticə: ' + score + ' / ' + QUESTIONS.length + ' (' + pct + '%)';

    html += '</h2>';

    html += '<p class="' + verdictClass + '">';

    html += verdict;

    html += '</p>';

    html += '<p id="email-status" class="quiz-email-status"></p>';

    html += '<div class="quiz-result-actions">';

    html += '<button type="button" id="cert-btn" class="btn btn-primary">';

    html += 'Sertifikatı yüklə';

    html += '</button>';

    html += '<button type="button" id="restart-btn" class="btn btn-outline">';

    html += 'Yenidən başla';

    html += '</button>';

    html += '</div>';

    html += '<canvas id="cert-canvas" width="1200" height="850" style="display:none;"></canvas>';

    html += '</div>';

    root.innerHTML = html;

    document.getElementById("restart-btn").addEventListener("click", function () {

      stopTimer();

      current = 0;

      answers = new Array(QUESTIONS.length).fill(null);

      student = {

        name: "",

        email: ""

      };

      timeRemaining = TIME_LIMIT_SECONDS;

      timedOut = false;

      renderIntro();

    });

    document.getElementById("cert-btn").addEventListener("click", function () {

      downloadCertificate(pct, score);

    });

    sendResultByEmail(pct, score);

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

    return d.getDate() + " " +

      months[d.getMonth()] + " " +

      d.getFullYear();

  }

  function sendResultByEmail(pct, score) {

    var statusEl = document.getElementById("email-status");

    if (!student.email) {

      if (statusEl) {

        statusEl.textContent = "";

      }

      return;

    }

    if (

      !FORMSPREE_ENDPOINT ||

      FORMSPREE_ENDPOINT.indexOf("YOUR_FORM_ID") !== -1

    ) {

      if (statusEl) {

        statusEl.textContent =

          "Nəticə göndərilmədi — Formspree hələ qurulmayıb.";

      }

      return;

    }

    if (statusEl) {

      statusEl.textContent = "Nəticə göndərilir...";

    }

    var data = new FormData();

    data.append("Ad Soyad", student.name);

    data.append("Email", student.email);

    data.append(

      "Test",

      (typeof QUIZ_META !== "undefined" && QUIZ_META.title)

        ? QUIZ_META.title

        : document.title

    );

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

        if (statusEl) {

          statusEl.textContent = response.ok

            ? "Nəticə uğurla göndərildi."

            : "Nəticəni göndərmək mümkün olmadı.";

        }

      })

      .catch(function () {

        if (statusEl) {

          statusEl.textContent =

            "Nəticəni göndərmək mümkün olmadı.";

        }

      });

  }

  function downloadCertificate(pct, score) {

    var canvas = document.getElementById("cert-canvas");

    if (!canvas) {

      alert("Sertifikat hazırlana bilmədi.");

      return;

    }

    var ctx = canvas.getContext("2d");

    var W = canvas.width;

    var H = canvas.height;

    // Ad artıq məcburidir.

    // Ona görə "Şagird" fallback-i istifadə etmirik.

    var name = student.name.trim();

    if (!name) {

      alert("Sertifikat üçün ad və soyadınız daxil edilməlidir.");

      return;

    }

    var dateStr = formatAzDate(new Date());

    var title =

      (typeof QUIZ_META !== "undefined" && QUIZ_META.title)

        ? QUIZ_META.title

        : "";

    function draw() {

      ctx.fillStyle = "#FAFAF8";

      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = "#C9A227";

      ctx.lineWidth = 10;

      ctx.strokeRect(30, 30, W - 60, H - 60);

      ctx.strokeStyle = "#1B4332";

      ctx.lineWidth = 2;

      ctx.strokeRect(50, 50, W - 100, H - 100);

      ctx.textAlign = "center";

      ctx.fillStyle = "#1B4332";

      ctx.font = "italic 32px 'Libre Baskerville', serif";

      ctx.fillText("Youdidit.az", W / 2, 140);

      ctx.fillStyle = "#1B4332";

      ctx.font = "56px 'Libre Baskerville', serif";

      ctx.fillText("SERTİFİKAT", W / 2, 240);

      ctx.strokeStyle = "#C9A227";

      ctx.lineWidth = 2;

      ctx.beginPath();

      ctx.moveTo(W / 2 - 80, 270);

      ctx.lineTo(W / 2 + 80, 270);

      ctx.stroke();

      ctx.fillStyle = "#4C554E";

      ctx.font = "26px 'Inter', sans-serif";

      ctx.fillText(

        "Bu sənəd təsdiq edir ki,",

        W / 2,

        340

      );

      ctx.fillStyle = "#1B4332";

      ctx.font = "44px 'Libre Baskerville', serif";

      ctx.fillText(

        name,

        W / 2,

        410

      );

      ctx.fillStyle = "#4C554E";

      ctx.font = "26px 'Inter', sans-serif";

      wrapText(

        ctx,

        title + " testini tamamlayıb.",

        W / 2,

        470,

        W - 260,

        34

      );

      ctx.fillStyle = "#1B4332";

      ctx.font = "bold 34px 'Inter', sans-serif";

      ctx.fillText(

        "Nəticə: " +

          score +

          " / " +

          QUESTIONS.length +

          " (" +

          pct +

          "%)",

        W / 2,

        560

      );

      ctx.fillStyle = "#4C554E";

      ctx.font = "22px 'Inter', sans-serif";

      ctx.fillText(

        dateStr,

        W / 2,

        720

      );

      ctx.fillStyle = "#C9A227";

      ctx.font = "italic 20px 'Libre Baskerville', serif";

      ctx.fillText(

        "youdidit.az",

        W / 2,

        770

      );

      var link = document.createElement("a");

      var safeName = name

        .replace(

          /[^a-zA-Z0-9əöüçşğıƏÖÜÇŞĞİ ]/g,

          ""

        )

        .replace(/\s+/g, "_");

      link.download =

        "sertifikat-" +

        safeName +

        ".png";

      link.href =

        canvas.toDataURL("image/png");

      link.click();

    }

    if (

      document.fonts &&

      document.fonts.ready

    ) {

      document.fonts.ready.then(draw);

    } else {

      draw();

    }

  }

  function wrapText(

    ctx,

    text,

    x,

    y,

    maxWidth,

    lineHeight

  ) {

    var words = text.split(" ");

    var line = "";

    var lines = [];

    for (var n = 0; n < words.length; n++) {

      var testLine =

        line +

        words[n] +

        " ";

      if (

        ctx.measureText(testLine).width > maxWidth &&

        n > 0

      ) {

        lines.push(line);

        line = words[n] + " ";

      } else {

        line = testLine;

      }

    }

    lines.push(line);

    var startY =

      y -

      ((lines.length - 1) * lineHeight) / 2;

    for (var i = 0; i < lines.length; i++) {

      ctx.fillText(

        lines[i].trim(),

        x,

        startY + i * lineHeight

      );

    }

  }

  renderIntro();

})()
// logic-quiz-engine.js

// Youdidit.az — Məntiq testləri üçün mühərrik

(function () {

  "use strict";

  var FORMSPREE_ENDPOINT =

    "https://formspree.io/f/mqpkglkb";

  var TIME_LIMIT_SECONDS =

    2 * 60 * 60;

  var root =

    document.getElementById("quiz-root");

  if (!root) return;

  if (

    typeof QUESTIONS === "undefined" ||

    !Array.isArray(QUESTIONS) ||

    QUESTIONS.length === 0

  ) {

    root.innerHTML =

      '<p style="color:red;">Məntiq sualları tapılmadı.</p>';

    return;

  }

  var current = 0;

  var answers =

    new Array(QUESTIONS.length).fill(null);

  var student = {

    name: "",

    email: ""

  };

  var timeRemaining =

    TIME_LIMIT_SECONDS;

  var timerInterval = null;

  var timedOut = false;

  var finished = false;

  var DIFF_LABEL = {

    A: "Asan",

    O: "Orta",

    "Ç": "Çətin"

  };

  var DIFF_CLASS = {

    A: "diff-easy",

    O: "diff-medium",

    "Ç": "diff-hard"

  };

  /* =========================

     TIME

  ========================= */

  function formatTime(sec) {

    sec = Math.max(0, sec);

    var h =

      Math.floor(sec / 3600);

    var m =

      Math.floor(

        (sec % 3600) / 60

      );

    var s = sec % 60;

    var mm =

      m < 10 ? "0" + m : m;

    var ss =

      s < 10 ? "0" + s : s;

    return h > 0

      ? h + ":" + mm + ":" + ss

      : m + ":" + ss;

  }

  function startTimer() {

    if (timerInterval) return;

    timerInterval =

      setInterval(function () {

        timeRemaining--;

        var timer =

          document.getElementById(

            "timer-display"

          );

        if (timer) {

          timer.textContent =

            formatTime(

              timeRemaining

            );

          if (

            timeRemaining <= 60

          ) {

            timer.classList.add(

              "timer-low"

            );

          }

        }

        if (

          timeRemaining <= 0

        ) {

          stopTimer();

          timedOut = true;

          finish();

        }

      }, 1000);

  }

  function stopTimer() {

    if (timerInterval) {

      clearInterval(

        timerInterval

      );

      timerInterval = null;

    }

  }

  /* =========================

     INTRO

  ========================= */

  function renderIntro() {

    var html = "";

    html +=

      '<div class="quiz-intro">';

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

    html +=

      "</div>";

    root.innerHTML = html;

    var startBtn =

      document.getElementById(

        "start-btn"

      );

    var nameInput =

      document.getElementById(

        "qs-name"

      );

    var emailInput =

      document.getElementById(

        "qs-email"

      );

    startBtn.addEventListener(

      "click",

      function () {

        var name =

          nameInput.value.trim();

        var email =

          emailInput.value.trim();

        if (!name) {

          alert(

            "Zəhmət olmasa ad və soyadını daxil et."

          );

          nameInput.focus();

          return;

        }

        if (

          email &&

          !isValidEmail(email)

        ) {

          alert(

            "Zəhmət olmasa düzgün email ünvanı daxil et."

          );

          emailInput.focus();

          return;

        }

        student.name = name;

        student.email = email;

        startTimer();

        render();

      }

    );

  }

  function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(

      email

    );

  }

  /* =========================

     QUESTIONS

  ========================= */

  function render() {

    var item =

      QUESTIONS[current];

    var pct =

      Math.round(

        (current /

          QUESTIONS.length) *

          100

      );

    var html = "";

    html +=

      '<div class="quiz-progress-track">' +

      '<div class="quiz-progress-fill" style="width:' +

      pct +

      '%"></div>' +

      "</div>";

    var diff =

      item.d || "O";

    html +=

      '<div class="quiz-count">' +

      "Sual " +

      (current + 1) +

      " / " +

      QUESTIONS.length +

      ' <span class="diff-badge ' +

      (DIFF_CLASS[diff] ||

        "") +

      '">' +

      (DIFF_LABEL[diff] ||

        "") +

      "</span>" +

      ' <span id="timer-display" class="timer-display">' +

      formatTime(

        timeRemaining

      ) +

      "</span>" +

      "</div>";

    html +=

      '<h2 class="quiz-question">' +

      escapeHTML(item.q).replace(

        /\n/g,

        "<br>"

      ) +

      "</h2>";

    html +=

      '<div class="quiz-options">';

    for (

      var i = 0;

      i < item.options.length;

      i++

    ) {

      var checked =

        answers[current] === i

          ? " checked"

          : "";

      html +=

        '<label class="quiz-option">' +

        '<input type="radio" name="logic-answer" value="' +

        i +

        '"' +

        checked +

        ">" +

        "<span>" +

        escapeHTML(

          item.options[i]

        ) +

        "</span>" +

        "</label>";

    }

    html +=

      "</div>";

    html +=

      '<div class="quiz-nav">';

    html +=

      '<button type="button" id="prev-btn" class="btn btn-outline"' +

      (current === 0

        ? " disabled"

        : "") +

      ">" +

      "Geri" +

      "</button>";

    html +=

      '<button type="button" id="next-btn" class="btn btn-primary">' +

      (current ===

      QUESTIONS.length - 1

        ? "Bitir"

        : "Növbəti") +

      "</button>";

    html +=

      "</div>";

    root.innerHTML = html;

    var radios =

      root.querySelectorAll(

        'input[name="logic-answer"]'

      );

    for (

      var r = 0;

      r < radios.length;

      r++

    ) {

      radios[r].addEventListener(

        "change",

        function () {

          answers[current] =

            parseInt(

              this.value,

              10

            );

        }

      );

    }

    document

      .getElementById(

        "next-btn"

      )

      .addEventListener(

        "click",

        function () {

          if (

            answers[current] ===

            null

          ) {

            alert(

              "Zəhmət olmasa bir cavab seç."

            );

            return;

          }

          if (

            current <

            QUESTIONS.length - 1

          ) {

            current++;

            render();

            window.scrollTo({

              top:

                root.offsetTop -

                90,

              behavior:

                "smooth"

            });

          } else {

            finish();

          }

        }

      );

    var prevBtn =

      document.getElementById(

        "prev-btn"

      );

    if (prevBtn) {

      prevBtn.addEventListener(

        "click",

        function () {

          if (current > 0) {

            current--;

            render();

            window.scrollTo({

              top:

                root.offsetTop -

                90,

              behavior:

                "smooth"

            });

          }

        }

      );

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

    var byDiff = {

      A: {

        ok: 0,

        total: 0

      },

      O: {

        ok: 0,

        total: 0

      },

      "Ç": {

        ok: 0,

        total: 0

      }

    };

    for (

      var i = 0;

      i < QUESTIONS.length;

      i++

    ) {

      var d =

        QUESTIONS[i].d || "O";

      if (!byDiff[d]) {

        byDiff[d] = {

          ok: 0,

          total: 0

        };

      }

      byDiff[d].total++;

      if (

        answers[i] ===

        QUESTIONS[i].a

      ) {

        score++;

        byDiff[d].ok++;

      }

    }

    var pct =

      Math.round(

        (score /

          QUESTIONS.length) *

          100

      );

    var verdict;

    var verdictClass;

    var prefix =

      timedOut

        ? "Vaxt bitdi. "

        : "";

    if (pct >= 80) {

      verdict =

        prefix +

        "Əla nəticə! Bu səviyyəni yaxşı mənimsəmisən.";

      verdictClass = "ok";

    } else if (pct >= 55) {

      verdict =

        prefix +

        "Yaxşı nəticə. Bəzi mövzuları təkrar etmək faydalı olar.";

      verdictClass = "ok";

    } else {

      verdict =

        prefix +

        "Bu mövzuları müəllimlə birgə təkrar etmək tövsiyə olunur.";

      verdictClass = "err";

    }

    var html = "";

    html +=

      '<div class="quiz-result">';

    html +=

      "<h2>Nəticə: " +

      score +

      " / " +

      QUESTIONS.length +

      " (" +

      pct +

      "%)</h2>";

    html +=

      '<p class="' +

      verdictClass +

      '">' +

      verdict +

      "</p>";

    html +=

      '<div class="diff-breakdown">' +

      "<div>Asan: " +

      (byDiff.A

        ? byDiff.A.ok

        : 0) +

      "/" +

      (byDiff.A

        ? byDiff.A.total

        : 0) +

      "</div>" +

      "<div>Orta: " +

      (byDiff.O

        ? byDiff.O.ok

        : 0) +

      "/" +

      (byDiff.O

        ? byDiff.O.total

        : 0) +

      "</div>" +

      "<div>Çətin: " +

      (byDiff["Ç"]

        ? byDiff["Ç"].ok

        : 0) +

      "/" +

      (byDiff["Ç"]

        ? byDiff["Ç"].total

        : 0) +

      "</div>" +

      "</div>";

    html +=

      '<p id="email-status" class="quiz-email-status"></p>';

    html +=

      '<div class="quiz-result-actions">';

    html +=

      '<button type="button" id="cert-btn" class="btn btn-primary">' +

      "Sertifikatı yüklə" +

      "</button>";

    html +=

      '<button type="button" id="restart-btn" class="btn btn-outline">' +

      "Yenidən başla" +

      "</button>";

    html +=

      "</div>";

    html +=

      '<canvas id="cert-canvas" width="1200" height="850" style="display:none;"></canvas>';

    html +=

      "</div>";

    root.innerHTML = html;

    document

      .getElementById(

        "cert-btn"

      )

      .addEventListener(

        "click",

        function () {

          downloadCertificate(

            pct,

            score

          );

        }

      );

    document

      .getElementById(

        "restart-btn"

      )

      .addEventListener(

        "click",

        function () {

          current = 0;

          answers =

            new Array(

              QUESTIONS.length

            ).fill(null);

          timeRemaining =

            TIME_LIMIT_SECONDS;

          timedOut = false;

          finished = false;

          renderIntro();

        }

      );

    sendResultByEmail(

      pct,

      score

    );

  }

  /* =========================

     EMAIL

  ========================= */

  function sendResultByEmail(

    pct,

    score

  ) {

    var statusEl =

      document.getElementById(

        "email-status"

      );

    if (!student.email) {

      if (statusEl) {

        statusEl.textContent = "";

      }

      return;

    }

    if (!FORMSPREE_ENDPOINT) {

      if (statusEl) {

        statusEl.textContent =

          "Nəticə göndərilə bilmədi.";

      }

      return;

    }

    if (statusEl) {

      statusEl.textContent =

        "Nəticə göndərilir...";

    }

    var data =

      new FormData();

    data.append(

      "Ad Soyad",

      student.name

    );

    data.append(

      "Email",

      student.email

    );

    data.append(

      "Test",

      getQuizTitle()

    );

    data.append(

      "Nəticə",

      score +

        " / " +

        QUESTIONS.length +

        " (" +

        pct +

        "%)"

    );

    data.append(

      "Tarix",

      formatAzDate(

        new Date()

      )

    );

    fetch(

      FORMSPREE_ENDPOINT,

      {

        method: "POST",

        body: data,

        headers: {

          Accept:

            "application/json"

        }

      }

    )

      .then(function (

        response

      ) {

        if (!statusEl)

          return;

        if (response.ok) {

          statusEl.textContent =

            "Nəticə " +

            student.email +

            " ünvanına göndərildi.";

        } else {

          statusEl.textContent =

            "Nəticəni göndərmək mümkün olmadı.";

        }

      })

      .catch(function () {

        if (statusEl) {

          statusEl.textContent =

            "Nəticəni göndərmək mümkün olmadı.";

        }

      });

  }

  /* =========================

     CERTIFICATE

  ========================= */

  function downloadCertificate(

    pct,

    score

  ) {

    var canvas =

      document.getElementById(

        "cert-canvas"

      );

    if (!canvas) {

      alert(

        "Sertifikat hazırlana bilmədi."

      );

      return;

    }

    var ctx =

      canvas.getContext("2d");

    if (!ctx) {

      alert(

        "Sertifikat hazırlana bilmədi."

      );

      return;

    }

    var name =

      (student.name || "").trim();

    if (!name) {

      alert(

        "Sertifikat üçün ad və soyad daxil edilməlidir."

      );

      return;

    }

    var W = canvas.width;

    var H = canvas.height;

    var dateStr =

      formatAzDate(

        new Date()

      );

    var title =

      getQuizTitle();

    ctx.fillStyle =

      "#FAFAF8";

    ctx.fillRect(

      0,

      0,

      W,

      H

    );

    ctx.strokeStyle =

      "#C9A227";

    ctx.lineWidth = 10;

    ctx.strokeRect(

      30,

      30,

      W - 60,

      H - 60

    );

    ctx.strokeStyle =

      "#1B4332";

    ctx.lineWidth = 2;

    ctx.strokeRect(

      50,

      50,

      W - 100,

      H - 100

    );

    ctx.textAlign =

      "center";

    ctx.fillStyle =

      "#1B4332";

    ctx.font =

      "italic 32px Arial, sans-serif";

    ctx.fillText(

      "Youdidit.az",

      W / 2,

      140

    );

    ctx.fillStyle =

      "#1B4332";

    ctx.font =

      "bold 56px Arial, sans-serif";

    ctx.fillText(

      "SERTİFİKAT",

      W / 2,

      240

    );

    ctx.strokeStyle =

      "#C9A227";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(

      W / 2 - 80,

      270

    );

    ctx.lineTo(

      W / 2 + 80,

      270

    );

    ctx.stroke();

    ctx.fillStyle =

      "#4C554E";

    ctx.font =

      "26px Arial, sans-serif";

    ctx.fillText(

      "Bu sənəd təsdiq edir ki,",

      W / 2,

      340

    );

    ctx.fillStyle =

      "#1B4332";

    ctx.font =

      "bold 44px Arial, sans-serif";

    drawCenteredText(

      ctx,

      name,

      W / 2,

      410,

      W - 180

    );

    ctx.fillStyle =

      "#4C554E";

    ctx.font =

      "26px Arial, sans-serif";

    wrapText(

      ctx,

      title +

        " testini tamamlayıb.",

      W / 2,

      470,

      W - 260,

      34

    );

    ctx.fillStyle =

      "#1B4332";

    ctx.font =

      "bold 34px Arial, sans-serif";

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

    ctx.fillStyle =

      "#4C554E";

    ctx.font =

      "22px Arial, sans-serif";

    ctx.fillText(

      dateStr,

      W / 2,

      720

    );

    ctx.fillStyle =

      "#C9A227";

    ctx.font =

      "italic 20px Arial, sans-serif";

    ctx.fillText(

      "youdidit.az",

      W / 2,

      770

    );

    try {

      var image =

        canvas.toDataURL(

          "image/png"

        );

      var fileName =

        "sertifikat-" +

        makeSafeFileName(

          name

        ) +

        ".png";

      if (isIOS()) {

        openCertificateForIOS(

          image,

          fileName

        );

        return;

      }

      var link =

        document.createElement(

          "a"

        );

      link.href = image;

      link.download =

        fileName;

      link.style.display =

        "none";

      document.body.appendChild(

        link

      );

      link.click();

      document.body.removeChild(

        link

      );

    } catch (error) {

      console.error(

        "Certificate error:",

        error

      );

      alert(

        "Sertifikat hazırlana bilmədi. Səhifəni yeniləyib yenidən yoxla."

      );

    }

  }

  /* =========================

     iOS

  ========================= */

  function isIOS() {

    return (

      /iPad|iPhone|iPod/.test(

        navigator.userAgent

      ) ||

      (

        navigator.platform ===

          "MacIntel" &&

        navigator.maxTouchPoints > 1

      )

    );

  }

  function openCertificateForIOS(

    image,

    fileName

  ) {

    var newWindow =

      window.open(

        "",

        "_blank"

      );

    if (!newWindow) {

      alert(

        "Sertifikat açıla bilmədi. Safari-də pop-up icazəsini yoxla."

      );

      return;

    }

    newWindow.document.write(

      "<!DOCTYPE html>" +

      '<html lang="az">' +

      "<head>" +

      '<meta name="viewport" content="width=device-width, initial-scale=1">' +

      "<title>Sertifikat</title>" +

      "</head>" +

      '<body style="margin:0;padding:20px;background:#f5f5f5;text-align:center;">' +

      '<p style="font-family:Arial,sans-serif;">' +

      "Sertifikatı yadda saxlamaq üçün şəkli uzun bas və ya Share düyməsindən istifadə et." +

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

    if (

      typeof QUIZ_META !==

        "undefined" &&

      QUIZ_META &&

      QUIZ_META.title

    ) {

      return QUIZ_META.title;

    }

    return (

      document.title ||

      "Məntiq testi"

    );

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

    return (

      d.getDate() +

      " " +

      months[d.getMonth()] +

      " " +

      d.getFullYear()

    );

  }

  function makeSafeFileName(

    name

  ) {

    var safe =

      name

        .replace(

          /[^a-zA-Z0-9əöüçşğıƏÖÜÇŞĞİİ ]/g,

          ""

        )

        .replace(

          /\s+/g,

          "_"

        );

    return (

      safe ||

      "sertifikat"

    );

  }

  function drawCenteredText(

    ctx,

    text,

    x,

    y,

    maxWidth

  ) {

    var fontSize = 44;

    while (

      ctx.measureText(

        text

      ).width >

        maxWidth &&

      fontSize > 24

    ) {

      fontSize -= 2;

      ctx.font =

        "bold " +

        fontSize +

        "px Arial, sans-serif";

    }

    ctx.fillText(

      text,

      x,

      y

    );

  }

  function wrapText(

    ctx,

    text,

    x,

    y,

    maxWidth,

    lineHeight

  ) {

    var words =

      text.split(" ");

    var line = "";

    var lines = [];

    for (

      var n = 0;

      n < words.length;

      n++

    ) {

      var testLine =

        line +

        words[n] +

        " ";

      if (

        ctx.measureText(

          testLine

        ).width >

          maxWidth &&

        n > 0

      ) {

        lines.push(line);

        line =

          words[n] +

          " ";

      } else {

        line =

          testLine;

      }

    }

    lines.push(line);

    var startY =

      y -

      ((lines.length - 1) *

        lineHeight) /

        2;

    for (

      var i = 0;

      i < lines.length;

      i++

    ) {

      ctx.fillText(

        lines[i].trim(),

        x,

        startY +

          i *

            lineHeight

      );

    }

  }

  function escapeHTML(

    value

  ) {

    return String(value)

      .replace(

        /&/g,

        "&amp;"

      )

      .replace(

        /</g,

        "&lt;"

      )

      .replace(

        />/g,

        "&gt;"

      )

      .replace(

        /"/g,

        "&quot;"

      )

      .replace(

        /'/g,

        "&#039;"

      );

  }

  renderIntro();

})()
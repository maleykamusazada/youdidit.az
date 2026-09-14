/* =========================================================

   YOUDIDIT.AZ — ÜMUMİ QUIZ ENGINE

   =========================================================

   Sual formatı:

   var QUIZ_META = {

     title: "Biologiya — I Fəsil"

   };

   var QUESTIONS = [

     {

       q: "Sual mətni?",

       options: [

         "A variantı",

         "B variantı",

         "C variantı",

         "D variantı"

       ],

       a: 0

     }

   ];

   a:

   0 = A

   1 = B

   2 = C

   3 = D

   ========================================================= */

(function () {

  "use strict";

  /* =========================================================

     ƏSAS AYARLAR

     ========================================================= */

  var FORMSPREE_ENDPOINT = "https://formspree.io/f/mqpkglkb";

  /*

    Vaxt avtomatik sual sayına görə seçilir:

    50 sual  = 60 dəqiqə

    60 sual  = 75 dəqiqə

    100 sual = 120 dəqiqə

  */

  function getTimeLimit(questionCount) {
  if (questionCount <= 50) return 60 * 60;
  if (questionCount <= 60) return 75 * 60;
  if (questionCount <= 100) return 120 * 60;
  return 120 * 60;
}

    /*

      100-dən çox sual olarsa,

      təhlükəsiz standart olaraq 120 dəqiqə.

    */

    return 120 * 60;

  }

  /* =========================================================

     SUALLARIN YOXLANMASI

     ========================================================= */

  if (typeof QUESTIONS === "undefined" || !Array.isArray(QUESTIONS)) {

    console.error(

      "QUESTIONS tapılmadı. Sual faylının quiz-engine.js-dən əvvəl yükləndiyinə əmin olun."

    );

    return;

  }

  if (QUESTIONS.length === 0) {

    console.error("QUESTIONS massivində sual yoxdur.");

    return;

  }

  var QUESTION_COUNT = QUESTIONS.length;

  var TIME_LIMIT_SECONDS = getTimeLimit(QUESTION_COUNT);

  /* =========================================================

     QUIZ META

     ========================================================= */

  var META = {

    title:

      typeof QUIZ_META !== "undefined" &&

      QUIZ_META &&

      QUIZ_META.title

        ? QUIZ_META.title

        : document.title

  };

  /* =========================================================

     DOM

     ========================================================= */

  var root = document.getElementById("quiz-root");

  if (!root) {

    console.error(

      '#quiz-root elementi tapılmadı. HTML-də <div id="quiz-root"></div> olmalıdır.'

    );

    return;

  }

  /* =========================================================

     STATE

     ========================================================= */

  var currentQuestion = 0;

  var answers = new Array(QUESTION_COUNT).fill(null);

  var studentName = "";

  var studentEmail = "";

  var timeLeft = TIME_LIMIT_SECONDS;

  var timerInterval = null;

  var examStarted = false;

  var examFinished = false;

  /* =========================================================

     YARDIMÇI FUNKSİYALAR

     ========================================================= */

  function escapeHTML(value) {

    return String(value)

      .replace(/&/g, "&amp;")

      .replace(/</g, "&lt;")

      .replace(/>/g, "&gt;")

      .replace(/"/g, "&quot;")

      .replace(/'/g, "&#039;");

  }

  function formatTime(seconds) {

    seconds = Math.max(0, seconds);

    var hours = Math.floor(seconds / 3600);

    var minutes = Math.floor(

      (seconds % 3600) / 60

    );

    var secs = seconds % 60;

    return (

      String(hours).padStart(2, "0") +

      ":" +

      String(minutes).padStart(2, "0") +

      ":" +

      String(secs).padStart(2, "0")

    );

  }

  function getAnsweredCount() {

    return answers.filter(function (answer) {

      return answer !== null;

    }).length;

  }

  /* =========================================================

     BAŞLANĞIC EKRANI

     ========================================================= */

  function renderIntro() {

    stopTimer();

    examStarted = false;

    examFinished = false;

    root.innerHTML = `

      <div class="quiz-intro">

        <div class="quiz-intro-title">

          ${escapeHTML(META.title)}

        </div>

        <div class="quiz-info">

          <div class="quiz-info-item">

            <strong>${QUESTION_COUNT}</strong>

            <span>Sual</span>

          </div>

          <div class="quiz-info-item">

            <strong>${Math.floor(TIME_LIMIT_SECONDS / 60)}</strong>

            <span>Dəqiqə</span>

          </div>

        </div>

        <div class="quiz-notice">

          <strong>İmtahan qaydaları</strong>

          <ul>

            <li>Hər sual üçün yalnız bir cavab seçilə bilər.</li>

            <li>Vaxt bitdikdə imtahan avtomatik tamamlanacaq.</li>

            <li>Nəticə imtahanın sonunda göstəriləcək.</li>

            <li>Sertifikat nəticə səhifəsində təqdim olunacaq.</li>

          </ul>

        </div>

        <div class="quiz-form">

          <label>

            Ad və Soyad

          </label>

          <input

            type="text"

            id="student-name"

            placeholder="Ad və soyadınızı yazın"

            autocomplete="name"

          >

          <label>

            Email

            <span>(istəyə bağlı)</span>

          </label>

          <input

            type="email"

            id="student-email"

            placeholder="example@gmail.com"

            autocomplete="email"

          >

          <button

            type="button"

            id="start-quiz"

            class="quiz-start-btn"

          >

            İmtahana başla

          </button>

          <button

            type="button"

            id="skip-email"

            class="quiz-skip-btn"

          >

            Email olmadan davam et

          </button>

        </div>

      </div>

    `;

    var startButton =

      document.getElementById("start-quiz");

    var skipEmailButton =

      document.getElementById("skip-email");

    startButton.addEventListener(

      "click",

      function () {

        var nameInput =

          document.getElementById("student-name");

        var emailInput =

          document.getElementById("student-email");

        var name =

          nameInput.value.trim();

        var email =

          emailInput.value.trim();

        if (!name) {

          alert(

            "Zəhmət olmasa ad və soyadınızı yazın."

          );

          nameInput.focus();

          return;

        }

        if (

          email &&

          !isValidEmail(email)

        ) {

          alert(

            "Zəhmət olmasa düzgün email ünvanı daxil edin."

          );

          emailInput.focus();

          return;

        }

        studentName = name;

        studentEmail = email;

        beginExam();

      }

    );

    skipEmailButton.addEventListener(

      "click",

      function () {

        var nameInput =

          document.getElementById("student-name");

        var name =

          nameInput.value.trim();

        if (!name) {

          alert(

            "Zəhmət olmasa ad və soyadınızı yazın."

          );

          nameInput.focus();

          return;

        }

        studentName = name;

        studentEmail = "";

        beginExam();

      }

    );

  }

  /* =========================================================

     EMAIL YOXLAMASI

     ========================================================= */

  function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  }

  /* =========================================================

     İMTAHANI BAŞLAT

     ========================================================= */

  function beginExam() {

    currentQuestion = 0;

    answers = new Array(

      QUESTION_COUNT

    ).fill(null);

    timeLeft = TIME_LIMIT_SECONDS;

    examStarted = true;

    examFinished = false;

    renderExam();

    startTimer();

  }

  /* =========================================================

     TIMER

     ========================================================= */

  function startTimer() {

    stopTimer();

    updateTimer();

    timerInterval = setInterval(

      function () {

        if (!examStarted || examFinished) {

          stopTimer();

          return;

        }

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

          timeLeft = 0;

          updateTimer();

          stopTimer();

          alert(

            "İmtahan vaxtı başa çatdı. Nəticəniz hesablanır."

          );

          finishExam(true);

        }

      },

      1000

    );

  }

  function stopTimer() {

    if (timerInterval) {

      clearInterval(timerInterval);

      timerInterval = null;

    }

  }

  function updateTimer() {

    var timer =

      document.getElementById(

        "timer-display"

      );

    if (!timer) return;

    timer.textContent =

      formatTime(timeLeft);

    timer.classList.remove(

      "timer-warning",

      "timer-danger"

    );

    /*

      Son 10 dəqiqə

    */

    if (

      timeLeft <= 10 * 60 &&

      timeLeft > 5 * 60

    ) {

      timer.classList.add(

        "timer-warning"

      );

    }

    /*

      Son 5 dəqiqə

    */

    if (timeLeft <= 5 * 60) {

      timer.classList.add(

        "timer-danger"

      );

    }

  }

  /* =========================================================

     İMTAHAN EKRANI

     ========================================================= */

  function renderExam() {

    var question =

      QUESTIONS[currentQuestion];

    if (!question) {

      finishExam(false);

      return;

    }

    root.innerHTML = `

      <div class="quiz-header">

        <div class="quiz-progress">

          Sual

          <strong>

            ${currentQuestion + 1}

          </strong>

          /

          ${QUESTION_COUNT}

        </div>

        <div

          id="timer-display"

          class="quiz-timer"

        >

          ${formatTime(timeLeft)}

        </div>

      </div>

      <div class="quiz-question">

        <div class="question-number">

          Sual ${currentQuestion + 1}

        </div>

        <div class="question-text">

          ${escapeHTML(question.q)}

        </div>

        <div class="question-options">

          ${question.options

            .map(function (option, index) {

              var selected =

                answers[currentQuestion] === index;

              var letter =

                String.fromCharCode(

                  65 + index

                );

              return `

                <button

                  type="button"

                  class="question-option ${

                    selected

                      ? "selected"

                      : ""

                  }"

                  data-option="${index}"

                >

                  <span class="option-letter">

                    ${letter}

                  </span>

                  <span class="option-text">

                    ${escapeHTML(option)}

                  </span>

                </button>

              `;

            })

            .join("")}

        </div>

      </div>

      <div class="quiz-navigation">

        <button

          type="button"

          id="prev-question"

          class="quiz-nav-btn"

          ${currentQuestion === 0 ? "disabled" : ""}

        >

          ← Əvvəlki

        </button>

        <div class="answered-counter">

          ${getAnsweredCount()}

          / ${QUESTION_COUNT}

        </div>

        ${

          currentQuestion <

          QUESTION_COUNT - 1

            ? `

              <button

                type="button"

                id="next-question"

                class="quiz-nav-btn primary"

              >

                Növbəti →

              </button>

            `

            : `

              <button

                type="button"

                id="finish-question"

                class="quiz-nav-btn finish"

              >

                İmtahanı tamamla

              </button>

            `

        }

      </div>

    `;

    attachQuestionEvents();

    updateTimer();

  }

  /* =========================================================

     SUAL EVENTLƏRİ

     ========================================================= */

  function attachQuestionEvents() {

    var optionButtons =

      document.querySelectorAll(

        ".question-option"

      );

    optionButtons.forEach(

      function (button) {

        button.addEventListener(

          "click",

          function () {

            var index =

              Number(

                button.dataset.option

              );

            answers[currentQuestion] =

              index;

            renderExam();

          }

        );

      }

    );

    var previousButton =

      document.getElementById(

        "prev-question"

      );

    if (previousButton) {

      previousButton.addEventListener(

        "click",

        function () {

          if (currentQuestion > 0) {

            currentQuestion--;

            renderExam();

          }

        }

      );

    }

    var nextButton =

      document.getElementById(

        "next-question"

      );

    if (nextButton) {

      nextButton.addEventListener(

        "click",

        function () {

          if (

            currentQuestion <

            QUESTION_COUNT - 1

          ) {

            currentQuestion++;

            renderExam();

          }

        }

      );

    }

    var finishButton =

      document.getElementById(

        "finish-question"

      );

    if (finishButton) {

      finishButton.addEventListener(

        "click",

        function () {

          var unanswered =

            QUESTION_COUNT -

            getAnsweredCount();

          if (unanswered > 0) {

            var confirmed =

              confirm(

                "Cavablandırılmamış " +

                unanswered +

                " sual var.\n\n" +

                "İmtahanı tamamlamaq istəyirsiniz?"

              );

            if (!confirmed) {

              return;

            }

          }

          finishExam(false);

        }

      );

    }

  }

  /* =========================================================

     NƏTİCƏ HESABLANMASI

     ========================================================= */

  function calculateResult() {

    var correct = 0;

    var wrong = 0;

    var unanswered = 0;

    QUESTIONS.forEach(

      function (question, index) {

        var selected =

          answers[index];

        if (selected === null) {

          unanswered++;

          return;

        }

        if (

          Number(question.a) ===

          Number(selected)

        ) {

          correct++;

        } else {

          wrong++;

        }

      }

    );

    var percentage =

      QUESTION_COUNT > 0

        ? Math.round(

            (correct / QUESTION_COUNT) *

            100

          )

        : 0;

    return {

      correct: correct,

      wrong: wrong,

      unanswered: unanswered,

      percentage: percentage,

      total: QUESTION_COUNT

    };

  }

  /* =========================================================

     İMTAHANI TAMAMLA

     ========================================================= */

  function finishExam(autoFinished) {

    if (examFinished) {

      return;

    }

    examFinished = true;

    examStarted = false;

    stopTimer();

    var result =

      calculateResult();

    renderResult(

      result,

      autoFinished

    );

    sendResultEmail(

      result,

      autoFinished

    );

  }

  /* =========================================================

     NƏTİCƏ EKRANI

     ========================================================= */

  function renderResult(

    result,

    autoFinished

  ) {

    var message = "";

    if (result.percentage >= 90) {

      message =

        "Əla nəticə!";

    } else if (

      result.percentage >= 80

    ) {

      message =

        "Çox yaxşı nəticə!";

    } else if (

      result.percentage >= 70

    ) {

      message =

        "Yaxşı nəticə!";

    } else if (

      result.percentage >= 50

    ) {

      message =

        "Nəticənizi daha da yaxşılaşdıra bilərsiniz.";

    } else {

      message =

        "Nəticənizi inkişaf etdirmək üçün yenidən cəhd edə bilərsiniz.";

    }

    root.innerHTML = `

      <div class="quiz-result">

        <div class="result-title">

          İmtahan tamamlandı

        </div>

        ${

          autoFinished

            ? `

              <div class="result-timeout">

                Vaxt bitdiyi üçün imtahan avtomatik tamamlandı.

              </div>

            `

            : ""

        }

        <div class="result-name">

          ${escapeHTML(studentName)}

        </div>

        <div class="result-score">

          <div class="score-number">

            ${result.percentage}%

          </div>

          <div class="score-label">

            Nəticə

          </div>

        </div>

        <div class="result-message">

          ${message}

        </div>

        <div class="result-stats">

          <div class="result-stat">

            <strong>

              ${result.correct}

            </strong>

            <span>

              Düzgün

            </span>

          </div>

          <div class="result-stat">

            <strong>

              ${result.wrong}

            </strong>

            <span>

              Səhv

            </span>

          </div>

          <div class="result-stat">

            <strong>

              ${result.unanswered}

            </strong>

            <span>

              Cavabsız

            </span>

          </div>

        </div>

        <div class="result-actions">

          <button

            type="button"

            id="certificate-button"

            class="certificate-btn"

          >

            🏆 Sertifikatı yüklə

          </button>

          <button

            type="button"

            id="restart-button"

            class="restart-btn"

          >

            🔄 Yenidən başla

          </button>

        </div>

        <div class="result-note">

          Bu nəticə ilkin qiymətləndirmə məqsədi daşıyır.

          Psixoloji və peşə uyğunluğu testləri klinik

          diaqnoz və ya təkbaşına işə qəbul qərarı kimi

          istifadə edilməməlidir.

        </div>

        <div

          id="email-status"

          class="email-status"

        ></div>

      </div>

    `;

    var certificateButton =

      document.getElementById(

        "certificate-button"

      );

    certificateButton.addEventListener(

      "click",

      function () {

        downloadCertificate(

          result

        );

      }

    );

    var restartButton =

      document.getElementById(

        "restart-button"

      );

    restartButton.addEventListener(

      "click",

      function () {

        studentName = "";

        studentEmail = "";

        renderIntro();

      }

    );

  }

  /* =========================================================

     FORMspree — NƏTİCƏ GÖNDƏRİLMƏSİ

     ========================================================= */

  function sendResultEmail(

    result,

    autoFinished

  ) {

    var status =

      document.getElementById(

        "email-status"

      );

    if (!studentEmail) {

      if (status) {

        status.textContent =

          "Email daxil edilmədiyi üçün nəticə emailə göndərilmədi.";

      }

      return;

    }

    if (status) {

      status.textContent =

        "Nəticə emailə göndərilir...";

    }

    var formData =

      new FormData();

    formData.append(

      "name",

      studentName

    );

    formData.append(

      "email",

      studentEmail

    );

    formData.append(

      "exam",

      META.title

    );

    formData.append(

      "total_questions",

      result.total

    );

    formData.append(

      "correct",

      result.correct

    );

    formData.append(

      "wrong",

      result.wrong

    );

    formData.append(

      "unanswered",

      result.unanswered

    );

    formData.append(

      "percentage",

      result.percentage + "%"

    );

    formData.append(

      "status",

      autoFinished

        ? "Vaxt bitdiyi üçün avtomatik tamamlandı"

        : "Normal tamamlandı"

    );

    fetch(

      FORMSPREE_ENDPOINT,

      {

        method: "POST",

        body: formData,

        headers: {

          Accept: "application/json"

        }

      }

    )

      .then(function (response) {

        if (!response.ok) {

          throw new Error(

            "Email göndərilə bilmədi."

          );

        }

        return response.json();

      })

      .then(function () {

        if (status) {

          status.textContent =

            "✓ Nəticəniz emailə göndərildi.";

        }

      })

      .catch(function (error) {

        console.error(

          "Formspree error:",

          error

        );

        if (status) {

          status.textContent =

            "Nəticə göndərilərkən problem yarandı. Sertifikatı yenə də yükləyə bilərsiniz.";

        }

      });

  }

  /* =========================================================

     SERTİFİKAT

     ========================================================= */

  function downloadCertificate(

    result

  ) {

    var canvas =

      document.createElement(

        "canvas"

      );

    var ctx =

      canvas.getContext("2d");

    canvas.width = 1600;

    canvas.height = 1100;

    /*

      Arxa fon

    */

    ctx.fillStyle =

      "#0b0715";

    ctx.fillRect(

      0,

      0,

      canvas.width,

      canvas.height

    );

    /*

      Xarici çərçivə

    */

    ctx.strokeStyle =

      "#9b6cff";

    ctx.lineWidth = 8;

    ctx.strokeRect(

      50,

      50,

      canvas.width - 100,

      canvas.height - 100

    );

    /*

      Daxili çərçivə

    */

    ctx.strokeStyle =

      "#d8c6ff";

    ctx.lineWidth = 2;

    ctx.strokeRect(

      75,

      75,

      canvas.width - 150,

      canvas.height - 150

    );

    /*

      Youdidit.az

    */

    ctx.fillStyle =

      "#ffffff";

    ctx.textAlign =

      "center";

    ctx.font =

      "bold 48px Arial";

    ctx.fillText(

      "YOUDIDIT.AZ",

      800,

      180

    );

    /*

      Sertifikat başlığı

    */

    ctx.font =

      "bold 68px Arial";

    ctx.fillText(

      "SERTİFİKAT",

      800,

      300

    );

    /*

      Ad

    */

    ctx.fillStyle =

      "#d7c5ff";

    ctx.font =

      "bold 58px Arial";

    ctx.fillText(

      studentName || "Şagird",

      800,

      430

    );

    /*

      İmtahan adı

    */

    ctx.fillStyle =

      "#ffffff";

    ctx.font =

      "34px Arial";

    var title =

      META.title;

    /*

      Uzun başlığı iki sətrə böl

    */

    var maxWidth = 1200;

    var words =

      title.split(" ");

    var line = "";

    var lines = [];

    words.forEach(

      function (word) {

        var testLine =

          line

            ? line + " " + word

            : word;

        var width =

          ctx.measureText(

            testLine

          ).width;

        if (width > maxWidth) {

          lines.push(line);

          line = word;

        } else {

          line = testLine;

        }

      }

    );

    if (line) {

      lines.push(line);

    }

    lines

      .slice(0, 3)

      .forEach(

        function (text, index) {

          ctx.fillText(

            text,

            800,

            530 + index * 48

          );

        }

      );

    /*

      Nəticə

    */

    ctx.fillStyle =

      "#ffffff";

    ctx.font =

      "bold 46px Arial";

    ctx.fillText(

      "Nəticə: " +

      result.correct +

      " / " +

      result.total +

      "  •  " +

      result.percentage +

      "%",

      800,

      720

    );

    /*

      Sertifikat mətni

    */

    ctx.font =

      "28px Arial";

    ctx.fillStyle =

      "#d9d9d9";

    ctx.fillText(

      "İmtahanda iştirak etdiyinə görə təqdim olunur.",

      800,

      820

    );

    /*

      Tarix

    */

    var date =

      new Date();

    var dateText =

      date.toLocaleDateString(

        "az-AZ"

      );

    ctx.font =

      "25px Arial";

    ctx.fillStyle =

      "#bdbdbd";

    ctx.fillText(

      dateText,

      800,

      900

    );

    /*

      Sertifikat ID

    */

    var certificateId =

      "YD-" +

      Date.now()

        .toString()

        .slice(-8);

    ctx.font =

      "20px Arial";

    ctx.fillText(

      "Sertifikat ID: " +

      certificateId,

      800,

      950

    );

    /*

      PNG olaraq yüklə

    */

    canvas.toBlob(

      function (blob) {

        if (!blob) {

          alert(

            "Sertifikat yaradılarkən problem yarandı."

          );

          return;

        }

        var url =

          URL.createObjectURL(

            blob

          );

        var link =

          document.createElement(

            "a"

          );

        link.href = url;

        link.download =

          "Youdidit.az-Sertifikat-" +

          sanitizeFileName(

            studentName || "Şagird"

          ) +

          ".png";

        document.body.appendChild(

          link

        );

        link.click();

        document.body.removeChild(

          link

        );

        setTimeout(

          function () {

            URL.revokeObjectURL(

              url

            );

          },

          1000

        );

      },

      "image/png"

    );

  }

  /* =========================================================

     FAYL ADINI TƏMİZLƏ

     ========================================================= */

  function sanitizeFileName(

    name

  ) {

    return name

      .replace(

        /[<>:"/\\|?*]+/g,

        ""

      )

      .replace(

        /\s+/g,

        "-"

      );

  }

  /* =========================================================

     CSS

     ========================================================= */

  function injectStyles() {

    if (

      document.getElementById(

        "youdidit-quiz-engine-style"

      )

    ) {

      return;

    }

    var style =

      document.createElement(

        "style"

      );

    style.id =

      "youdidit-quiz-engine-style";

    style.textContent = `

      #quiz-root {

        width: 100%;

      }

      .quiz-intro,

      .quiz-result,

      .quiz-question {

        width: 100%;

      }

      .quiz-intro-title {

        font-size: 28px;

        font-weight: 800;

        line-height: 1.3;

        margin-bottom: 24px;

      }

      .quiz-info {

        display: flex;

        gap: 14px;

        margin-bottom: 25px;

      }

      .quiz-info-item {

        flex: 1;

        padding: 18px;

        border-radius: 14px;

        background: rgba(255,255,255,.06);

        text-align: center;

      }

      .quiz-info-item strong {

        display: block;

        font-size: 28px;

        margin-bottom: 4px;

      }

      .quiz-info-item span {

        opacity: .7;

      }

      .quiz-notice {

        padding: 18px;

        border-radius: 14px;

        background: rgba(155,108,255,.10);

        margin-bottom: 25px;

        line-height: 1.6;

      }

      .quiz-notice ul {

        margin: 10px 0 0;

        padding-left: 22px;

      }

      .quiz-form {

        display: flex;

        flex-direction: column;

        gap: 10px;

      }

      .quiz-form label {

        font-weight: 700;

        margin-top: 6px;

      }

      .quiz-form label span {

        font-weight: 400;

        opacity: .6;

      }

      .quiz-form input {

        width: 100%;

        box-sizing: border-box;

        padding: 15px 16px;

        border-radius: 12px;

        border: 1px solid rgba(255,255,255,.15);

        background: rgba(255,255,255,.06);

        color: inherit;

        font-size: 16px;

        outline: none;

      }

      .quiz-start-btn,

      .quiz-skip-btn,

      .certificate-btn,

      .restart-btn,

      .quiz-nav-btn {

        border: 0;

        cursor: pointer;

        border-radius: 12px;

        padding: 14px 20px;

        font-size: 16px;

        font-weight: 700;

      }

      .quiz-start-btn {

        margin-top: 12px;

        background: #8b5cf6;

        color: #fff;

      }

      .quiz-skip-btn {

        background: transparent;

        color: inherit;

        opacity: .7;

      }

      .quiz-header {

        display: flex;

        align-items: center;

        justify-content: space-between;

        gap: 15px;

        margin-bottom: 25px;

      }

      .quiz-progress {

        font-size: 17px;

      }

      .quiz-timer {

        padding: 10px 16px;

        border-radius: 12px;

        background: rgba(255,255,255,.08);

        font-family: monospace;

        font-size: 20px;

        font-weight: 800;

        letter-spacing: 1px;

      }

      .quiz-timer.timer-warning {

        background: rgba(245,158,11,.18);

      }

      .quiz-timer.timer-danger {

        background: rgba(239,68,68,.22);

        animation: timerPulse 1s infinite;

      }

      @keyframes timerPulse {

        0%, 100% {

          opacity: 1;

        }

        50% {

          opacity: .55;

        }

      }

      .question-number {

        font-size: 14px;

        opacity: .6;

        margin-bottom: 10px;

      }

      .question-text {

        font-size: 22px;

        font-weight: 700;

        line-height: 1.5;

        margin-bottom: 24px;

      }

      .question-options {

        display: flex;

        flex-direction: column;

        gap: 12px;

      }

      .question-option {

        width: 100%;

        display: flex;

        align-items: flex-start;

        gap: 14px;

        text-align: left;

        padding: 16px;

        border-radius: 14px;

        border: 1px solid rgba(255,255,255,.12);

        background: rgba(255,255,255,.045);

        color: inherit;

        cursor: pointer;

        font-size: 16px;

        line-height: 1.45;

        transition: .2s;

      }

      .question-option:hover {

        transform: translateY(-1px);

        background: rgba(255,255,255,.08);

      }

      .question-option.selected {

        border-color: #9b6cff;

        background: rgba(155,108,255,.16);

      }

      .option-letter {

        min-width: 32px;

        height: 32px;

        border-radius: 50%;

        display: flex;

        align-items: center;

        justify-content: center;

        background: rgba(255,255,255,.1);

        font-weight: 800;

      }

      .option-text {

        flex: 1;

      }

      .quiz-navigation {

        display: flex;

        align-items: center;

        justify-content: space-between;

        gap: 10px;

        margin-top: 28px;

      }

      .quiz-nav-btn {

        background: rgba(255,255,255,.08);

        color: inherit;

      }

      .quiz-nav-btn.primary {

        background: #8b5cf6;

        color: white;

      }

      .quiz-nav-btn.finish {

        background: #16a34a;

        color: white;

      }

      .quiz-nav-btn:disabled {

        opacity: .35;

        cursor: not-allowed;

      }

      .answered-counter {

        font-size: 14px;

        opacity: .7;

      }

      .result-title {

        font-size: 32px;

        font-weight: 800;

        margin-bottom: 15px;

      }

      .result-name {

        font-size: 24px;

        font-weight: 700;

        margin: 10px 0 25px;

      }

      .result-score {

        text-align: center;

        margin: 25px 0;

      }

      .score-number {

        font-size: 70px;

        font-weight: 900;

      }

      .score-label {

        opacity: .65;

      }

      .result-message {

        text-align: center;

        font-size: 18px;

        margin-bottom: 25px;

      }

      .result-stats {

        display: grid;

        grid-template-columns: repeat(3, 1fr);

        gap: 12px;

      }

      .result-stat {

        text-align: center;

        padding: 18px 10px;

        border-radius: 14px;

        background: rgba(255,255,255,.06);

      }

      .result-stat strong {

        display: block;

        font-size: 27px;

        margin-bottom: 4px;

      }

      .result-stat span {

        font-size: 13px;

        opacity: .65;

      }

      .result-actions {

        display: flex;

        flex-direction: column;

        gap: 10px;

        margin-top: 30px;

      }

      .certificate-btn {

        background: #8b5cf6;

        color: white;

      }

      .restart-btn {

        background: rgba(255,255,255,.08);

        color: inherit;

      }

      .result-note {

        margin-top: 25px;

        padding: 15px;

        border-radius: 12px;

        background: rgba(255,255,255,.04);

        font-size: 13px;

        line-height: 1.6;

        opacity: .7;

      }

      .result-timeout {

        padding: 12px;

        margin-bottom: 20px;

        border-radius: 12px;

        background: rgba(239,68,68,.12);

        color: #ffb4b4;

      }

      .email-status {

        text-align: center;

        margin-top: 15px;

        font-size: 14px;

        opacity: .75;

      }

      @media (max-width: 600px) {

        .quiz-header {

          align-items: flex-start;

          flex-direction: column;

        }

        .quiz-timer {

          width: 100%;

          box-sizing: border-box;

          text-align: center;

        }

        .question-text {

          font-size: 19px;

        }

        .quiz-navigation {

          flex-wrap: wrap;

        }

        .answered-counter {

          order: -1;

          width: 100%;

          text-align: center;

        }

        .result-stats {

          grid-template-columns: 1fr;

        }

        .score-number {

          font-size: 58px;

        }

      }

    `;

    document.head.appendChild(

      style

    );

  }

  /* =========================================================

     BAŞLAT

     ========================================================= */

  injectStyles();

  renderIntro();

})();
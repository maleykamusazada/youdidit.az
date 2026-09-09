var QUIZ_META = {

  title: "10-cu sinif üçün riyazi məntiq testi",

  grade: 10

};

var QUESTIONS = [

  {

    q: "2³ · 2⁴ ifadəsinin qiyməti neçədir?",

    d: "A",

    options: ["32", "64", "128", "256"],

    a: 2

  },

  {

    q: "3⁵ : 3² ifadəsini sadələşdir.",

    d: "A",

    options: ["3²", "3³", "3⁷", "3¹⁰"],

    a: 1

  },

  {

    q: "(a³)⁴ ifadəsinin sadələşdirilmiş forması hansıdır?",

    d: "O",

    options: ["a⁷", "a¹²", "a⁸", "a⁹"],

    a: 1

  },

  {

    q: "√72 ifadəsini sadə radikal şəklində yaz.",

    d: "O",

    options: ["3√8", "4√3", "6√2", "8√2"],

    a: 2

  },

  {

    q: "√12 + √27 ifadəsini sadələşdir.",

    d: "Ç",

    options: ["3√3", "4√3", "5√3", "6√3"],

    a: 2

  },

  {

    q: "√5 · √20 ifadəsinin qiyməti neçədir?",

    d: "A",

    options: ["5", "10", "15", "20"],

    a: 1

  },

  {

    q: "x² − 9x + 20 = 0 tənliyinin kökləri hansılardır?",

    d: "O",

    options: ["2 və 10", "4 və 5", "−4 və −5", "1 və 20"],

    a: 1

  },

  {

    q: "2x² − 5x − 3 = 0 tənliyinin kökləri hansılardır?",

    d: "Ç",

    options: ["3 və −1/2", "−3 və 1/2", "3 və 1/2", "−3 və −1/2"],

    a: 0

  },

  {

    q: "x² − 6x + 9 = 0 tənliyinin neçə müxtəlif həqiqi kökü var?",

    d: "A",

    options: ["0", "1", "2", "3"],

    a: 1

  },

  {

    q: "x² + 4x + 8 = 0 tənliyinin həqiqi kökü varmı?",

    d: "O",

    options: ["Bəli, 1 kökü var", "Bəli, 2 kökü var", "Xeyr, həqiqi kökü yoxdur", "Yalnız x = 0"],

    a: 2

  },

  {

    q: "x² − 5x + 6 < 0 bərabərsizliyinin həlli hansıdır?",

    d: "Ç",

    options: ["x < 2 və ya x > 3", "2 < x < 3", "x ≤ 2 və ya x ≥ 3", "−2 < x < 3"],

    a: 1

  },

  {

    q: "x² − 16 ≥ 0 bərabərsizliyinin həlli hansıdır?",

    d: "A",

    options: ["−4 ≤ x ≤ 4", "x < −4 və ya x > 4", "x ≤ −4 və ya x ≥ 4", "x > 4"],

    a: 2

  },

  {

    q: "|2x − 3| = 7 tənliyinin kökləri hansılardır?",

    d: "O",

    options: ["5 və −2", "−5 və 2", "5 və 2", "−5 və −2"],

    a: 0

  },

  {

    q: "|x + 2| < 4 bərabərsizliyinin həlli hansıdır?",

    d: "Ç",

    options: ["−6 < x < 2", "−2 < x < 4", "−4 < x < 6", "x < −6 və ya x > 2"],

    a: 0

  },

  {

    q: "f(x) = 2x − 5 funksiyasında f(4) neçədir?",

    d: "A",

    options: ["2", "3", "4", "5"],

    a: 1

  },

  {

    q: "f(x) = x² − 3x + 2 funksiyasında f(2) neçədir?",

    d: "A",

    options: ["0", "1", "2", "4"],

    a: 0

  },

  {

    q: "y = 3x − 6 düz xətti OX oxunu hansı nöqtədə kəsir?",

    d: "O",

    options: ["(0, −6)", "(2, 0)", "(−2, 0)", "(0, 2)"],

    a: 1

  },

  {

    q: "y = −2x + 4 funksiyasının OY oxu ilə kəsişmə nöqtəsi hansıdır?",

    d: "Ç",

    options: ["(2, 0)", "(0, 4)", "(−2, 0)", "(0, −4)"],

    a: 1

  },

  {

    q: "f(x) = x² funksiyasının qrafiki hansı növ əyridir?",

    d: "A",

    options: ["Düz xətt", "Parabola", "Çevrə", "Hiperbola"],

    a: 1

  },

  {

    q: "y = x² − 4 funksiyasının minimum qiyməti neçədir?",

    d: "O",

    options: ["−4", "−2", "0", "4"],

    a: 0

  },

  {

    q: "a₁ = 5, d = 3 olan arifmetik silsilənin 15-ci həddi neçədir?",

    d: "Ç",

    options: ["44", "45", "47", "50"],

    a: 2

  },

  {

    q: "2, 5, 8, 11, ... arifmetik silsiləsinin 20-ci həddi neçədir?",

    d: "A",

    options: ["56", "59", "62", "65"],

    a: 1

  },

  {

    q: "Arifmetik silsilədə a₁ = 4, a₁₀ = 31-dir. Fərq neçədir?",

    d: "O",

    options: ["2", "3", "4", "5"],

    a: 1

  },

  {

    q: "3, 6, 12, 24, ... həndəsi silsiləsinin 7-ci həddi neçədir?",

    d: "Ç",

    options: ["96", "128", "192", "384"],

    a: 2

  },

  {

    q: "Həndəsi silsilədə a₁ = 2, q = 3-dür. İlk 4 həddin cəmi neçədir?",

    d: "A",

    options: ["60", "70", "80", "90"],

    a: 2

  },

  {

    q: "1 + 2 + 3 + ... + 20 cəmini tap.",

    d: "A",

    options: ["200", "210", "220", "230"],

    a: 1

  },

  {

    q: "2 + 4 + 6 + ... + 20 cəmi neçədir?",

    d: "O",

    options: ["100", "110", "120", "130"],

    a: 1

  },

  {

    q: "Bir ədədin 30%-i 45-dir. Bu ədəd neçədir?",

    d: "A",

    options: ["120", "135", "150", "180"],

    a: 2

  },

  {

    q: "Bir məhsul 20% endirimdən sonra 240 manata satılır. İlkin qiyməti neçə manat idi?",

    d: "O",

    options: ["280", "300", "320", "340"],

    a: 1

  },

  {

    q: "Bir ədəd əvvəlcə 20% artırılır, sonra 20% azaldılır. Son nəticə ilkin ədədlə müqayisədə necə dəyişir?",

    d: "Ç",

    options: ["Dəyişmir", "4% azalır", "4% artır", "8% azalır"],

    a: 1

  },

  {

    q: "İki müsbət ədədin nisbəti 3:5-dir və cəmi 64-dür. Böyük ədəd neçədir?",

    d: "A",

    options: ["24", "32", "40", "48"],

    a: 2

  },

  {

    q: "İki ədədin ƏBOB-u 6, EKOB-u 72-dir. Ədədlərdən biri 18-dirsə, digəri neçə ola bilər?",

    d: "O",

    options: ["12", "18", "24", "36"],

    a: 2

  },

  {

    q: "Ədədi orta 18 olan 5 ədədin cəmi neçədir?",

    d: "A",

    options: ["72", "80", "90", "100"],

    a: 2

  },

  {

    q: "4, 7, 9, 12, 15 ədədlərinin medianı neçədir?",

    d: "O",

    options: ["7", "9", "12", "15"],

    a: 1

  },

  {

    q: "2, 3, 3, 5, 7, 3, 8 verilənlərində moda neçədir?",

    d: "A",

    options: ["2", "3", "5", "7"],

    a: 1

  },

  {

    q: "İki zər atılır. Cəmin 8 olması ehtimalı neçədir?",

    d: "Ç",

    options: ["1/12", "5/36", "1/6", "1/4"],

    a: 1

  },

  {

    q: "İki zər atıldıqda cəmin 10 olması ehtimalı neçədir?",

    d: "O",

    options: ["1/12", "1/9", "1/6", "1/18"],

    a: 0

  },

  {

    q: "Bir qutuda 5 qırmızı, 3 göy və 2 yaşıl top var. Təsadüfi seçilən topun göy olması ehtimalı neçədir?",

    d: "A",

    options: ["1/5", "3/10", "1/3", "2/5"],

    a: 1

  },

  {

    q: "Bir sikkə 4 dəfə atılır. Tam olaraq 2 dəfə gerb gəlməsi neçə nəticədə mümkündür?",

    d: "O",

    options: ["4", "5", "6", "8"],

    a: 2

  },

  {

    q: "5 element arasından 2 element seçmək neçə üsulla mümkündür?",

    d: "Ç",

    options: ["5", "8", "10", "20"],

    a: 2

  },

  {

    q: "6 nəfərdən 3 nəfərlik komanda neçə müxtəlif üsulla seçilə bilər?",

    d: "A",

    options: ["15", "18", "20", "24"],

    a: 2

  },

  {

    q: "5 müxtəlif kitab bir rəfdə neçə fərqli qaydada düzülə bilər?",

    d: "O",

    options: ["60", "100", "120", "150"],

    a: 2

  },

  {

    q: "Bir sinifdə 8 şagird var. Sinif rəhbəri və köməkçisi seçilir. Bu seçim neçə üsulla mümkündür?",

    d: "Ç",

    options: ["16", "28", "56", "64"],

    a: 2

  },

  {

    q: "Üçbucağın daxili bucaqları 2:3:4 nisbətindədir. Ən böyük bucaq neçə dərəcədir?",

    d: "A",

    options: ["60°", "70°", "80°", "90°"],

    a: 2

  },

  {

    q: "Bərabəryanlı üçbucağın təpə bucağı 40°-dir. Oturacaq bucaqlarının hər biri neçədir?",

    d: "O",

    options: ["60°", "70°", "80°", "90°"],

    a: 2

  },

  {

    q: "Düzbucaqlı üçbucağın katetləri 5 sm və 12 sm-dir. Hipotenuz neçədir?",

    d: "A",

    options: ["13 sm", "14 sm", "15 sm", "17 sm"],

    a: 0

  },

  {

    q: "Dairənin radiusu 6 sm-dir. π = 3 götürülsə, sahəsi neçədir?",

    d: "O",

    options: ["36 sm²", "72 sm²", "108 sm²", "144 sm²"],

    a: 2

  },

  {

    q: "Çevrənin radiusu 7 sm-dir. π = 22/7 götürülsə, uzunluğu neçədir?",

    d: "Ç",

    options: ["22 sm", "44 sm", "88 sm", "154 sm"],

    a: 1

  },

  {

    q: "Kvadratın sahəsi 144 sm²-dir. Tərəfinin uzunluğu neçədir?",

    d: "A",

    options: ["10 sm", "12 sm", "14 sm", "16 sm"],

    a: 1

  },

  {

    q: "Düzbucaqlının tərəfləri 8 sm və 15 sm-dir. Diaqonalı neçədir?",

    d: "O",

    options: ["16 sm", "17 sm", "18 sm", "19 sm"],

    a: 1

  },

  {

    q: "A(2, 3) və B(8, 11) nöqtələri arasındakı məsafə neçədir?",

    d: "Ç",

    options: ["8", "9", "10", "12"],

    a: 2

  },

  {

    q: "A(2, 4) və B(6, 10) nöqtələrinin orta nöqtəsi hansıdır?",

    d: "A",

    options: ["(4, 7)", "(3, 6)", "(5, 7)", "(4, 6)"],

    a: 0

  },

  {

    q: "A(1, 2) və B(4, 8) nöqtələrindən keçən düz xəttin meyli neçədir?",

    d: "O",

    options: ["1", "2", "3", "4"],

    a: 1

  },

  {

    q: "y = 2x + 1 və y = 5x − 8 düz xətləri hansı nöqtədə kəsişir?",

    d: "Ç",

    options: ["(2, 5)", "(3, 7)", "(3, 8)", "(4, 9)"],

    a: 1

  },

  {

    q: "log₂8 = ?",

    d: "A",

    options: ["2", "3", "4", "8"],

    a: 1

  },

  {

    q: "log₃81 = ?",

    d: "O",

    options: ["3", "4", "5", "6"],

    a: 1

  },

  {

    q: "2ˣ = 32 tənliyinin həlli neçədir?",

    d: "A",

    options: ["3", "4", "5", "6"],

    a: 2

  },

  {

    q: "3ˣ = 1/27 tənliyinin həlli neçədir?",

    d: "Ç",

    options: ["−3", "−2", "2", "3"],

    a: 0

  },

  {

    q: "x + 1/x = 5 olarsa, x² + 1/x² ifadəsinin qiyməti neçədir?",

    d: "Ç",

    options: ["21", "23", "25", "27"],

    a: 1

  },

  {

    q: "x + y = 10 və xy = 21 olarsa, x² + y² neçədir?",

    d: "O",

    options: ["42", "58", "79", "100"],

    a: 1

  },

  {

    q: "a + b = 12 və ab = 32 olarsa, (a − b)² neçədir?",

    d: "Ç",

    options: ["8", "16", "32", "64"],

    a: 3

  },

  {

    q: "Bir ədədin 40%-i ilə həmin ədədin 20%-nin fərqi 30-dur. Ədəd neçədir?",

    d: "A",

    options: ["100", "120", "150", "180"],

    a: 2

  },

  {

    q: "Bir ədədin 3/5 hissəsi 42-dir. Bu ədəd neçədir?",

    d: "O",

    options: ["60", "65", "70", "75"],

    a: 2

  },

  {

    q: "Bir işi A 6 günə, B isə 12 günə görür. Birlikdə bu işi neçə günə görərlər?",

    d: "Ç",

    options: ["3 gün", "4 gün", "6 gün", "9 gün"],

    a: 1

  },

  {

    q: "Bir maşın 3 saata 210 km yol gedir. Eyni sürətlə 5 saata neçə km gedər?",

    d: "A",

    options: ["300 km", "320 km", "350 km", "370 km"],

    a: 2

  },

  {

    q: "Bir ədədin ədədi ortası 24 olan 4 ədədin cəmi 96-dır. Bu ədədlərə 12 əlavə edilərsə, yeni 5 ədədin ortası neçə olar?",

    d: "Ç",

    options: ["20", "21,6", "24", "27"],

    a: 1

  }

]
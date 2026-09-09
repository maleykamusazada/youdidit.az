var QUIZ_META = {

  title: "9-cu sinif üçün məntiq testi",

  grade: 9

};

var QUESTIONS = [

  {

    q: "∛8 = ?",

    d: "A",

    options: ["1", "2", "3", "4"],

    a: 1

  },

  {

    q: "∛27 = ?",

    d: "A",

    options: ["2", "3", "4", "5"],

    a: 1

  },

  {

    q: "∛64 · ∛8 ifadəsini sadələşdir.",

    d: "O",

    options: ["6", "8", "12", "16"],

    a: 1

  },

  {

    q: "⁴√16 · ⁴√16 ifadəsini sadələşdir.",

    d: "Ç",

    options: ["2", "4", "8", "16"],

    a: 1

  },

  {

    q: "a^(1/2) ifadəsi hansı kök işarəsinə bərabərdir?",

    d: "A",

    options: ["a²", "√a", "∛a", "1/a"],

    a: 1

  },

  {

    q: "8^(1/3) = ?",

    d: "O",

    options: ["1", "2", "3", "4"],

    a: 1

  },

  {

    q: "27^(2/3) = ?",

    d: "Ç",

    options: ["3", "6", "9", "12"],

    a: 2

  },

  {

    q: "Bir malın qiyməti 25% artırılıb və indi 500 manatdır. İlkin qiymət neçə idi?",

    d: "A",

    options: ["350 manat", "400 manat", "450 manat", "475 manat"],

    a: 1

  },

  {

    q: "800 manat kredit illik 12% sadə faizlə 3 ay üçün götürülüb. Faiz məbləği neçədir?",

    d: "O",

    options: ["20 manat", "24 manat", "30 manat", "36 manat"],

    a: 1

  },

  {

    q: "Mal əvvəlcə 30% ucuzlaşdırılıb, sonra yeni qiymətdən 20% baha satılıb. Son qiymət ilkin qiymətdən neçə % fərqlənir?",

    d: "Ç",

    options: ["4% aşağı", "10% aşağı", "16% aşağı", "20% aşağı"],

    a: 2

  },

  {

    q: "√50 ədədi hansı iki ardıcıl tam ədəd arasındadır?",

    d: "A",

    options: ["5 və 6", "6 və 7", "7 və 8", "8 və 9"],

    a: 2

  },

  {

    q: "∛100 ədədi hansı iki ardıcıl tam ədəd arasındadır?",

    d: "O",

    options: ["2 və 3", "3 və 4", "4 və 5", "5 və 6"],

    a: 2

  },

  {

    q: "x + y = 8, x − y = 2 tənliklər sistemini həll et.",

    d: "A",

    options: [

      "x = 4, y = 4",

      "x = 5, y = 3",

      "x = 6, y = 2",

      "x = 3, y = 5"

    ],

    a: 1

  },

  {

    q: "2x + 3y = 19, x − y = 2 tənliklər sistemini həll et.",

    d: "O",

    options: [

      "x = 4, y = 2",

      "x = 5, y = 3",

      "x = 6, y = 4",

      "x = 7, y = 5"

    ],

    a: 1

  },

  {

    q: "x² + y² = 25, x + y = 7 tənliklər sistemini həll et.",

    d: "Ç",

    options: [

      "x = 2, y = 5 və ya x = 5, y = 2",

      "x = 3, y = 4 və ya x = 4, y = 3",

      "x = 1, y = 6 və ya x = 6, y = 1",

      "x = 0, y = 7 və ya x = 7, y = 0"

    ],

    a: 1

  },

  {

    q: "3, 7, 11, 15, … arifmetik silsiləsinin növbəti hədi hansıdır?",

    d: "A",

    options: ["17", "18", "19", "20"],

    a: 2

  },

  {

    q: "Arifmetik silsilənin ilk hədi 5, fərqi 4-dür. 10-cu hədi neçədir?",

    d: "O",

    options: ["37", "39", "41", "45"],

    a: 2

  },

  {

    q: "Həndəsi silsilənin ilk hədi 3, məxrəci 2-dir. İlk 5 hədin cəmini tap.",

    d: "Ç",

    options: ["63", "81", "93", "96"],

    a: 2

  },

  {

    q: "2, 6, 18, 54, … həndəsi silsiləsinin növbəti hədi hansıdır?",

    d: "A",

    options: ["108", "144", "162", "216"],

    a: 2

  },

  {

    q: "Arifmetik silsilənin ilk 10 hədinin cəmi neçədir (a₁ = 2, d = 3)?",

    d: "O",

    options: ["135", "145", "155", "165"],

    a: 2

  },

  {

    q: "x² − 5x + 4 > 0 kvadrat bərabərsizliyini həll et.",

    d: "Ç",

    options: [

      "1 < x < 4",

      "x < 1 və ya x > 4",

      "x ≤ 1 və ya x ≥ 4",

      "x > 1 və x < 4"

    ],

    a: 1

  },

  {

    q: "x² − 4 ≤ 0 bərabərsizliyini həll et.",

    d: "A",

    options: [

      "−2 ≤ x ≤ 2",

      "x < −2 və ya x > 2",

      "−4 ≤ x ≤ 4",

      "x ≥ 2"

    ],

    a: 0

  },

  {

    q: "x² − x − 6 < 0 bərabərsizliyini həll et.",

    d: "O",

    options: [

      "x < −2 və ya x > 3",

      "−2 < x < 3",

      "−3 < x < 2",

      "x ≤ −2 və ya x ≥ 3"

    ],

    a: 1

  },

  {

    q: "x + y ≤ 10, x − y ≥ 2 bərabərsizliklər sistemi verilib. (6, 3) nöqtəsi bu sistemin həllidirmi?",

    d: "Ç",

    options: [

      "Bəli, hər iki şərti ödəyir",

      "Xeyr, yalnız birinci şərti ödəyir",

      "Xeyr, yalnız ikinci şərti ödəyir",

      "Xeyr, heç birini ödəməz"

    ],

    a: 0

  },

  {

    q: "Üçbucağın daxilinə çəkilmiş çevrənin mərkəzi necə adlanır?",

    d: "A",

    options: [

      "İnsentr",

      "Sentr",

      "Ortosentr",

      "Sirkumsentr"

    ],

    a: 0

  },

  {

    q: "Üçbucağın xaricinə çəkilmiş çevrənin mərkəzi necə tapılır?",

    d: "O",

    options: [

      "Bucaqların tənbölənlərinin kəsişmə nöqtəsi",

      "Tərəflərin orta perpendikulyarlarının kəsişmə nöqtəsi",

      "Hündürlüklərin kəsişmə nöqtəsi",

      "Medianların kəsişmə nöqtəsi"

    ],

    a: 1

  },

  {

    q: "Çevrəyə xaricdən çəkilmiş toxunan parçaları necə münasibətdədir?",

    d: "Ç",

    options: ["Bərabərdir", "Perpendikulyardır", "Paraleldir", "Fərqlidir"],

    a: 0

  },

  {

    q: "Çevrəyə toxunan xətt radiusla neçə dərəcəlik bucaq əmələ gətirir?",

    d: "A",

    options: ["45°", "60°", "90°", "180°"],

    a: 2

  },

  {

    q: "Çevrənin radiusu 5 sm-dir. Mərkəzdən 13 sm məsafədə olan nöqtədən çevrəyə çəkilən toxunanın uzunluğu neçədir?",

    d: "O",

    options: ["8 sm", "10 sm", "12 sm", "13 sm"],

    a: 2

  },

  {

    q: "a(2, 3) və b(4, 1) vektorları verilib. a + b vektoru hansıdır?",

    d: "A",

    options: ["(5, 3)", "(6, 4)", "(6, 2)", "(2, 4)"],

    a: 1

  },

  {

    q: "a(5, 7) və b(2, 3) vektorları verilib. a − b vektoru hansıdır?",

    d: "O",

    options: ["(2, 3)", "(3, 4)", "(7, 10)", "(3, 3)"],

    a: 1

  },

  {

    q: "a(3, 4) vektorunun uzunluğunu (modulunu) tap.",

    d: "Ç",

    options: ["3", "4", "5", "7"],

    a: 2

  },

  {

    q: "a(3, 5) vektorunu 2 dəfə böyütsək (2a), nəticə hansıdır?",

    d: "A",

    options: ["(5, 7)", "(6, 10)", "(6, 5)", "(3, 10)"],

    a: 1

  },

  {

    q: "Paralel köçürmə zamanı A(2, 3) nöqtəsi (5, −1) vektoru ilə köçürülür. Yeni nöqtə hansıdır?",

    d: "O",

    options: ["(5, 2)", "(7, 2)", "(7, 4)", "(−3, 4)"],

    a: 1

  },

  {

    q: "A(1, 2) nöqtəsi B(4, 6) nöqtəsinə köçürülən paralel köçürmə ilə C(3, 5) nöqtəsi hara köçür?",

    d: "Ç",

    options: ["(5, 8)", "(6, 9)", "(7, 10)", "(4, 7)"],

    a: 1

  },

  {

    q: "A(0, 0) və B(3, 4) nöqtələri arasındakı məsafəni tap.",

    d: "A",

    options: ["3", "4", "5", "7"],

    a: 2

  },

  {

    q: "M(1, 2) və N(4, 6) nöqtələri arasındakı məsafəni tap.",

    d: "O",

    options: ["4", "5", "6", "7"],

    a: 1

  },

  {

    q: "Mərkəzi (2, −3) olan və radiusu 4 olan çevrənin tənliyini yaz.",

    d: "Ç",

    options: [

      "(x + 2)² + (y − 3)² = 16",

      "(x − 2)² + (y + 3)² = 16",

      "(x − 2)² + (y − 3)² = 4",

      "(x + 2)² + (y + 3)² = 16"

    ],

    a: 1

  },

  {

    q: "(x − 1)² + (y − 2)² = 9 çevrəsinin mərkəzi və radiusu hansıdır?",

    d: "A",

    options: [

      "Mərkəz (−1, −2), radius 3",

      "Mərkəz (1, 2), radius 3",

      "Mərkəz (1, 2), radius 9",

      "Mərkəz (−1, 2), radius 3"

    ],

    a: 1

  },

  {

    q: "Mərkəzi koordinat başlanğıcında olan və A(3, 4) nöqtəsindən keçən çevrənin tənliyini yaz.",

    d: "O",

    options: [

      "x² + y² = 7",

      "x² + y² = 12",

      "x² + y² = 25",

      "x² + y² = 49"

    ],

    a: 2

  },

  {

    q: "Mərkəzi (1, 1) olan çevrə A(4, 5) nöqtəsindən keçir. Çevrənin tənliyini yaz.",

    d: "Ç",

    options: [

      "(x − 1)² + (y − 1)² = 9",

      "(x − 1)² + (y − 1)² = 16",

      "(x − 1)² + (y − 1)² = 25",

      "(x + 1)² + (y + 1)² = 25"

    ],

    a: 2

  },

  {

    q: "1 km neçə metrdir?",

    d: "A",

    options: ["100 m", "500 m", "1000 m", "10 000 m"],

    a: 2

  },

  {

    q: "1 sm³ neçə mm³-dür?",

    d: "O",

    options: ["10 mm³", "100 mm³", "1000 mm³", "10 000 mm³"],

    a: 2

  },

  {

    q: "2 saat 15 dəqiqəni saniyə ilə ifadə et.",

    d: "Ç",

    options: ["7200 saniyə", "8100 saniyə", "9000 saniyə", "7500 saniyə"],

    a: 1

  },

  {

    q: "5 element arasından 3-ünü seçmək neçə üsulla mümkündür (sıra önəmli deyil)?",

    d: "A",

    options: ["5", "8", "10", "15"],

    a: 2

  },

  {

    q: "4 kitabı bir rəfdə neçə fərqli sırada düzmək olar?",

    d: "O",

    options: ["12", "16", "20", "24"],

    a: 3

  },

  {

    q: "Bir qutuda 6 top var, onlardan 2-si qırmızıdır. Təsadüfən 1 top çıxarılır. Qırmızı top çıxma ehtimalı neçədir?",

    d: "Ç",

    options: ["1/6", "1/3", "1/2", "2/3"],

    a: 1

  },

  {

    q: "3 sikkə atılır. Cəmi neçə mümkün nəticə var?",

    d: "A",

    options: ["6", "8", "9", "12"],

    a: 1

  },

  {

    q: "2 zər atılır. İkisinin cəminin 7 olma ehtimalını tap.",

    d: "O",

    options: ["1/12", "1/6", "1/4", "1/3"],

    a: 1

  },

  {

    q: "5 nəfərdən 2 nəfərlik komissiya seçilir (sıra önəmsiz). Neçə fərqli komissiya yaratmaq olar?",

    d: "Ç",

    options: ["5", "8", "10", "20"],

    a: 2

  },

  {

    q: "Statistik məlumatlarda ən çox təkrarlanan qiymətə nə deyilir?",

    d: "A",

    options: ["Median", "Moda", "Orta qiymət", "Maksimum"],

    a: 1

  },

  {

    q: "3, 5, 7, 9, 11 ədədlərinin ədədi ortasını (mean) tap.",

    d: "O",

    options: ["5", "6", "7", "8"],

    a: 2

  },

  {

    q: "10 ədədin cəmi 252-dir. Bu ədədlərdən dəyəri 27 olanı çıxarsaq, qalan 9 ədədin ortalaması neçə olar?",

    d: "Ç",

    options: ["23", "24", "25", "26"],

    a: 2

  },

  {

    q: "x² = 16 tənliyini həll et.",

    d: "A",

    options: ["x = 4", "x = −4", "x = 4 və ya x = −4", "x = 16"],

    a: 2

  },

  {

    q: "x² + 2x − 8 = 0 tənliyini həll et.",

    d: "O",

    options: [

      "x = −4 və ya x = 2",

      "x = −2 və ya x = 4",

      "x = 2 və ya x = 4",

      "x = −4 və ya x = −2"

    ],

    a: 0

  },

  {

    q: "x² − 6x + 5 ≤ 0 bərabərsizliyini həll et.",

    d: "Ç",

    options: [

      "x ≤ 1 və ya x ≥ 5",

      "1 ≤ x ≤ 5",

      "1 < x < 5",

      "x < 1 və ya x > 5"

    ],

    a: 1

  },

  {

    q: "4, 8, 12, 16, … silsiləsinin 6-cı hədi neçədir?",

    d: "A",

    options: ["20", "22", "24", "28"],

    a: 2

  },

  {

    q: "x² − 9x + 20 = 0 tənliyinin köklərinin cəmi neçədir?",

    d: "O",

    options: ["4", "5", "9", "20"],

    a: 2

  }

]
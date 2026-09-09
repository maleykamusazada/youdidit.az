var QUIZ_META = {

  title: "8-ci sinif üçün məntiq testi",

  grade: 8

};

var QUESTIONS = [

  {

    q: "√49 = ?",

    d: "A",

    options: ["6", "7", "8", "9"],

    a: 1

  },

  {

    q: "√2 ədədi hansı iki ardıcıl tam ədəd arasında yerləşir?",

    d: "A",

    options: ["0 və 1", "1 və 2", "2 və 3", "3 və 4"],

    a: 1

  },

  {

    q: "√18 ifadəsini sadə radikal şəklində yaz.",

    d: "O",

    options: ["2√3", "3√2", "6√2", "9√2"],

    a: 1

  },

  {

    q: "√50 + √8 ifadəsini sadələşdir.",

    d: "Ç",

    options: ["5√2", "6√2", "7√2", "8√2"],

    a: 2

  },

  {

    q: "√16 · √4 = ?",

    d: "A",

    options: ["6", "8", "10", "12"],

    a: 1

  },

  {

    q: "√72 : √2 = ?",

    d: "O",

    options: ["4", "5", "6", "8"],

    a: 2

  },

  {

    q: "(√3 + 2)(√3 − 2) ifadəsini sadələşdir.",

    d: "Ç",

    options: ["−1", "1", "3", "4"],

    a: 0

  },

  {

    q: "3:5 = x:20 tənasübündə x neçədir?",

    d: "A",

    options: ["10", "12", "15", "18"],

    a: 1

  },

  {

    q: "Mal 40% qazancla 700 manata satılıb. Alış qiyməti neçə idi?",

    d: "O",

    options: ["450 manat", "500 manat", "550 manat", "600 manat"],

    a: 1

  },

  {

    q: "İki kəmiyyət tərs mütənasibdir. Birinci 6 olduqda ikincisi 8-dir. Birinci 4 olduqda ikinci neçədir?",

    d: "Ç",

    options: ["10", "12", "14", "16"],

    a: 1

  },

  {

    q: "√10 ədədi 3-ə, yoxsa 4-ə daha yaxındır?",

    d: "A",

    options: ["3-ə", "4-ə", "Hər ikisinə eyni məsafədədir", "2-yə"],

    a: 0

  },

  {

    q: "x² = 49 tənliyini həll et.",

    d: "A",

    options: ["x = 7", "x = −7", "x = 7 və ya x = −7", "x = 0"],

    a: 2

  },

  {

    q: "x² − 5x + 6 = 0 tənliyini həll et.",

    d: "O",

    options: ["x = 1 və ya x = 6", "x = 2 və ya x = 3", "x = −2 və ya x = −3", "x = 3 və ya x = 5"],

    a: 1

  },

  {

    q: "2x² − 7x + 3 = 0 tənliyini həll et.",

    d: "Ç",

    options: ["x = 3 və ya x = 1/2", "x = 2 və ya x = 3", "x = −3 və ya x = −1/2", "x = 1 və ya x = 3"],

    a: 0

  },

  {

    q: "x² − 9 = 0 tənliyini həll et.",

    d: "A",

    options: ["x = 3", "x = −3", "x = 3 və ya x = −3", "x = 9"],

    a: 2

  },

  {

    q: "x² + 4x = 0 tənliyini həll et.",

    d: "O",

    options: ["x = 0 və ya x = −4", "x = 4 və ya x = −4", "x = 0 və ya x = 4", "x = −2 və ya x = 2"],

    a: 0

  },

  {

    q: "Sərbəst düşən cisim h = 5t² düsturu ilə hərəkət edir. 3 saniyədən sonra neçə metr yol getmiş olar?",

    d: "Ç",

    options: ["15 metr", "30 metr", "45 metr", "60 metr"],

    a: 2

  },

  {

    q: "2x − 5 < 7 bərabərsizliyini həll et.",

    d: "A",

    options: ["x < 5", "x < 6", "x > 6", "x > 5"],

    a: 1

  },

  {

    q: "3x + 4 ≥ x − 2 bərabərsizliyini həll et.",

    d: "O",

    options: ["x ≥ −3", "x ≤ −3", "x ≥ 3", "x ≤ 3"],

    a: 0

  },

  {

    q: "|x − 2| < 5 bərabərsizliyinin həllini tap.",

    d: "Ç",

    options: ["−5 < x < 5", "−3 < x < 7", "3 < x < 7", "−7 < x < 3"],

    a: 1

  },

  {

    q: "Düzbucaqlı üçbucağın katetləri 3 sm və 4 sm-dir. Hipotenuz neçədir?",

    d: "A",

    options: ["4 sm", "5 sm", "6 sm", "7 sm"],

    a: 1

  },

  {

    q: "Düzbucaqlı üçbucağın hipotenuzu 13 sm, bir kateti 5 sm-dir. Digər katet neçədir?",

    d: "O",

    options: ["10 sm", "11 sm", "12 sm", "13 sm"],

    a: 2

  },

  {

    q: "Düzbucaqlı üçbucağın katetləri bərabərdir, hipotenuzu 10√2 sm-dir. Katetin uzunluğu neçədir?",

    d: "Ç",

    options: ["5 sm", "10 sm", "10√2 sm", "20 sm"],

    a: 1

  },

  {

    q: "sin 30° = ?",

    d: "A",

    options: ["0", "1/2", "√2/2", "1"],

    a: 1

  },

  {

    q: "cos 45° = ?",

    d: "O",

    options: ["1/2", "√2/2", "√3/2", "1"],

    a: 1

  },

  {

    q: "tan 60° = ?",

    d: "Ç",

    options: ["1/2", "1", "√2", "√3"],

    a: 3

  },

  {

    q: "Paraleloqramın qarşı tərəfləri necə münasibətdədir?",

    d: "A",

    options: [

      "Bərabər və paraleldir",

      "Yalnız bərabərdir",

      "Yalnız perpendikulyardır",

      "Həmişə müxtəlif uzunluqdadır"

    ],

    a: 0

  },

  {

    q: "Paraleloqramın bir bucağı 70°-dir. Ona qonşu bucaq neçədir?",

    d: "O",

    options: ["70°", "90°", "110°", "120°"],

    a: 2

  },

  {

    q: "Paraleloqramın diaqonalları kəsişmə nöqtəsində necə bölünür?",

    d: "Ç",

    options: ["Bərabər hissələrə bölünür", "Yalnız biri bölünür", "Perpendikulyar olur", "Heç biri bölünmür"],

    a: 0

  },

  {

    q: "Üçbucağın əsası 10 sm, hündürlüyü 6 sm-dir. Sahəsi neçədir?",

    d: "A",

    options: ["20 sm²", "30 sm²", "40 sm²", "60 sm²"],

    a: 1

  },

  {

    q: "Paraleloqramın əsası 8 sm, hündürlüyü 5 sm-dir. Sahəsi neçədir?",

    d: "O",

    options: ["13 sm²", "20 sm²", "40 sm²", "80 sm²"],

    a: 2

  },

  {

    q: "Rombun diaqonalları 6 sm və 8 sm-dir. Sahəsi neçədir?",

    d: "Ç",

    options: ["14 sm²", "24 sm²", "48 sm²", "56 sm²"],

    a: 1

  },

  {

    q: "Trapesiyanın oturacaqları 6 sm və 10 sm, hündürlüyü 4 sm-dir. Sahəsi neçədir?",

    d: "A",

    options: ["24 sm²", "28 sm²", "32 sm²", "40 sm²"],

    a: 2

  },

  {

    q: "Kvadratın diaqonalı 8 sm-dir. Sahəsi neçədir?",

    d: "O",

    options: ["16 sm²", "32 sm²", "64 sm²", "128 sm²"],

    a: 1

  },

  {

    q: "Üçbucağın sahəsi 60 sm², əsası 12 sm-dir. Hündürlüyü neçədir?",

    d: "Ç",

    options: ["5 sm", "8 sm", "10 sm", "12 sm"],

    a: 2

  },

  {

    q: "A(2, 3) və B(6, 7) nöqtələri arasındakı parçanın orta nöqtəsi hansıdır?",

    d: "A",

    options: ["(3, 4)", "(4, 5)", "(5, 6)", "(4, 4)"],

    a: 1

  },

  {

    q: "M(−2, 5) və N(4, −3) nöqtələri arasındakı parçanın orta nöqtəsi hansıdır?",

    d: "O",

    options: ["(1, 1)", "(2, 1)", "(1, 2)", "(−1, 1)"],

    a: 0

  },

  {

    q: "A(1, 2) və B(5, 6) nöqtələrindən keçən düz xəttin tənliyini yaz (y = kx + b şəklində).",

    d: "Ç",

    options: ["y = x + 1", "y = x − 1", "y = 2x", "y = 2x + 1"],

    a: 0

  },

  {

    q: "√25 + √36 = ?",

    d: "A",

    options: ["9", "10", "11", "12"],

    a: 2

  },

  {

    q: "√48 ifadəsini sadə radikal şəklində yaz.",

    d: "O",

    options: ["2√12", "4√3", "6√2", "8√3"],

    a: 1

  },

  {

    q: "3√2 · 2√8 ifadəsini sadələşdir.",

    d: "Ç",

    options: ["12", "18", "24", "48"],

    a: 2

  },

  {

    q: "x² = 100 tənliyini həll et.",

    d: "A",

    options: ["x = 10", "x = −10", "x = 10 və ya x = −10", "x = 100"],

    a: 2

  },

  {

    q: "x² − 7x + 12 = 0 tənliyini həll et.",

    d: "O",

    options: ["x = 2 və ya x = 6", "x = 3 və ya x = 4", "x = −3 və ya x = −4", "x = 1 və ya x = 12"],

    a: 1

  },

  {

    q: "x² + 2x − 15 = 0 tənliyini həll et.",

    d: "Ç",

    options: ["x = −5 və ya x = 3", "x = 5 və ya x = −3", "x = −3 və ya x = 5", "x = 3 və ya x = 5"],

    a: 0

  },

  {

    q: "4x + 3 > 15 bərabərsizliyini həll et.",

    d: "A",

    options: ["x > 2", "x > 3", "x < 3", "x < 2"],

    a: 1

  },

  {

    q: "5 − 2x ≤ 11 bərabərsizliyini həll et.",

    d: "O",

    options: ["x ≤ −3", "x ≥ −3", "x ≤ 3", "x ≥ 3"],

    a: 1

  },

  {

    q: "|3x + 1| ≥ 7 bərabərsizliyinin həllini tap.",

    d: "Ç",

    options: [

      "x ≥ 2 və ya x ≤ −8/3",

      "x ≥ 8/3 və ya x ≤ −2",

      "−8/3 ≤ x ≤ 2",

      "x ≥ −2 və ya x ≤ 8/3"

    ],

    a: 0

  },

  {

    q: "Düzbucaqlı üçbucağın katetləri 6 sm və 8 sm-dir. Hipotenuz neçədir?",

    d: "A",

    options: ["8 sm", "10 sm", "12 sm", "14 sm"],

    a: 1

  },

  {

    q: "Düzbucaqlı üçbucağın hipotenuzu 25 sm, bir kateti 15 sm-dir. Digər katet neçədir?",

    d: "O",

    options: ["18 sm", "20 sm", "22 sm", "24 sm"],

    a: 1

  },

  {

    q: "Kvadratın tərəfi a-dır. Diaqonalını a ilə ifadə et.",

    d: "Ç",

    options: ["a", "2a", "a√2", "a²"],

    a: 2

  },

  {

    q: "cos 0° = ?",

    d: "A",

    options: ["0", "1/2", "√2/2", "1"],

    a: 3

  },

  {

    q: "sin 90° = ?",

    d: "O",

    options: ["0", "1/2", "√2/2", "1"],

    a: 3

  },

  {

    q: "sin 30° + cos 60° = ?",

    d: "Ç",

    options: ["1/2", "1", "√2", "2"],

    a: 1

  },

  {

    q: "Paraleloqramın diaqonalları kəsişmə nöqtəsində hansı xüsusiyyətə malikdir?",

    d: "A",

    options: [

      "Kəsişmə nöqtəsində yarıya bölünürlər",

      "Həmişə bərabər olurlar",

      "Həmişə perpendikulyar olurlar",

      "Bir-birini ikiqat artırırlar"

    ],

    a: 0

  },

  {

    q: "Rombun bütün tərəfləri necə münasibətdədir?",

    d: "O",

    options: ["Bərabərdir", "Hamısı müxtəlifdir", "Yalnız qarşı tərəflər bərabərdir", "Perpendikulyardır"],

    a: 0

  },

  {

    q: "Bucaqlarından biri 90° olan paraleloqramın (düzbucaqlının) tərəfləri 8 sm və 12 sm-dir. Sahəsi neçədir?",

    d: "Ç",

    options: ["80 sm²", "96 sm²", "100 sm²", "120 sm²"],

    a: 1

  },

  {

    q: "√121 − √36 = ?",

    d: "A",

    options: ["4", "5", "6", "7"],

    a: 1

  }

]
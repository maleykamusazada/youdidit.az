var QUIZ_META = {

  title: "7-ci sinif üçün məntiq testi",

  grade: 7

};

var QUESTIONS = [

  {

    q: "−3/4 və −1/2 ədədlərindən hansı böyükdür?",

    d: "A",

    options: ["−3/4", "−1/2", "0", "1/2"],

    a: 1

  },

  {

    q: "a³ · a⁴ ifadəsini sadələşdir.",

    d: "A",

    options: ["a⁷", "a¹²", "a", "a⁻¹"],

    a: 0

  },

  {

    q: "(a²)³ ifadəsini sadələşdir.",

    d: "O",

    options: ["a⁵", "a⁶", "a⁸", "a⁹"],

    a: 1

  },

  {

    q: "x⁵ : x² ifadəsini sadələşdir.",

    d: "A",

    options: ["x²", "x³", "x⁷", "x¹⁰"],

    a: 1

  },

  {

    q: "(x + 3)² ifadəsini aç.",

    d: "O",

    options: ["x² + 3x + 9", "x² + 6x + 9", "x² + 9", "x² + 6x + 6"],

    a: 1

  },

  {

    q: "(2x − 5)² ifadəsini aç.",

    d: "Ç",

    options: ["4x² − 10x + 25", "4x² − 20x + 25", "2x² − 20x + 25", "4x² + 20x + 25"],

    a: 1

  },

  {

    q: "a² − b² ifadəsini vuruqlara ayır.",

    d: "O",

    options: ["(a − b)(a + b)", "(a − b)²", "(a + b)²", "a(a − b)"],

    a: 0

  },

  {

    q: "Müxtəsər vurma düsturundan istifadə edərək 47² − 43²-i hesabla.",

    d: "Ç",

    options: ["320", "340", "360", "380"],

    a: 2

  },

  {

    q: "1000 manata illik 10% sadə faiz tətbiq olunur. 2 ilin sonunda faiz məbləği neçədir?",

    d: "A",

    options: ["100 manat", "150 manat", "200 manat", "210 manat"],

    a: 2

  },

  {

    q: "1000 manata illik 10% mürəkkəb faizlə 2 il sonra əmanətin son məbləği neçə olar?",

    d: "Ç",

    options: ["1100 manat", "1200 manat", "1210 manat", "1220 manat"],

    a: 2

  },

  {

    q: "3x + 7 = 22 tənliyini həll et.",

    d: "A",

    options: ["x = 3", "x = 5", "x = 7", "x = 9"],

    a: 1

  },

  {

    q: "2x − 5 = x + 9 tənliyini həll et.",

    d: "O",

    options: ["x = 12", "x = 13", "x = 14", "x = 15"],

    a: 2

  },

  {

    q: "x + y = 10, x − y = 4 tənliklər sistemini həll et.",

    d: "Ç",

    options: ["x = 6, y = 4", "x = 7, y = 3", "x = 8, y = 2", "x = 5, y = 5"],

    a: 1

  },

  {

    q: "2x + y = 11, x − y = 1 tənliklər sistemini həll et.",

    d: "Ç",

    options: ["x = 3, y = 2", "x = 4, y = 3", "x = 5, y = 4", "x = 4, y = 2"],

    a: 1

  },

  {

    q: "|x| = 7 tənliyini həll et.",

    d: "A",

    options: ["x = 7", "x = −7", "x = 7 və ya x = −7", "x = 0"],

    a: 2

  },

  {

    q: "|x − 3| = 5 tənliyini həll et.",

    d: "O",

    options: ["x = 8 və ya x = −2", "x = 5 və ya x = −5", "x = 8", "x = −2"],

    a: 0

  },

  {

    q: "(3x² + 2x) + (x² − 5x) ifadəsini sadələşdir.",

    d: "A",

    options: ["4x² − 3x", "4x² + 7x", "2x² − 3x", "3x² − 3x"],

    a: 0

  },

  {

    q: "(5x² − 3x + 2) − (2x² + x − 4) ifadəsini sadələşdir.",

    d: "O",

    options: ["3x² − 2x + 6", "3x² − 4x + 6", "7x² − 4x − 2", "3x² + 4x + 6"],

    a: 1

  },

  {

    q: "(x + 2)(x + 5) hasilini aç.",

    d: "Ç",

    options: ["x² + 5x + 10", "x² + 7x + 10", "x² + 10x + 7", "x² + 7x + 7"],

    a: 1

  },

  {

    q: "Üçbucağın iki bucağı 40° və 70°-dir. Üçüncü bucaq neçə dərəcədir?",

    d: "A",

    options: ["60°", "70°", "80°", "90°"],

    a: 1

  },

  {

    q: "Üçbucağın xarici bucağı 110°-dir, ona qonşu olmayan daxili bucaqlardan biri 50°-dir. Digəri neçədir?",

    d: "O",

    options: ["50°", "60°", "70°", "80°"],

    a: 1

  },

  {

    q: "Üçbucağın bucaqları nisbəti 2:3:4-dür. Ən böyük bucaq neçə dərəcədir?",

    d: "Ç",

    options: ["60°", "70°", "80°", "90°"],

    a: 2

  },

  {

    q: "İki paralel düz xətti kəsən düz xətt bucaqlardan birini 65° yaradır. Bu bucağa uyğun olan bucaq neçədir?",

    d: "A",

    options: ["55°", "65°", "115°", "125°"],

    a: 1

  },

  {

    q: "İki paralel düz xətti kəsən düz xətt zamanı daxili çarpaz bucaqlardan biri 72°-dir. Digəri neçədir?",

    d: "O",

    options: ["72°", "90°", "108°", "118°"],

    a: 0

  },

  {

    q: "İki paralel düz xətti kəsən düz xətt zamanı bir tərəfli daxili bucaqların cəmi neçədir?",

    d: "Ç",

    options: ["90°", "120°", "180°", "360°"],

    a: 2

  },

  {

    q: "Üçbucağın konqruyentliyinin neçə əsas əlaməti var?",

    d: "A",

    options: ["2", "3", "4", "5"],

    a: 1

  },

  {

    q: "İki üçbucağın uyğun tərəfləri bərabərdir: 5, 7, 9 sm və 5, 7, 9 sm. Bu üçbucaqlar hansı əlamətə görə konqruyentdir?",

    d: "O",

    options: ["Bucaq-bucaq-bucaq", "Tərəf-bucaq-tərəf", "Tərəf-tərəf-tərəf (TTT)", "Bucaq-tərəf-bucaq"],

    a: 2

  },

  {

    q: "y = 2x + 3 funksiyasında x = 4 olduqda y neçədir?",

    d: "A",

    options: ["9", "10", "11", "12"],

    a: 2

  },

  {

    q: "y = −x + 6 funksiyasının qrafiki OX oxunu hansı nöqtədə kəsir?",

    d: "O",

    options: ["(0, 6)", "(6, 0)", "(−6, 0)", "(0, −6)"],

    a: 1

  },

  {

    q: "y = 3x − 6 funksiyasının qrafiki koordinat oxları ilə kəsişmə nöqtələrini tap.",

    d: "Ç",

    options: ["(2, 0) və (0, −6)", "(−2, 0) və (0, 6)", "(3, 0) və (0, −6)", "(2, 0) və (0, 6)"],

    a: 0

  },

  {

    q: "A(4, 5) nöqtəsinin koordinat başlanğıcına nəzərən mərkəzi simmetrik nöqtəsini tap.",

    d: "A",

    options: ["(4, −5)", "(-4, 5)", "(-4, −5)", "(5, 4)"],

    a: 2

  },

  {

    q: "B(−3, 7) nöqtəsinin koordinat başlanğıcına nəzərən mərkəzi simmetrik nöqtəsi hansıdır?",

    d: "O",

    options: ["(−3, −7)", "(3, 7)", "(3, −7)", "(−7, 3)"],

    a: 2

  },

  {

    q: "Zər (kub) bir dəfə atılır. Cəmi neçə elementar hadisə (mümkün nəticə) var?",

    d: "A",

    options: ["4", "5", "6", "8"],

    a: 2

  },

  {

    q: "Zər atılanda cüt ədəd və ya 5 gəlməsinin ehtimalını tap.",

    d: "O",

    options: ["1/2", "2/3", "1/3", "5/6"],

    a: 1

  },

  {

    q: "Bir torbada 4 qırmızı, 3 göy kürə var. Təsadüfən çıxarılan kürənin qırmızı və ya göy olması ehtimalı neçədir?",

    d: "Ç",

    options: ["0", "1/2", "3/4", "1"],

    a: 3

  },

  {

    q: "−7 + 12 = ?",

    d: "A",

    options: ["−5", "5", "7", "19"],

    a: 1

  },

  {

    q: "−2/3 + 1/6 = ?",

    d: "O",

    options: ["−1/2", "−1/3", "1/2", "−5/6"],

    a: 0

  },

  {

    q: "(−3)³ − 2⁴ = ?",

    d: "Ç",

    options: ["−27", "−32", "−43", "43"],

    a: 2

  },

  {

    q: "5x = 45 tənliyini həll et.",

    d: "A",

    options: ["x = 5", "x = 7", "x = 9", "x = 10"],

    a: 2

  },

  {

    q: "3(x − 2) = 15 tənliyini həll et.",

    d: "O",

    options: ["x = 5", "x = 7", "x = 8", "x = 9"],

    a: 1

  },

  {

    q: "2(x + 3) − (x − 1) = 12 tənliyini həll et.",

    d: "Ç",

    options: ["x = 4", "x = 5", "x = 6", "x = 7"],

    a: 1

  },

  {

    q: "a⁶ : a³ = ?",

    d: "A",

    options: ["a²", "a³", "a⁶", "a⁹"],

    a: 1

  },

  {

    q: "(2a)³ ifadəsini sadələşdir.",

    d: "O",

    options: ["2a³", "6a³", "8a³", "8a"],

    a: 2

  },

  {

    q: "(a + b)² − (a − b)² ifadəsini sadələşdir.",

    d: "Ç",

    options: ["2ab", "4ab", "a² + b²", "2a² + 2b²"],

    a: 1

  },

  {

    q: "Üçbucağın bucaqlarının cəmi neçə dərəcədir?",

    d: "A",

    options: ["90°", "180°", "270°", "360°"],

    a: 1

  },

  {

    q: "Düzbucaqlı üçbucağın iti bucaqlarından biri 35°-dir. Digər iti bucaq neçədir?",

    d: "O",

    options: ["45°", "50°", "55°", "65°"],

    a: 2

  },

  {

    q: "Üçbucağın bir bucağı digərindən 2 dəfə, üçüncüsü isə birincidən 3 dəfə böyükdür. Ən kiçik bucaq neçədir?",

    d: "Ç",

    options: ["20°", "30°", "40°", "45°"],

    a: 1

  },

  {

    q: "25% ilə 1/4 kəsrinin cəmi neçədir?",

    d: "A",

    options: ["1/4", "1/2 (50%)", "3/4", "1"],

    a: 1

  },

  {

    q: "500 manata illik 6% sadə faizlə 3 ilin faizi neçədir?",

    d: "O",

    options: ["60 manat", "75 manat", "90 manat", "100 manat"],

    a: 2

  },

  {

    q: "2000 manata illik 5% mürəkkəb faizlə 2 il sonra məbləğ neçə olar?",

    d: "Ç",

    options: ["2100 manat", "2200 manat", "2205 manat", "2250 manat"],

    a: 2

  },

  {

    q: "2x + 3y = 12 tənliyində x = 0 olduqda y neçədir?",

    d: "A",

    options: ["y = 2", "y = 3", "y = 4", "y = 6"],

    a: 2

  },

  {

    q: "x − 2y = 4 və x + y = 10 tənliklər sistemini həll et.",

    d: "O",

    options: ["x = 6, y = 4", "x = 8, y = 2", "x = 7, y = 3", "x = 9, y = 1"],

    a: 1

  },

  {

    q: "3x + 2y = 16, x − y = 2 tənliklər sistemini həll et.",

    d: "Ç",

    options: ["x = 3, y = 1", "x = 4, y = 2", "x = 5, y = 3", "x = 6, y = 4"],

    a: 1

  },

  {

    q: "Üçbucağın konqruyentlik əlamətlərindən \"tərəf-bucaq-tərəf\"dən başqa digər ikisini yaz.",

    d: "A",

    options: [

      "Tərəf-tərəf-tərəf; bucaq-tərəf-bucaq",

      "Bucaq-bucaq-bucaq; tərəf-bucaq-tərəf",

      "Tərəf-tərəf-tərəf; bucaq-bucaq-bucaq",

      "Bucaq-tərəf-bucaq; bucaq-bucaq-bucaq"

    ],

    a: 0

  },

  {

    q: "|2x − 4| = 10 tənliyini həll et.",

    d: "O",

    options: ["x = 7 və ya x = −3", "x = 5 və ya x = −5", "x = 7", "x = −3"],

    a: 0

  },

  {

    q: "|x + 5| = 3x − 1 tənliyini həll et.",

    d: "Ç",

    options: ["x = 1", "x = 2", "x = 3", "x = 4"],

    a: 2

  },

  {

    q: "y = 4x − 1 funksiyasında x = 2 olduqda y neçədir?",

    d: "A",

    options: ["5", "6", "7", "8"],

    a: 2

  },

  {

    q: "Üçbucağın perimetri 36 sm-dir, tərəfləri nisbəti 3:4:5-dir. Ən uzun tərəf neçədir?",

    d: "O",

    options: ["10 sm", "12 sm", "15 sm", "18 sm"],

    a: 2

  },

  {

    q: "M(2, −3) nöqtəsinin koordinat başlanğıcına nəzərən mərkəzi simmetrik nöqtəsini tap.",

    d: "Ç",

    options: ["(2, 3)", "(−2, −3)", "(−2, 3)", "(3, −2)"],

    a: 2

  },

  {

    q: "Bir torbada 5 qara, 5 ağ kürə var. Təsadüfən çıxarılan kürənin qara olması ehtimalı neçədir?",

    d: "A",

    options: ["1/5", "1/3", "1/2", "2/3"],

    a: 2

  }

]

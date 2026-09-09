var QUIZ_META = {

  title: "3-cü sinif üçün məntiq testi",

  grade: 3

};

var QUESTIONS = [

  {

    q: "5, 10, 15, 20, … Növbəti iki ədəd hansıdır?",

    d: "A",

    options: ["25, 30", "24, 29", "30, 35", "20, 25"],

    a: 0

  },

  {

    q: "İki rəqəmli ədədəm. Rəqəmlərimin cəmi 11-dir, onlarlığım vahidliyimdən 3 böyükdür. Mən hansı ədədəm?",

    d: "O",

    options: ["47", "74", "83", "65"],

    a: 1

  },

  {

    q: "Üç bacı-qardaşın yaşları ardıcıl cüt ədədlərdir (məs: 10, 12, 14). Yaş cəmləri 36-dır. Hər birinin yaşı neçədir?",

    d: "Ç",

    options: ["8, 12, 16", "9, 12, 15", "10, 12, 14", "10, 13, 13"],

    a: 2

  },

  {

    q: "Anar 3 alma yedi, sonra dükandan 5 alma aldı və indi 10 alması var. Əvvəlcə neçə alması var idi?",

    d: "A",

    options: ["6", "7", "8", "9"],

    a: 2

  },

  {

    q: "Bir mağazada qələmlər 4-lük dəstələrdə satılır. Vüsal 6 dəstə aldı, sonra 9 qələm istifadə etdi. Neçə qələmi qalıb?",

    d: "O",

    options: ["15", "18", "20", "24"],

    a: 0

  },

  {

    q: "Ata, ana və uşağın yaş cəmi 90-dır. Ata anadan 4 yaş böyükdür, uşaq 10 yaşındadır. Ana neçə yaşındadır?",

    d: "Ç",

    options: ["36", "37", "38", "40"],

    a: 2

  },

  {

    q: "Zeynəbin 3 pişiyi var, hər pişiyin 4 pəncəsi var. Cəmi neçə pəncə var?",

    d: "A",

    options: ["8", "10", "12", "14"],

    a: 2

  },

  {

    q: "Bir kitabın yarısını oxudum, qalan hissəsi 60 səhifədir. Kitabda cəmi neçə səhifə var?",

    d: "O",

    options: ["100", "120", "140", "160"],

    a: 1

  },

  {

    q: "İki qutuda cəmi 60 alma var. Birinci qutuda ikincidən 2 dəfə çox alma var. Hər qutuda neçə alma var?",

    d: "Ç",

    options: ["20 və 40", "15 və 45", "25 və 35", "30 və 30"],

    a: 0

  },

  {

    q: "50, 45, 40, 35, … Növbəti iki ədəd hansıdır?",

    d: "A",

    options: ["30, 25", "32, 27", "25, 20", "35, 30"],

    a: 0

  },

  {

    q: "Turqut Aygündən sürətli qaçır, Aygün Kəmalədən sürətli qaçır, Kəmalə Elvindən sürətli qaçır. Ən yavaş kimdir?",

    d: "O",

    options: ["Turqut", "Aygün", "Kəmalə", "Elvin"],

    a: 3

  },

  {

    q: "Bir zəncirdə hər halqa əvvəlkindən 3 dəfə ağırdır. Birinci halqa 2 qramdırsa, üçüncü halqa neçə qramdır?",

    d: "Ç",

    options: ["6", "12", "18", "24"],

    a: 2

  },

  {

    q: "Bir toyuq 2 gündə 2 yumurta yumurtlayırsa, 6 toyuq 6 gündə neçə yumurta yumurtlayar?",

    d: "A",

    options: ["18", "24", "30", "36"],

    a: 3

  },

  {

    q: "Aygülün pulu Elnurundan 15 manat çoxdur. Onların pullarının cəmi 55 manatdır. Elnurun pulu neçədir?",

    d: "O",

    options: ["15 manat", "20 manat", "25 manat", "30 manat"],

    a: 1

  },

  {

    q: "Dərs saat 09:15-də başladı və 3 saat 40 dəqiqə çəkdi. Dərs neçədə bitdi?",

    d: "Ç",

    options: ["12:35", "12:45", "12:55", "13:05"],

    a: 2

  },

  {

    q: "Bir maşında 4 təkər var. 9 maşında cəmi neçə təkər var?",

    d: "A",

    options: ["32", "36", "40", "45"],

    a: 1

  },

  {

    q: "Bir bağda alma ağacları armud ağaclarından 4 dəfə çoxdur. Armud ağacları 6 ədəddirsə, alma ağacları neçədir?",

    d: "O",

    options: ["18", "20", "24", "30"],

    a: 2

  },

  {

    q: "İki rəqəmli ədədəm. Vahidliyim onlarlığımdan 5 böyükdür, rəqəmlərimin cəmi 9-dur. Mən hansı ədədəm?",

    d: "Ç",

    options: ["27", "36", "45", "54"],

    a: 0

  },

  {

    q: "Cümə axşamından sonra hansı gün gəlir?",

    d: "A",

    options: ["Çərşənbə", "Cümə", "Şənbə", "Bazar"],

    a: 1

  },

  {

    q: "3 uşağın hər birinə 5 şokolad paylandı, sonra əlavə 4 şokolad da paylandı. Cəmi neçə şokolad paylanıb?",

    d: "O",

    options: ["15", "17", "19", "20"],

    a: 2

  },

  {

    q: "4 dülgər 4 stolu 4 gündə düzəldirsə, 8 dülgər 8 stolu neçə gündə düzəldər?",

    d: "Ç",

    options: ["2 gün", "4 gün", "6 gün", "8 gün"],

    a: 1

  },

  {

    q: "12, 14, 16, 18, … Növbəti iki ədəd hansıdır?",

    d: "A",

    options: ["19, 21", "20, 22", "21, 23", "22, 24"],

    a: 1

  },

  {

    q: "Sinifin 3/5 hissəsi qızdır. Sinifdə 30 şagird varsa, neçə qız var?",

    d: "O",

    options: ["15", "18", "20", "21"],

    a: 1

  },

  {

    q: "Vüsal Elnurdan 2 dəfə çox pula malikdir, Elnur isə Kamaldan 3 manat çoxdur. Kamalın 5 manatı var. Vüsalın pulu neçədir?",

    d: "Ç",

    options: ["13 manat", "14 manat", "16 manat", "18 manat"],

    a: 2

  },

  {

    q: "Bir qutuda 24 karandaş var. Onları 6 uşağa bərabər paylasaq, hər birinə neçə düşər?",

    d: "A",

    options: ["3", "4", "5", "6"],

    a: 1

  },

  {

    q: "Saat 10:00-da başlayan film 2 saat 15 dəqiqə çəkir. Film neçədə bitir?",

    d: "O",

    options: ["11:45", "12:00", "12:15", "12:30"],

    a: 2

  },

  {

    q: "Məni 4-ə vur, 6 çıx — nəticə 18 olur. Mən hansı ədədəm?",

    d: "Ç",

    options: ["5", "6", "7", "8"],

    a: 1

  },

  {

    q: "Bağda 7 qırmızı, 5 sarı gül var. Cəmi neçə gül var?",

    d: "A",

    options: ["10", "11", "12", "13"],

    a: 2

  },

  {

    q: "Kitab rəflərində 5 rəf var, hər birində 12 kitab olmalıdır, amma 2 rəfdə 3-ər kitab əskikdir. Cəmi neçə kitab var?",

    d: "O",

    options: ["48", "51", "54", "57"],

    a: 2

  },

  {

    q: "3 il əvvəl Elnurun yaşı indiki yaşının yarısı idi. Elnur indi neçə yaşındadır?",

    d: "Ç",

    options: ["5", "6", "7", "8"],

    a: 1

  },

  {

    q: "Bir həftədə neçə gün var?",

    d: "A",

    options: ["5", "6", "7", "8"],

    a: 2

  },

  {

    q: "Pəncərədə əvvəlcə 8 quş var idi. Hamısı uçub getdi, sonra əvvəlkindən 3 dəfə çox quş qondu. İndi pəncərədə neçə quş var?",

    d: "O",

    options: ["16", "20", "24", "32"],

    a: 2

  },

  {

    q: "İki ədədin cəmi 40, fərqi 8-dir. Böyük ədəd hansıdır?",

    d: "Ç",

    options: ["20", "22", "24", "28"],

    a: 2

  },

  {

    q: "3 üçbucağın hər birinin 3 küncü var. Cəmi neçə künc var?",

    d: "A",

    options: ["6", "8", "9", "12"],

    a: 2

  },

  {

    q: "1 kq alma 3 manatdır. Aynur 4 kq alma aldı və 20 manatlıq pulla ödədi. Neçə manat qalığı oldu?",

    d: "O",

    options: ["6 manat", "8 manat", "9 manat", "10 manat"],

    a: 1

  },

  {

    q: "İki rəqəmli ədədəm. Rəqəmlərimin hasili 12-dir, cəmi 7-dir. Onlarlığım vahidliyimdən böyükdür. Mən hansı ədədəm?",

    d: "Ç",

    options: ["34", "43", "52", "61"],

    a: 1

  },

  {

    q: "9, 18, 27, 36, … Növbəti ədəd hansıdır?",

    d: "A",

    options: ["40", "42", "45", "48"],

    a: 2

  },

  {

    q: "Sürücü 60 km yolu 2 saata gedir. Eyni sürətlə 90 km yolu neçə saata gedər?",

    d: "O",

    options: ["2 saat", "2,5 saat", "3 saat", "4 saat"],

    a: 2

  },

  {

    q: "Anar Vüsaldan öndədir, Elnur isə Anardan öndədir. Yarışda sıralama necədir?",

    d: "Ç",

    options: [

      "Anar, Elnur, Vüsal",

      "Vüsal, Anar, Elnur",

      "Elnur, Anar, Vüsal",

      "Elnur, Vüsal, Anar"

    ],

    a: 2

  },

  {

    q: "Bir əldə 5 barmaq var. 2 əldə cəmi neçə barmaq var?",

    d: "A",

    options: ["8", "9", "10", "12"],

    a: 2

  },

  {

    q: "45 şagirddən 27-si oğlandır. Neçə qız var?",

    d: "O",

    options: ["16", "17", "18", "19"],

    a: 2

  },

  {

    q: "Bir zəncirdə hər halqa əvvəlkindən 5 qram ağırdır. Birinci halqa 4 qramdırsa, beşinci halqa neçə qramdır?",

    d: "Ç",

    options: ["19 qram", "20 qram", "24 qram", "25 qram"],

    a: 2

  },

  {

    q: "Bağçada 6 sıra tərəvəz var, hər sırada 8 kök var. Cəmi neçə kök var?",

    d: "A",

    options: ["42", "46", "48", "54"],

    a: 2

  },

  {

    q: "Orxan gündə 15 səhifə oxuyur. 240 səhifəlik kitabı neçə günə bitirər?",

    d: "O",

    options: ["14", "15", "16", "18"],

    a: 2

  },

  {

    q: "Üç ədədin ortalaması 15-dir. İki ədəd 10 və 18-dirsə, üçüncü ədəd neçədir?",

    d: "Ç",

    options: ["15", "17", "18", "20"],

    a: 1

  },

  {

    q: "Bir litr suda 1000 ml var. Yarım litr neçə ml-dir?",

    d: "A",

    options: ["250 ml", "400 ml", "500 ml", "750 ml"],

    a: 2

  },

  {

    q: "Hər zərfdə 25 manat var. 6 zərfdə cəmi neçə manat var?",

    d: "O",

    options: ["125 manat", "150 manat", "175 manat", "200 manat"],

    a: 1

  },

  {

    q: "İki bacının yaş cəmi 26-dır. Böyüyü kiçikdən 4 yaş böyükdür. Hər birinin yaşı neçədir?",

    d: "Ç",

    options: ["10 və 16", "11 və 15", "12 və 14", "9 və 17"],

    a: 1

  },

  {

    q: "8 + 7 = ?",

    d: "A",

    options: ["13", "14", "15", "16"],

    a: 2

  },

  {

    q: "Zavod hər saat 40 detal düzəldir. 5 saat işlədikdən sonra 30 detal zay çıxdı. Neçə yararlı detal qalıb?",

    d: "O",

    options: ["160", "170", "180", "190"],

    a: 1

  },

  {

    q: "Bir ədəd özü-özünə vurulanda 49 alınır. Bu ədəd hansıdır?",

    d: "Ç",

    options: ["6", "7", "8", "9"],

    a: 1

  },

  {

    q: "Bir ildə neçə ay var?",

    d: "A",

    options: ["10", "11", "12", "13"],

    a: 2

  },

  {

    q: "50 manatlıq alış-verişdən 10 manat endirim edilir. Ödəniləcək məbləğ neçədir?",

    d: "O",

    options: ["30 manat", "35 manat", "40 manat", "45 manat"],

    a: 2

  },

  {

    q: "Üç dostun kitab sayı ardıcıl ədədlərdir, cəmi 24-dür. Ən çox kitabı olan dostun neçə kitabı var?",

    d: "Ç",

    options: ["7", "8", "9", "10"],

    a: 2

  },

  {

    q: "100-dən 1 əskik olan ədəd hansıdır?",

    d: "A",

    options: ["98", "99", "100", "101"],

    a: 1

  },

  {

    q: "18 şagirdi 3 nəfərlik qruplara bölürlər. Neçə qrup alınar?",

    d: "O",

    options: ["5", "6", "7", "9"],

    a: 1

  },

  {

    q: "Bir konteynerdə alma armuddan 3 dəfə çoxdur. Cəmi 200 meyvə varsa, armud neçədir?",

    d: "Ç",

    options: ["40", "50", "60", "75"],

    a: 1

  },

  {

    q: "6 − 4 = ?",

    d: "A",

    options: ["1", "2", "3", "4"],

    a: 1

  },

  {

    q: "Zəngli saat hər gün 5 dəqiqə tez işləyir. 4 gün sonra neçə dəqiqə tez olar?",

    d: "O",

    options: ["15 dəqiqə", "20 dəqiqə", "25 dəqiqə", "30 dəqiqə"],

    a: 1

  },

  {

    q: "İki ədədin hasili 32-dir, biri digərindən 2 dəfə böyükdür. Kiçik ədəd neçədir?",

    d: "Ç",

    options: ["2", "4", "6", "8"],

    a: 1

  }

];

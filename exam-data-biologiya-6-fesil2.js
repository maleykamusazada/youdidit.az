var QUIZ_META = {
  title: "Biologiya 6 — II Fəsil: Orqanizmlərin hüceyrəvi quruluşu (100 sual)"
};
var QUESTIONS = [
  {
    q: "Laboratoriyada mayenin həcmini ölçmək üçün hansı alətdən istifadə edilir?",
    options: ["Pinset", "Mikroskop", "Menzurka", "Əşya şüşəsi"],
    a: 2
  },
  {
    q: "Mikroskopun əsas vəzifəsi nədir?",
    options: ["Mayenin kütləsini ölçmək", "Maddəni qızdırmaq", "Kiçik obyektləri böyüdərək müşahidə etmək", "Temperaturu ölçmək"],
    a: 2
  },
  {
    q: "Əşya şüşəsi nə üçün istifadə olunur?",
    options: ["Həcmi ölçmək üçün", "Nümunəni mikroskop altında yerləşdirmək üçün", "Mayeni qızdırmaq üçün", "Maddəni süzmək üçün"],
    a: 1
  },
  {
    q: "Örtük şüşəsinin əsas məqsədi nədir?",
    options: ["Preparatı örtmək və qorumaq", "Mayeni qarışdırmaq", "Temperaturu ölçmək", "Mikroskopu böyütmək"],
    a: 0
  },
  {
    q: "Spirt lampası laboratoriyada əsasən nə üçün istifadə edilir?",
    options: ["Nümunəni böyütmək üçün", "Maddələri qızdırmaq üçün", "Həcmi ölçmək üçün", "Preparatı örtmək üçün"],
    a: 1
  },
  {
    q: "Mikroskopun gözlə baxılan hissəsi necə adlanır?",
    options: ["Ştativ", "Predmet stolu", "Okulyar", "Diafraqma"],
    a: 2
  },
  {
    q: "Nümunəni şüşə üzərinə götürmək üçün hansı alət əlverişlidir?",
    options: ["Spirt lampası", "Termometr", "Menzurka", "Pinset"],
    a: 3
  },
  {
    q: "Mikroskop linzalarını necə təmizləmək düzgündür?",
    options: ["Qumla", "Barmaqla", "Metal alətlə", "Xüsusi linza kağızı ilə"],
    a: 3
  },
  {
    q: "Mikroskopla işləyərkən ilk növbədə nəyə riayət etmək lazımdır?",
    options: ["Alətləri icazəsiz qızdırmağa", "Bütün maddələri qarışdırmağa", "Təhlükəsizlik qaydalarına", "Linzaya toxunmağa"],
    a: 2
  },
  {
    q: "Laboratoriya işində müşahidə nəticələri harada qeyd edilə bilər?",
    options: ["Pinsetin üzərində", "Mikroskopun linzasında", "Qeyd dəftərində", "Spirt lampasında"],
    a: 2
  },
  {
    q: "Canlı orqanizmlərin əsas quruluş vahidi nədir?",
    options: ["Orqanlar sistemi", "Orqan", "Toxuma", "Hüceyrə"],
    a: 3
  },
  {
    q: "Hüceyrənin idarəedici mərkəzi hesab olunan hissə hansıdır?",
    options: ["Nüvə", "Hüceyrə divarı", "Ribosom", "Vakuol"],
    a: 0
  },
  {
    q: "Sitoplazma nədir?",
    options: ["Yalnız xloroplast", "Hüceyrənin xarici divarı", "Hüceyrənin daxili mayevari mühiti", "Yalnız nüvənin içi"],
    a: 2
  },
  {
    q: "Hüceyrə membranının əsas funksiyalarından biri hansıdır?",
    options: ["Maddələrin hüceyrəyə daxil olub-çıxmasını tənzimləmək", "İrsi məlumatı təkbaşına yaratmaq", "Sümükləri hərəkət etdirmək", "Hüceyrəni yalnız rəngləndirmək"],
    a: 0
  },
  {
    q: "Bitki hüceyrəsini heyvan hüceyrəsindən fərqləndirən quruluşlardan biri hansıdır?",
    options: ["Sitoplazma", "Ribosom", "Hüceyrə divarı", "Nüvə"],
    a: 2
  },
  {
    q: "Fotosintezin baş verdiyi əsas orqanoid hansıdır?",
    options: ["Xloroplast", "Ribosom", "Mitoxondri", "Nüvə"],
    a: 0
  },
  {
    q: "Mitoxondrinin əsas funksiyası nə ilə bağlıdır?",
    options: ["Fotosintezin aparılması ilə", "Enerjinin ayrılması ilə", "Hüceyrə divarının yaranması ilə", "İrsi məlumatın saxlanması ilə"],
    a: 1
  },
  {
    q: "Ribosomların əsas rolu nədir?",
    options: ["Zülal sintezində iştirak etmək", "Hüceyrə şirəsi toplamaq", "Hüceyrəni qorumaq", "İşığı udmaq"],
    a: 0
  },
  {
    q: "Bitki hüceyrəsində iri vakuolun əsas funksiyalarından biri nədir?",
    options: ["Hüceyrə şirəsini toplamaq", "İrsi məlumatı saxlamaq", "İmpuls ötürmək", "Zülal sintez etmək"],
    a: 0
  },
  {
    q: "Bitki hüceyrə divarının əsas maddəsi hansıdır?",
    options: ["Yağ", "Sellüloza", "Nişasta", "Hemoglobin"],
    a: 1
  },
  {
    q: "Nüvənin mühüm funksiyası hansıdır?",
    options: ["Yalnız hərəkət etdirmək", "İrsi məlumatı saxlamaq və hüceyrəni idarə etmək", "Yalnız su toplamaq", "Yalnız fotosintez etmək"],
    a: 1
  },
  {
    q: "Hansı quruluş bitki hüceyrəsində fotosintezlə əlaqəlidir?",
    options: ["Ribosom", "Nüvə", "Xloroplast", "Vakuol"],
    a: 2
  },
  {
    q: "Hüceyrə divarı bitki hüceyrəsinə əsasən nə verir?",
    options: ["Həzm", "İmpuls ötürmə", "Qan dövranı", "Möhkəmlik və forma"],
    a: 3
  },
  {
    q: "Eyni quruluş və funksiyaya malik hüceyrələr birləşərək nə əmələ gətirir?",
    options: ["Orqan", "Toxuma", "Orqanizm", "Orqanlar sistemi"],
    a: 1
  },
  {
    q: "Bir neçə toxumanın birləşməsindən əsasən nə yaranır?",
    options: ["Hüceyrə", "Bakteriya", "Virus", "Orqan"],
    a: 3
  },
  {
    q: "Bir neçə orqanın birlikdə müəyyən funksiyanı yerinə yetirməsi nə yaradır?",
    options: ["Hüceyrə divarı", "Toxuma", "Orqanlar sistemi", "Xromosom"],
    a: 2
  },
  {
    q: "Hüceyrənin əsas hissələrindən biri hansıdır?",
    options: ["Toxuma", "Orqan", "Sitoplazma", "Sistem"],
    a: 2
  },
  {
    q: "Hansı quruluş həm bitki, həm də heyvan hüceyrəsində olur?",
    options: ["Nüvə", "İri mərkəzi vakuol", "Hüceyrə divarı", "Xloroplast"],
    a: 0
  },
  {
    q: "Bitki hüceyrəsinin formasının saxlanmasına daha çox hansı quruluş kömək edir?",
    options: ["Hüceyrə divarı", "Ribosom", "Nüvə", "Xromosom"],
    a: 0
  },
  {
    q: "Hüceyrənin canlılığını təmin edən proseslərin çoxu harada gedir?",
    options: ["Yalnız örtük toxumasında", "Yalnız hüceyrə divarında", "Sitoplazmada", "Yalnız vakuolun xaricində"],
    a: 2
  },
  {
    q: "Prokariot orqanizmlərin əsas xüsusiyyəti hansıdır?",
    options: ["Mütləq çoxhüceyrəli olması", "Orqanlar sisteminin olması", "Xloroplastlarının olması", "Formalaşmış nüvələrinin olmaması"],
    a: 3
  },
  {
    q: "Bakteriyalar hansı hüceyrə tipinə aiddir?",
    options: ["Prokariot", "Toxuma", "Virus", "Eukariot"],
    a: 0
  },
  {
    q: "Eukariot hüceyrələri prokariotlardan əsasən nə ilə fərqlənir?",
    options: ["DNT daşımamaları ilə", "Formalaşmış nüvəyə malik olmaları ilə", "Hüceyrə membranının olmaması ilə", "Həmişə təkhüceyrəli olmaları ilə"],
    a: 1
  },
  {
    q: "Aşağıdakılardan hansı prokariotdur?",
    options: ["Göbələk", "Bakteriya", "Amöb", "Palıd"],
    a: 1
  },
  {
    q: "Bakteriya hüceyrəsində hansı quruluş olmur?",
    options: ["Formalaşmış nüvə", "Ribosom", "Sitoplazma", "Hüceyrə membranı"],
    a: 0
  },
  {
    q: "Bakteriyaların əksəriyyəti hansı quruluşa malikdir?",
    options: ["Toxumalı", "Orqanlar sistemli", "Təkhüceyrəli", "Mütləq çoxhüceyrəli"],
    a: 2
  },
  {
    q: "Prokariotlarda irsi material harada yerləşir?",
    options: ["Xloroplastda", "Vakuolda", "Nukleoid sahəsində", "Mitoxondridə"],
    a: 2
  },
  {
    q: "Bakteriya hüceyrəsində hansı quruluş ola bilər?",
    options: ["Ribosom", "Xloroplast", "Formalaşmış nüvə", "Mitoz bölünən nüvə"],
    a: 0
  },
  {
    q: "Prokariot və eukariot hüceyrələrin ortaq xüsusiyyəti hansıdır?",
    options: ["Hər ikisi çoxhüceyrəlidir", "Hər ikisində hüceyrə membranı və sitoplazma vardır", "Hər ikisində xloroplast vardır", "Hər ikisində formalaşmış nüvə vardır"],
    a: 1
  },
  {
    q: "Prokariot sözündəki əsas fərqləndirici xüsusiyyət nədir?",
    options: ["Orqanlar sisteminin olması", "Çoxlu toxumaların olması", "Yalnız bitki olması", "Həqiqi nüvənin olmaması"],
    a: 3
  },
  {
    q: "Bakteriyaların yayılmasına hansı şərait əlverişli ola bilər?",
    options: ["Mütləq tam quruluq", "Tamamilə qidasız mühit", "Uyğun temperatur və qida mühiti", "Həmişə çox aşağı temperatur"],
    a: 2
  },
  {
    q: "Xəstəliktörədən bakteriya nədir?",
    options: ["Xəstəlik yarada bilən bakteriya", "Yalnız faydalı bakteriya", "Virusun başqa adı", "Yalnız torpaq hissəciyi"],
    a: 0
  },
  {
    q: "Bakteriyaların təbiətdə faydalı roluna nümunə hansıdır?",
    options: ["Bütün xəstəlikləri müalicə etmək", "Üzvi qalıqların parçalanmasında iştirak", "Torpağı yox etməsi", "Hamısının fotosintez etməsi"],
    a: 1
  },
  {
    q: "Antibiotiklər əsasən nəyə qarşı istifadə olunur?",
    options: ["Bütün viruslara qarşı", "Yalnız göbələklərə qarşı", "Bakteriyalara qarşı", "Yalnız bitkilərə qarşı"],
    a: 2
  },
  {
    q: "Viruslar hüceyrə quruluşuna malikdirmi?",
    options: ["Yalnız bakteriya hüceyrəsinə malikdir", "Bəli, tam hüceyrədir", "Yalnız bitki hüceyrəsinə malikdir", "Xeyr"],
    a: 3
  },
  {
    q: "Virusların çoxalması üçün nə lazımdır?",
    options: ["Distillə olunmuş su", "Torpaq hissəcikləri", "Ölü toxuma", "Canlı hüceyrə"],
    a: 3
  },
  {
    q: "Viruslar canlı hüceyrədə əsasən nə edir?",
    options: ["Hüceyrə divarı yaradır", "Çoxalaraq hüceyrənin fəaliyyətini poza bilir", "Sümük əmələ gətirir", "Fotosintez edir"],
    a: 1
  },
  {
    q: "Qripin törədicisi hansı qrupa aiddir?",
    options: ["Bakteriyalara", "Göbələklərə", "Bitkilərə", "Viruslara"],
    a: 3
  },
  {
    q: "Bakteriyaların insan üçün faydalı fəaliyyətlərindən biri hansıdır?",
    options: ["İnsanda sümük yaratmaq", "Bəzi qida məhsullarının hazırlanmasında iştirak", "Xloroplast yaratmaq", "Bütün virusları məhv etmək"],
    a: 1
  },
  {
    q: "Bakteriyaların yayılmasının qarşısını almağa hansı tədbir kömək edir?",
    options: ["Xəstə ilə təması artırmaq", "Qidaları açıq saxlamaq", "Əlləri yumamaq", "Gigiyena qaydalarına əməl etmək"],
    a: 3
  },
  {
    q: "Hüceyrə bölünməsinin əsas əhəmiyyəti nədir?",
    options: ["Bütün hüceyrələri məhv etmək", "Yalnız temperaturu dəyişmək", "Yalnız suyu buxarlandırmaq", "Böyümə, inkişaf və yeni hüceyrələrin yaranması"],
    a: 3
  },
  {
    q: "Hüceyrə bölünməsi nəticəsində nə yaranır?",
    options: ["Yalnız viruslar", "Yalnız hüceyrə divarı", "Yeni hüceyrələr", "Yalnız toxumlar"],
    a: 2
  },
  {
    q: "Bölünmədən əvvəl irsi materialla bağlı hansı proses baş verir?",
    options: ["Xlorofilin tam parçalanması", "DNT-nin ikiqatlaşması", "Hüceyrə divarının yox olması", "Vakuolun mütləq itməsi"],
    a: 1
  },
  {
    q: "Çoxhüceyrəli orqanizmin böyüməsində hansı proses mühümdür?",
    options: ["Buxarlanma", "Hüceyrə bölünməsi", "Virus infeksiyası", "Fotosintezin dayanması"],
    a: 1
  },
  {
    q: "İnkişaf anlayışına hansı fikir uyğundur?",
    options: ["Quruluş və funksiyaların formalaşması və dəyişməsi", "Yalnız temperatur artımı", "Yalnız su itkisi", "Yalnız kütlənin azalması"],
    a: 0
  },
  {
    q: "Bölünmə yeni hüceyrələrə nə ötürməlidir?",
    options: ["Yalnız işıq", "İrsi məlumat", "Yalnız oksigen", "Yalnız su"],
    a: 1
  },
  {
    q: "Zədələnmiş toxumanın bərpasında hansı proses mühüm rol oynayır?",
    options: ["Virusların yayılması", "Buxarlanma", "Qidanın quruması", "Hüceyrə bölünməsi"],
    a: 3
  },
  {
    q: "Hüceyrə bölünməsi orqanizmin hansı xüsusiyyətinə xidmət edir?",
    options: ["Yalnız səs çıxarmasına", "Böyümə və inkişafa", "Yalnız qoxuya", "Yalnız rəng dəyişməsinə"],
    a: 1
  },
  {
    q: "Yeni hüceyrələrin yaranması hansı proseslə əlaqəlidir?",
    options: ["Buxarlanma", "Bölünmə", "Süzülmə", "Tənəffüsün dayanması"],
    a: 1
  },
  {
    q: "Hüceyrə bölünməsində irsi məlumatın qorunması nə üçün vacibdir?",
    options: ["Yeni hüceyrələrin oxşar irsi xüsusiyyətləri alması üçün", "Hüceyrənin rəngini dəyişmək üçün", "Mayeni qızdırmaq üçün", "Mikroskopu böyütmək üçün"],
    a: 0
  },
  {
    q: "Birhüceyrəli orqanizm nədir?",
    options: ["Yalnız bir orqandan ibarət canlı", "Yalnız nüvədən ibarət canlı", "Çoxlu toxumadan ibarət canlı", "Bədəni bir hüceyrədən ibarət olan orqanizm"],
    a: 3
  },
  {
    q: "Aşağıdakılardan hansı birhüceyrəlidir?",
    options: ["Amöb", "Palıd", "Pişik", "İnsan"],
    a: 0
  },
  {
    q: "Aşağıdakılardan hansı çoxhüceyrəlidir?",
    options: ["Bakteriya", "Paramecium", "Amöb", "İnsan"],
    a: 3
  },
  {
    q: "Birhüceyrəli canlıda bir hüceyrə nəyi yerinə yetirir?",
    options: ["Yalnız çoxalmanı", "Yalnız qidalanmanı", "Həyat fəaliyyəti üçün əsas funksiyaları", "Heç bir funksiyanı"],
    a: 2
  },
  {
    q: "Çoxhüceyrəli orqanizmlərdə hüceyrələr niyə ixtisaslaşır?",
    options: ["Canlını cansızlaşdırmaq üçün", "Hamısının eyni olması üçün", "Müxtəlif funksiyaları yerinə yetirmək üçün", "Nüvəni itirmək üçün"],
    a: 2
  },
  {
    q: "Çoxhüceyrəli orqanizmdə əmək bölgüsü nə ilə bağlıdır?",
    options: ["Hüceyrələrin hamısının eyni olması ilə", "Suyun yox olması ilə", "Virusların artması ilə", "Hüceyrə və toxumaların ixtisaslaşması ilə"],
    a: 3
  },
  {
    q: "Birhüceyrəli və çoxhüceyrəli orqanizmlərin ortaq cəhəti nədir?",
    options: ["Hər ikisi yalnız bakteriyadır", "Hər ikisi orqanlar sisteminə malikdir", "Hər ikisi yalnız heyvandır", "Hər ikisi hüceyrələrdən təşkil olunub"],
    a: 3
  },
  {
    q: "Çoxhüceyrəli orqanizmdə toxuma necə yaranır?",
    options: ["Ölü maddədən", "Oxşar ixtisaslaşmış hüceyrələrin birləşməsindən", "Yalnız sudan", "Virusların birləşməsindən"],
    a: 1
  },
  {
    q: "Birhüceyrəli canlıda orqan və toxuma olmamasının əsas səbəbi nədir?",
    options: ["Onun həmişə virus olması", "Onun çoxnüvəli olması", "Onun canlı olmaması", "Orqanizmin bir hüceyrədən ibarət olması"],
    a: 3
  },
  {
    q: "Hüceyrə → toxuma → orqan ardıcıllığı nəyi göstərir?",
    options: ["Canlının cansızlaşmasını", "Yalnız qidalanmanı", "Viruslaşmanı", "Quruluşun mürəkkəbləşməsini"],
    a: 3
  },
  {
    q: "Bitkinin törədici toxumasının əsas funksiyası nədir?",
    options: ["Yeni hüceyrələr əmələ gətirmək", "Su itkisinin qarşısını almaq", "Yalnız maddə daşımaq", "Yalnız mexaniki dayaq"],
    a: 0
  },
  {
    q: "Törədici toxumanın hüceyrələri necə olur?",
    options: ["Həmişə nüvəsiz olur", "Bölünmə qabiliyyəti yüksək olur", "Həmişə çox iri olur", "Tamamilə ölü olur"],
    a: 1
  },
  {
    q: "Örtük toxumasının əsas funksiyası nədir?",
    options: ["Yalnız su daşımaq", "Yalnız toxum yaratmaq", "Yalnız hüceyrə bölmək", "Bitkini xarici təsirlərdən qorumaq"],
    a: 3
  },
  {
    q: "Mexaniki toxumanın əsas funksiyası nədir?",
    options: ["Yalnız su buxarlandırmaq", "Fotosintez etmək", "Dayaq və möhkəmlik vermək", "Xəstəlik törətmək"],
    a: 2
  },
  {
    q: "Bitkinin böyüməsində hansı toxuma mühümdür?",
    options: ["Törədici toxuma", "Virus toxuması", "Mexaniki toxuma", "Örtük toxuması"],
    a: 0
  },
  {
    q: "Epidermis hansı toxuma qrupuna aiddir?",
    options: ["Törədici toxumaya", "Ötürücü toxumaya", "Örtük toxumasına", "Mexaniki toxumaya"],
    a: 2
  },
  {
    q: "Mexaniki toxumanın inkişafı bitkidə nəyi artırır?",
    options: ["Virusların sayını", "Möhkəmliyi", "Yalnız rəng dəyişməsini", "Həmişə çoxalmanı"],
    a: 1
  },
  {
    q: "Örtük toxuması zədələnsə, hansı funksiya zəifləyər?",
    options: ["Zülal sintezi", "İmpuls ötürülməsi", "Qoruyucu funksiya", "İrsi məlumatın saxlanması"],
    a: 2
  },
  {
    q: "Törədici və mexaniki toxumanın fərqi nədir?",
    options: ["Biri yeni hüceyrələr yaradır, digəri dayaq verir", "Hər ikisi yalnız su daşıyır", "Biri virus, digəri bakteriyadır", "Hər ikisi yalnız heyvanlarda olur"],
    a: 0
  },
  {
    q: "Bitkinin gövdəsinə dayaq verən toxuma hansıdır?",
    options: ["İfrazat toxuması", "Örtük toxuması", "Törədici toxuma", "Mexaniki toxuma"],
    a: 3
  },
  {
    q: "Ötürücü toxumanın əsas funksiyası nədir?",
    options: ["Yalnız qorumaq", "Yalnız dayaq vermək", "Yalnız bölünmək", "Maddələrin bitki daxilində daşınması"],
    a: 3
  },
  {
    q: "Ksilem əsasən nə daşıyır?",
    options: ["Su və mineral maddələri", "Hazır üzvi maddələri", "Yalnız zülalı", "Yalnız oksigeni"],
    a: 0
  },
  {
    q: "Floem əsasən nə ilə bağlıdır?",
    options: ["Yalnız bölünmə ilə", "Yalnız qoruma ilə", "Yalnız suyun daşınması ilə", "Üzvi maddələrin daşınması ilə"],
    a: 3
  },
  {
    q: "Əsas toxumanın funksiyalarından biri hansıdır?",
    options: ["Yalnız mexaniki dayaq", "Yalnız xarici qoruma", "Yalnız hüceyrə bölünməsi", "Fotosintez və ehtiyat maddələrin toplanması"],
    a: 3
  },
  {
    q: "İfrazat toxuması nə ilə əlaqəlidir?",
    options: ["Müxtəlif maddələrin ifrazı və toplanması ilə", "Yalnız bölünmə ilə", "Yalnız su daşımaqla", "Yalnız dayaqla"],
    a: 0
  },
  {
    q: "Heyvanlarda epitel toxumasının əsas funksiyası nədir?",
    options: ["Yalnız impuls ötürmək", "Yalnız qan yaratmaq", "Örtmə və qoruma", "Sümükləri hərəkət etdirmək"],
    a: 2
  },
  {
    q: "Əzələ toxumasının əsas xüsusiyyəti nədir?",
    options: ["Yığılmaq qabiliyyəti", "Yalnız maddə daşımaq", "Yalnız örtük yaratmaq", "İrsi məlumat saxlamaq"],
    a: 0
  },
  {
    q: "Sinir toxumasının əsas funksiyası nədir?",
    options: ["Yalnız dayaq vermək", "Qıcıqları qəbul etmək və impulsları ötürmək", "Yalnız qida toplamaq", "Yalnız örtmək"],
    a: 1
  },
  {
    q: "Birləşdirici toxumanın funksiyalarından biri hansıdır?",
    options: ["Dayaq və birləşdirmə", "Yalnız örtük yaratmaq", "Yalnız əzələ yığılması", "Yalnız impuls ötürmək"],
    a: 0
  },
  {
    q: "Qan hansı toxuma qrupuna daxildir?",
    options: ["Epitel toxumasına", "Əzələ toxumasına", "Birləşdirici toxumaya", "Sinir toxumasına"],
    a: 2
  },
  {
    q: "Bir neçə toxumanın birləşməsindən nə yaranır?",
    options: ["Hüceyrə", "Orqan", "Növ", "Virus"],
    a: 1
  },
  {
    q: "Qidanın həzm olunması hansı sistemlə əsasən əlaqəlidir?",
    options: ["Həzm sistemi", "Dayaq-hərəkət sistemi", "Tənəffüs sistemi", "Sinir sistemi"],
    a: 0
  },
  {
    q: "Tənəffüs sisteminin əsas vəzifəsi nədir?",
    options: ["Qaz mübadiləsini təmin etmək", "Qidanı həzm etmək", "Sümükləri birləşdirmək", "İrsi məlumatı saxlamaq"],
    a: 0
  },
  {
    q: "Dayaq-hərəkət sisteminə nə daxildir?",
    options: ["Mədə və bağırsaqlar", "Ağciyərlər və bronxlar", "Sümüklər və əzələlər", "Beyin və onurğa beyni"],
    a: 2
  },
  {
    q: "Sinir sistemi əsasən nə edir?",
    options: ["Orqanizmin fəaliyyətini idarə və əlaqələndirir", "Qanı süzür", "Oksigeni yalnız daşıyır", "Qidanı həzm edir"],
    a: 0
  },
  {
    q: "Orqanlar sisteminin üstünlüyü nədir?",
    options: ["Bütün orqanların eyni olması", "Canlının birhüceyrəli olması", "Hüceyrələrin yox olması", "Orqanların birlikdə müəyyən funksiyanı yerinə yetirməsi"],
    a: 3
  },
  {
    q: "Ürək hansı sistemin əsas orqanlarından biridir?",
    options: ["Həzm sisteminin", "Qan-damar sisteminin", "Sinir sisteminin", "Tənəffüs sisteminin"],
    a: 1
  },
  {
    q: "Ağciyərlər hansı sistemə aiddir?",
    options: ["Həzm sisteminə", "Tənəffüs sisteminə", "Sinir sisteminə", "Dayaq-hərəkət sisteminə"],
    a: 1
  },
  {
    q: "Mədə hansı sistemə daxildir?",
    options: ["Sinir sisteminə", "Dayaq-hərəkət sisteminə", "Həzm sisteminə", "Tənəffüs sisteminə"],
    a: 2
  },
  {
    q: "Beyin hansı sistemin əsas orqanıdır?",
    options: ["Tənəffüs sisteminin", "Sinir sisteminin", "Qan-damar sisteminin", "Həzm sisteminin"],
    a: 1
  }
];
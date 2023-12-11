var usedIndex = [];
function myFunction () {
    var myarray = [
    ` "أجمع عقلاء كل أمة على أن
        الكمالات كلها لاتنال إلا بحظ من المشقة،
        ولا يعبر إليها إلا على جسر من التعب،
        وعلى أن النعيم لايُدرك بالنعيم،
        وأن من آثر الراحة فاتته الراحة ...
        "وبحسب ركوب الأهوال واحتمال المشاق تكون الفرحة واللذة
        <br> <br>
        ابن القيم--` ,

    `
        "لا ينال العلم براحة البدن.
        ولا ريب عند كل عاقل أن كمال الراحة بحسب التعب."
        <br> <br>
        يحيى بن أبي كثير -
        `,

        `
        "بَصُرْتَ بالراحةِ الكبرى فلم تَرَها
        تُنَالُ إلا على جسرٍ من التعبِ"
        <br> <br>
        ابوتمام -
        `,
        `
        "فقل لمُرَجّي معالي الأمور
        بغير اجتهادٍ طلبتَ المحالا"
        <br> <br>

        لخبز أرزي -
        `,
        `
        يَا يَحْيَىٰ خُذِ الْكِتَابَ بِقُوَّةٍ ۖ وَآتَيْنَاهُ الْحُكْمَ صَبِيًّا
        <br> <br>
        سورة مريم آية:١٢ -
        `,
        `
        إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ إِنَّا لَا نُضِيعُ أَجْرَ مَنْ أَحْسَنَ عَمَلًا
        <br><br>
        سورة الكهف آية:٣٠ -
        `,
        `
        "أنت أمة وإن كنت وحدك"
        <br><br>
        ابن مسعود -
        `,
    ];
    var randomIndex;
    if (usedIndex.length == myarray.length) usedIndex = [];
    do {
        randomIndex = Math.floor(Math.random() * myarray.length);//5
        console.log("randomIndex");
        console.log(randomIndex);
    } while (usedIndex.includes(randomIndex));

    usedIndex.push(randomIndex);
    var randomElment = myarray[randomIndex];
    document.getElementById("demo").innerHTML = randomElment;
}

function transform (){
    $('#demo').css({
    ' margin-top': '8%',
    'background-color': '#00a786b0',
    'padding': '80px',
    'display': 'block',
    'animation': 'progress 0.6s ease-in-out' ,
    });
}



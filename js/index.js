$(document).ready(function () {
    //preload
    $('body').addClass(/Android|webOS|iPhone|iPod|BlackBerry|ipad/i.test(navigator.userAgent) ? "phone" : "pc");
    $("#status").delay(500).fadeOut();
    $("#preloader").delay(500).fadeOut('slow');

    // download
    $(".mac").click(function () {
        location.href = "https://www.oeanc.org/download/Oeanc-Core.dmg"
    });
    $(".win32").click(function () {
        location.href = "https://www.oeanc.org/download/Oeanc-qt32.rar"
    });
    $(".win64").click(function () {
        location.href = "https://www.oeanc.org/download/Oeanc-qt.rar"
    });

    //fade
    $('.windows').hover(function () {
        $('.win').fadeIn();
    }, function () {
        $('.win').fadeOut();
    });
    $(document).on('click', function (e) {
        $('.bottom ul').fadeOut();
    });
    $('#locale').click(function () {
        $('.bottom ul').fadeIn();
    });
    $('.bottom ul,#locale').on('click', function (e) {
        e.stopPropagation();
    });

    //price
    var price = 0.001692;
    var timeRand = [
        0.839710,
        0.943545,
        0.354031,
        0.295997,
        0.654761,
        0.002087,
        0.224331,
        0.379175,
        0.382471,
        0.371188,
        0.192627,
        0.979639,
        0.296475,
        0.830330,
        0.058674,
        0.005087,
        0.630465,
        0.990585,
        0.320432,
        0.034853,
        0.220611,
        0.325900,
        0.168177,
        0.085199,
        0.080131,
        0.467156,
        0.391888,
        0.376025,
        0.354750,
        0.588648,
        0.335909,
        0.283131,
        0.715590,
        0.384994,
        0.549209,
        0.403282,
        0.679014,
        0.768104,
        0.087438,
        0.873325,
        0.459377,
        0.080261,
        0.855576,
        0.803510,
        0.578579,
        0.218783,
        0.370778,
        0.798506,
        0.027128,
        0.620097,
        0.375118,
        0.690072,
        0.616224,
        0.378535,
        0.916711,
        0.027241,
        0.041402,
        0.054212,
        0.755224,
        0.880500,
        0.869170,
        0.968448,
        0.805882,
        0.703022,
        0.360629,
        0.610360,
        0.437889,
        0.175786,
        0.257963,
        0.175469,
        0.047706,
        0.403765,
        0.484024,
        0.277784,
        0.596545,
        0.425072,
        0.027550,
        0.926918,
        0.662570,
        0.128185,
        0.143516,
        0.660222,
        0.492233,
        0.568435,
        0.817739,
        0.177407,
        0.378460,
        0.906343,
        0.933278,
        0.155279,
        0.654587,
        0.976379,
        0.832358,
        0.303725,
        0.291445,
        0.511061,
        0.839710
    ];
    var myTime = new Date();
    var myDate = myTime.getDate();
    var myHour = (myTime.getHours() / 2).toFixed();
    price = price * (0.9 + 0.2 * timeRand[(myDate % 3 * 12 + myHour + 1)]);
    var range = (((0.9 + 0.2 * timeRand[(myDate % 3 * 12 + myHour + 1)]) / (0.9 + 0.2 * timeRand[(myDate % 3 * 12 + myHour)]) - 1) * 100).toFixed(2);
    if (range >= 0) {
        $('#range').html('(+' + range + '%)').addClass('red');
    } else if (range < 0) {
        $('#range').html('(' + range + '%)').addClass('green');
    };
    var rates = {
        CNY: 6.3345,
        HKD: 7.8488,
        EUR: 0.8108,
        JPY: 104.81
    };
    if (window.location.pathname == '/' || window.location.pathname.indexOf('index.html') != -1) {
        $('#money').html('USD');
        $('#price').html(price.toFixed(8));
    };
    if (window.location.pathname.indexOf('cn.html') != -1) {
        $('#money').html('CNY');
        $('#price').html((price * (rates['CNY'])).toFixed(8));
    };
    if (window.location.pathname.indexOf('zh.html') != -1) {
        $('#money').html('HKD');
        $('#price').html((price * (rates['HKD'])).toFixed(8));
    };
    if (window.location.pathname.indexOf('es.html') != -1) {
        $('#money').html('EUR');
        $('#price').html((price * (rates['EUR'])).toFixed(8));
    };
    if (window.location.pathname.indexOf('jp.html') != -1) {
        $('#money').html('JPY');
        $('#price').html((price * (rates['JPY'])).toFixed(8));
    };
});
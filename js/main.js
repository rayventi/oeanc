var monthNum2letter = new Array();
monthNum2letter = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
];

var picDomain = 'http://ovsfo7cbb.bkt.clouddn.com/';

(function() {
    $(window).scroll(function() { //回到顶部按钮的显示隐藏处理
        if ($(document).scrollTop() >= 500) {
            $('#toTop').removeClass('hide');
        } else {
            $('#toTop').addClass('hide');
        };
    });

    $('#toTop').click(function() { //滚动到顶部
        scroll(0);
    });
})();

function scroll(top) {
    var speed = 200;
    $('body,html').animate({
        scrollTop: top
    }, speed);
    return false;
}

if (window.location.pathname == '/' || window.location.pathname == '/index.html') { //识别是不是index
    indexFun(0);
} else if (window.location.search != " ") {
    insideFun(window.location.search.substr(2, 1), window.location.search.substr(4, 1), window.location.search.substr(6, 1));
};

function indexFun(yearNum) {
    $('#sideYearNum').html(data[yearNum].year);
    var yearStr = '';
    var monthStr = '';
    var blockStr = '';

    for (var i = 0; i < data.length; i++) {
        if (i == yearNum) {
            continue;
        }
        yearStr += '<a href="javascript:void(0)" yearID="' + i + '">' + data[i].year + '</a>'
    };
    $('#otherYear').html(yearStr);;
    for (var i = 0; i < data[yearNum].data.length; i++) {
        monthStr += '<a href="javascript:void(0)">' + (Array(2).join(0) + data[yearNum].data[i].month).slice(-2) + '月</a>'
    };
    $("#sideMonth").html(monthStr);

    for (var i = 0; i < data[yearNum].data.length; i++) {
        for (var j = 0; j < data[yearNum].data[i].data.length; j++) {
            blockStr += '<div class="block" ';
            if (j == 0) {
                blockStr += 'id="month' + i + '"';
            };
            blockStr += '><div class="side"><div class="day">' + ("0" + data[yearNum].data[i].data[j].day).substr(-2) + '</div><div class="month">' + monthNum2letter[data[yearNum].data[i].month - 1] + '</div></div><div class="content"><a href="inside.html?y' + yearNum + 'm' + i + 'd' + j + '" target="_blank"><img src="' + picDomain + data[yearNum].year + '/' + (data[yearNum].data[i].month < 10 ? '0' + data[yearNum].data[i].month : data[yearNum].data[i].month) + '/' + (data[yearNum].data[i].data.length - j - 1) + '_0.jpg?' + Math.random() + '" alt=""><span class="num">' + data[yearNum].data[i].data[j].data.img + '</span></a><div class="text"><p>' + data[yearNum].data[i].data[j].data.text + '</p></div></div><span class="fold"></span></div>'
        }
    };
    $('#main').html(blockStr);
    scroll(0);
    $('#sideMonth a').click(function() {
        scroll($('#month' + $(this).index()).offset().top - 40);
    });
    $('#otherYear a').click(function() {
        indexFun(parseInt($(this).attr('yearID')));
    });
    $(document).click(function() {
        if ($('#otherYear>a').hasClass('show')) {
            $('#otherYear>a').removeClass('show');
        }
    });
    $('#sideYearBtn').click(function(event) {
        if (!$('#otherYear>a').hasClass('show')) {
            event.stopPropagation();
            $('#otherYear>a').addClass('show');
        }
    });
    $(window).scroll(function() {
        if ($(document).scrollTop() >= 240) {
            $('#side').addClass('fixed');
        } else {
            $('#side').removeClass('fixed');
        };
    });
}

function insideFun(year, month, day) {
    var blockStr = "";
    blockStr += '<div class="block"><div class="side"><div class="day">' + data[year].data[month].data[day].day + '</div><div class="month">' + monthNum2letter[data[year].data[month].month - 1] + '</div><div class="year">' + data[year].year + '</div></div><div class="content"><div class="all-pic">';
    for (var i = 0; i < data[year].data[month].data[day].data.img; i++) {
        blockStr += '<div class="pic"><img src="' + picDomain + data[year].year + '/' + (data[year].data[month].month < 10 ? '0' + data[year].data[month].month : data[year].data[month].month) + '/' + (data[year].data[month].data.length - day - 1) + '_' + i + '.jpg?' + Math.random() + '" alt=""></div>';
    };
    blockStr += '</div><div class="text"><p>' + data[year].data[month].data[day].data.text + '</p></div></div></div>';
    $('#main').html(blockStr);
    document.title=data[year].year+'年'+data[year].data[month].month+'月'+data[year].data[month].data[day].day+'日';
}
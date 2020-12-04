$(document).ready(function() {

    var servNav = $("#serv-nav").offset().top - 80;
    var prodNav = $("#prod-nav").offset().top - 80;
    var sponsor = $("#sponsors").offset().top - 160;

    $(window).scroll(function() {

        var position = $(window).scrollTop();

        $("#serv-nav-fix").css({top: "-100px"});
        $("#prod-nav-fix").css({top: "-100px"});

        if (position >= servNav && position < (prodNav - 160)) {
            $("#serv-nav-fix").css({top: "54px"});
        } else if (position >= prodNav && position < sponsor) {
            $("#prod-nav-fix").css({top: "54px"});
        }

    });

});
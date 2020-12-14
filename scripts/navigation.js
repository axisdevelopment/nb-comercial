$(document).ready(function() {

    var home = $("#home").offset().top - 100;
    var services = $("#services").offset().top - 100;
    var products = $("#products").offset().top - 100;
    var sponsors = $("#sponsors").offset().top - 100;
    var contact = $("#contact").offset().top - 100;

    $(window).scroll(function() {
        var position = $(window).scrollTop();
        showPosition(position);
    });

    function showPosition(y) {

        $("#nav-link-5").removeClass("current-location");
        $("#nav-link-4").removeClass("current-location");
        $("#nav-link-3").removeClass("current-location");
        $("#nav-link-2").removeClass("current-location");
        $("#nav-link-1").removeClass("current-location");

        if (y >= contact) {
            $("#nav-link-5").addClass("current-location");
        } else if (y >= sponsors) {
            $("#nav-link-4").addClass("current-location");
        } else if (y >= products) {
            $("#nav-link-3").addClass("current-location");
        } else if (y >= services) {
            $("#nav-link-2").addClass("current-location");
        } else if (y >= home) {
            $("#nav-link-1").addClass("current-location");
        };
    };

});
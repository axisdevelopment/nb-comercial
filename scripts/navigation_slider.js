$(document).ready(function() {

    var services = ["#service-btn-1", "#service-btn-2", "#service-btn-3"];
    var products = ["#product-btn-1", "#product-btn-2", "#product-btn-3"];

    $("#service-btn-1").click(function() {switchColor("#service-btn-1", services)});
    $("#service-btn-2").click(function() {switchColor("#service-btn-2", services)});
    $("#service-btn-3").click(function() {switchColor("#service-btn-3", services)});
    $("#product-btn-1").click(function() {switchColor("#product-btn-1", products)});
    $("#product-btn-2").click(function() {switchColor("#product-btn-2", products)});
    $("#product-btn-3").click(function() {switchColor("#product-btn-3", products)});

    function switchColor(id, array) {
        array.forEach(divId => {
            if (divId !== id) $(divId).removeClass("art-nav-selected");
            else $(id).addClass("art-nav-selected");
        });
    };

});
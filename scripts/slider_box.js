$(document).ready(function() {

    // INITIAL SETTINGS
    var servicesSet = [
        { id: "#service-1", display: "flex" },
        { id: "#service-2", display: "none" },
        { id: "#service-3", display: "none" },
        { id: "#product-1", display: "flex" },
        { id: "#product-2", display: "none" },
        { id: "#product-3", display: "none" }
    ];

    function initialSettings(array) {
        array.forEach(contents => {
            contents.forEach(settings => {
                $(settings.id).css({display: settings.display});
            });
        });
    };

    initialSettings([servicesSet]);

    // ARRAY OF BOX CONTENTS
    var services = ["#service-1", "#service-2", "#service-3"];
    var products = ["#product-1", "#product-2", "#product-3"];

    // BUTTONS
    $("#service-btn-1").click(function() {switchOpacity("services", "#service-1", services)});
    $("#service-btn-2").click(function() {switchOpacity("services", "#service-2", services)});
    $("#service-btn-3").click(function() {switchOpacity("services", "#service-3", services)});
    $("#product-btn-1").click(function() {switchOpacity("products", "#product-1", products)});
    $("#product-btn-2").click(function() {switchOpacity("products", "#product-2", products)});
    $("#product-btn-3").click(function() {switchOpacity("products", "#product-3", products)});

    // CHANGE OPACITY FUNCTION
    function switchOpacity(box, id, array) {
        $(id).fadeIn("slow");
        array.forEach(item => {
            if (item !== id) $(item).fadeOut("slow");
        });
    };

});
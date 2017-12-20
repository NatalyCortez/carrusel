$(document).ready(loadPage);
var target = 0;

var loadPage = function () {
    //Elementos
    var $buttons = $(".control");
    var $previous = $(".previous");
    var $next = $(".next");

    //Eventos
    $buttons.click(changeImage);
    $previous.click(previousImage);
    $next.click(nextImage);
};

var changeImage = function () {
    target = parseInt($(this).data("target"));
    showImage(target);
};

var previousImage = function (e) {
    e.preventDefault();
    target = target - 1;
    target = (target <0) ? 4 : target ;
    showImage(target);
};

var nextImage = function (e) {
    e.preventDefault();
    target = target + 1;
    target = (target <0) ? 4 : target ;
    showImage(target);
};

var showImage = function (target) {
    var $lastSide = $("div.active");
    var $slide = $("div[data-slide='"+ target + "']");
    $lastSide.removeClass("active");
    $slide.addClass("active");
};
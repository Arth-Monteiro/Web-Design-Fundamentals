(function() {
    var $body = document.body;
    $body.classList.remove("no-js");
    $body.classList.add("js");

    var menu = new Menu({
        container: ".header__nav",
        toggleBtn: ".header__btnMenu",
        widthEnabled: 1024
    })

    var carouselImgs = new Carousel({
        container: ".laptop-slider .slideshow",
        itens: "figure",
        btnPrev: ".prev",
        btnNext: ".next"
    })

    var carouselQuotes = new Carousel({
        container: ".quote-slideshow",
        itens: "figure",
        btnPrev: ".prev",
        btnNext: ".next"
    })


})()
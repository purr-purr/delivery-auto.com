// banners on index.html
$(document).ready(function(){
    $('.slider').slick({
        vertical: true,
        // verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.partners-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1
    });
    $('.awards-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        rows: 2,
        slidesToScroll: 1
    });
});



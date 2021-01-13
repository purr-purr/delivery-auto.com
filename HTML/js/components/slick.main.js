// banners on index.html
$(document).ready(function(){
    $('.main-slider').slick({
        vertical: true,
        verticalSwiping: true,
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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 815,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.awards-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        rows: 2,
        slidesToScroll: 1
    });
    // $('.widget-slider').slick({
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     slidesToShow: 2,
    //     slidesToScroll: 1
    // });
    $('.intro__banner').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.courier-page__banner').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    $('.home-tariff').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        mobileFirst: true, 
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: "unslick"
            }
        ]
    });
});


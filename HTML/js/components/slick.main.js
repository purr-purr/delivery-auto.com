$(document).ready(function(){
    $('.main-slider').slick({
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    vertical: false,
                    verticalSwiping: false
                }
            }
        ]
    });
    $('.partners-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.home-tariff').slick({
        autoplay: true,
        autoplaySpeed: 5000,
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
                breakpoint: 770,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1070,
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
    $('.awards-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        slidesToShow: 4,
        mobileFirst: true,
        slidesPerRow: 1,
        rows: 2,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    slidesPerRow: 1
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 1
                }
            },
            {
                breakpoint: 1065,
                settings: {
                    slidesToShow: 3,
                    slidesPerRow: 1
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                    slidesPerRow: 1
                }
            }
        ]
    });
    $('.intro__banner').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.hot-flights__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        mobileFirst: true, 
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 700,
                settings: "unslick"
            }
        ]
    });
    $('.benefits-program__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        mobileFirst: true, 
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 750,
                settings: "unslick"
            }
        ]
    });
    $('.express-step__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
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
                breakpoint: 460,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 750,
                settings: "unslick"
            }
        ]
    });
    $('.finance-step__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
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
                breakpoint: 380,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: "unslick"
            }
        ]
    });
    $('.about-group__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
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
                breakpoint: 420,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1220,
                settings: "unslick"
            }
        ]
    });
    $('.discount-prog__list').slick({
        autoplay: true,
        autoplaySpeed: 2000,
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
                breakpoint: 750,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1220,
                settings: "unslick"
            }
        ]
    });
    $('.tariff__advantages').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        mobileFirst: true, 
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: "unslick"
            }
        ]
    });
});
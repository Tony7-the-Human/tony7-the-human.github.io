$(document).ready(function() {
    const flowersSlider = new Swiper('.flowers-slider', {
        // Optional parameters

        loop: true,
        slidesPerView: 6,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        /* Adaptive */
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,

            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,

            },


            // when window width is >= 640px
            992: {
                slidesPerView: 6,

            }
        }

    });

    const reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    $("#review-1").on('click', function() {

        $.fancybox.open([{
                src: 'https://i10.fotocdn.net/s123/838f95fe7e9e5f69/gallery_xl/2805057093.jpg',
                opts: {
                    caption: 'First caption',
                    thumb: 'https://source.unsplash.com/IvfoDk30JnI/240x160'
                }
            },
            {
                src: 'https://i1.photo.2gis.com/main/branch/40/70000001032500670/common',
                opts: {
                    caption: 'Second caption',
                    thumb: 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
                }
            }
        ], {
            loop: true,
            thumbs: {
                autoStart: true
            }
        });

    });

    $("#review-2").on('click', function() {

        $.fancybox.open([{
            src: 'https://i1.photo.2gis.com/main/branch/40/70000001032500670/common',
            opts: {
                caption: 'First caption',
                thumb: 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
        }, ], {
            loop: true,
            thumbs: {
                autoStart: true
            }
        });

    });



    $('#show-more').click(function() {
        $('#more').fadeIn();
        $(this).fadeOut("slow");
    });


    $('#spinner')
        .spinner('delay', 200) // delay in ms
        .spinner('changed', function(e, newVal, oldVal) {
            // trigger lazed, depend on delay option.
        })
        .spinner('changing', function(e, newVal, oldVal) {
            // trigger immediately
        });

});
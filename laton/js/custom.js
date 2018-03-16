jQuery(document).ready(function($) {
    "use strict"


    if ($('#sidenav').length) {
        $('#sidenav').onePageNav();
    }


    // ------- Home Slider Main Slider ------- //
    if ($('#sync1').length) {
        var sync1 = $("#sync1");
        var sync2 = $("#sync2");
        var slidesPerPage = 4;
        var syncedSecondary = true;

        sync1.owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: ['', ''],
        }).on('changed.owl.carousel', syncPosition);

        sync2
            .on('initialized.owl.carousel', function() {
                sync2.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items: slidesPerPage,
                dots: false,
                nav: false,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100
            }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);

            if (current < 0) {
                current = count;
            }
            if (current > count)  {
                current = 0;
            }

            sync2
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = sync2.find('.owl-item.active').length - 1;
            var start = sync2.find('.owl-item.active').first().index();
            var end = sync2.find('.owl-item.active').last().index();

            if (current > end) {
                sync2.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                sync2.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }


        sync2.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).index();
            sync1.data('owl.carousel').to(number, 300, true);
        });
    }


    // ------- Alert Button ------- //
    if ($('#alert-btn').length) {
        $('#alert-btn').on("click", function() {
            $('.alerts-list').toggle("slow");
        });
    }


    // ------- Preety Photo ------- //
    if ($('.gallery').length) {
        $("area[data-rel^='prettyPhoto']").prettyPhoto();
        $(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'normal',
            theme: 'light_square',
            slideshow: 3000,
            autoplay_slideshow: false
        });
        $(".gallery:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast',
            slideshow: 10000,
            hideflash: false
        });
    }


    // ------- Beautyfull City ------- //
    if ($('#bs-carousel').length) {
        $('#bs-carousel').owlCarousel({
            loop: true,
            margin: 2,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: false
                }
            }
        })
    }




    // ------- Govt Departments ------- //
    if ($('#govt-loc').length) {
        $('#govt-loc').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        })
    }


    // ------- Govt Departments ------- //
    if ($('#manuments-loc').length) {
        $('#manuments-loc').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        })
    }


    // ------- Govt Departments ------- //
    if ($('#parks-loc').length) {
        $('#parks-loc').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        })
    }


    // ------- Govt Departments ------- //
    if ($('#edu-loc').length) {
        $('#edu-loc').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        })
    }

    // ------- Govt Departments ------- //
    if ($('#food-loc').length) {
        $('#food-loc').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        })
    }


    // ------- Govt Departments ------- //
    if ($('.event-counter').length) {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('.event-counter').countdown({
            until: austDay
        });
        $('#year').text(austDay.getFullYear());
    }


    if ($('#dates').length) {
        $("#dates").simpleCalendar({
            fixedStartDay: false
        });
    }


    // ------- Sticky Sidebar Start ------- //
    if ($('#sidebar').length) {
        $(function() {
            var offset = $("#sidebar").offset();
            var topPadding = 15;
            $(window).on("scroll", function() {
                if ($(window).scrollTop() > offset.top) {
                    $("#sidebar").stop().animate({
                        marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                } else {
                    $("#sidebar").stop().animate({
                        marginTop: 0
                    });
                }

            });
        });
    }
    // ------- Sticky Sidebar End ------- //


    // ------- Home 2 Slider Start ------- //

    $('#home2-slider').owlCarousel({
        margin: 0,
        loop: true,
        items: 1
    })

    // ------- Home 2 Slider End ------- //



    // ------- Home 2 Event Slider ------- //
    $('#event-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        items: 1
    })
    // ------- Home 2 Event End ------- //



    // ------- News Start ------- //

    if ($('#blog').length) {
        $('#blog').owlCarousel({
            margin: 0,
            loop: true,
            items: 1,
            dots: false,
            auto: true,
            nav: true,

        })
    }

    // ------- News End ------- //



    // ------- Google Map Start ------- //

    if ($('#map').length) {
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            var mapOptions = {
                zoom: 15,
                center: new google.maps.LatLng(40.6700, -73.9400), // New York
                styles: [{
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }]
            };

            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Snazzy!'
            });
        }
    }


    // ------- Google Map End ------- //	


    // ------- Header Weather Start ------- //

    if ($('#weather').length) {
        var weather = $("#weather").flatWeatherPlugin({
            location: "Boston, MA", //city and region *required 
            country: "USA", //country *required 
            zmw: "00000.83.71368", //zmw location code *required for wunderground
            api: "yahoo", //default: yahoo (openweathermap, yahoo or wunderground)
            view: "partial", //default: full (partial, full, simple, today or forecast)
            timeformat: "12", //"24" or "12" default: "12"
            displayCityNameOnly: true, //default: false (true/false) if you want to display only city name
            forecast: 4, //default: 5 (0 -5) how many days you want forecast (max 3 for wunderground)
            render: true, //default: true (true/false) if you want plugin to generate markup
            loadingAnimation: true, //default: true (true/false) if you want plugin to show loading animation
            units: "imperial", //"metric" or "imperial" to overide units default: "auto" 
        });
    }

    // ------- Header Weather End ------- //	


    // ------- Filter Gallery Start ------- //

    if ($('.filter-gallery .isotope').length) {
        var $container = $('.filter-gallery .isotope');
        $container.isotope({
            itemSelector: '.item',
            transitionDuration: '0.6s',
            masonry: {
                columnWidth: $container.width() / 12
            },
            layoutMode: 'masonry'
        });
        $(window).on("resize", function() {
            $container.isotope({
                masonry: {
                    columnWidth: $container.width() / 12
                }
            });
        });
        // bind filter button click
        $('.filter-gallery #filters').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('.filter-gallery .button-group').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
        // layout Isotope again after all images have loaded
        $container.imagesLoaded(function() {
            $container.isotope('layout');
        });
    }

    // ------- Filter Gallery End ------- //




}); //End
$(document).ready(function(){
    // =======hero-slider=========
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        navText: ["PREV", "NEXT"],
        responsive:{
            0:{
                nav : false
            },
            768:{
                nav : true
            },
            1000:{
                
            }
        }
    });

    $('#directeurs-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items: 2,
                nav: false,
            },
            768:{
                items: 2,
            },
            1140:{
                items: 3,
            }
        }

    })

  });
  
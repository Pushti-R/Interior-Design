jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius: 15,
        perturbance: 0.01,
      });
      var options = {
        strings: ['<strong> We Love </strong> <strong class = "color"> Designing </strong>', '<strong> And to </strong> <strong class="color"> Share !! </strong'],
        typeSpeed: 70,
        loop: true
      };
      
      var typed = new Typed('.text', options);

    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if (top>=60){
          ($("nav").addClass("bg"));
        }
        else
          if($("nav").hasClass('bg')){
            $("nav").removeClass('bg');
          }
    })
    $('.works').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled : true,
        duration: 3000,
      }
    });
    $("#member").owlCarousel({
      items:3,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true,
        responsive:{
          0: {
            items:1
          },
          480: {
            items:2
          },
          760: {
            items:3
          }}
    });
    $(".counter").counterUp ({
      delay: 10,
      time: 4000
    })
    $('a.smooth-scroll').smoothScroll()
    new WOW().init();
})
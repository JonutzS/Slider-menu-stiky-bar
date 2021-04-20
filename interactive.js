$(document).ready(function(){

  // slide in main menu
    $('.menu-link, .menu-link-sticky').on('click', function() {
      $('.menu-wrapper').show().animate({
        opacity: '1',
        left: '0'
      }, 400);
    });

    // slide out main menu when clicking close button
    $('.close_btn').on('click', function() {
      $('.menu-wrapper').animate({
        opacity: '0',
        left: '-999px'
      }, 400);
      $('.menu_lev1 > li').removeClass('minus');
      $('.menu_lev1 > li').find('a').removeClass('clicked');
      $('.menu_lev1 > li').find('.menu_lev2').hide();
      $('.lev2-background').hide().css(
        "right", "0"
      );
    });

    // slide out main menu when clicking outside of it
    $(document).on('click', function(e) {
      if (($(e.target).closest(".menu-wrapper").length === 0) 
        && ($(e.target).closest(".menu-link").length === 0)
        && ($(e.target).closest(".menu-link-sticky").length === 0)) {
          $(".menu-wrapper").animate({
            opacity: '0',
            left: '-700px'
          }, 400);
        }
    });

    // slide in main level 2 menu
    $('.menu_lev1 > li').on('click', function() {
      $('.menu_lev1 > li').removeClass('minus');
      $('.menu_lev1 > li').find('a').removeClass('clicked');
      $('.menu_lev1 > li').find('.menu_lev2').hide();
      if($(this).find('ul').length !== 0) {
        $(this).find('.menu_lev2').show();
        $(this).find('a').addClass('clicked');
        $(this).addClass('minus');
        $('.lev2-background').show().css(
          "right", "-100%"
        );
      }
    });

    // hide menu 2 when clicking "x" from top right corner
    $('.close_menu2').on('click', function() {
      $('.menu_lev2').hide();
      $('.menu_lev1 > li').removeClass('minus');
      $('.menu_lev1 > li').find('a').removeClass('clicked');
      $('.lev2-background').hide().css(
        "right", "0"
      );
    })

    // make sticky bar visible when scrolling down
    $(window).on('scroll', function(){
      var scrollTop = $(window).scrollTop();
      if($(window).scrollTop() > 0) {
        $('.sticky-bar').addClass('visible');
      } else {
        $('.sticky-bar').removeClass('visible')
      }
    });

    // display contact dropdown from sticky bar 
    if($(window).width() > 1025) {
      $('.contact-link-sticky').on('mouseenter', function() {
        $('.sticky-dropdown').slideDown().css(
          'display', 'flex'
        );
        $('.contact-link-sticky').addClass('active');
      })
  
      $('.contact-link-sticky, .sticky-dropdown').on('mouseleave', function() {
        $('.sticky-dropdown').slideUp();
        $('.contact-link-sticky').removeClass('active');
      })
    } else {
      $('.contact-link-sticky').on('click', function() {
        $('.sticky-dropdown').slideToggle().css(
          'display', 'flex'
        );
        $('.contact-link-sticky').toggleClass('active');
      });

      $(document).on('click', function(e) {
        if($('.contact-link-sticky').hasClass('active')) {
          if (($(e.target).closest(".contact-link-sticky").length === 0) 
            && ($(e.target).closest(".sticky-dropdown").length === 0)) {
              $('.sticky-dropdown').slideUp();
              $('.contact-link-sticky').removeClass('active');
            };
        };
      });
    };
   

    // updating progress circle 
      var $w = $(window);
      var $circ = $('.animated-circle');
      var wh = $w.height();
      var h = $('body').height();
      var sHeight = h - wh;
      $w.on('scroll', function() {
          var perc = Math.max(0, Math.min(1, $w.scrollTop() / sHeight));
          updateProgress(perc);

      });
      function updateProgress(perc) {
        var circle_offset = 126 * perc;
        $circ.css({
            "stroke-dashoffset" : 126 - circle_offset
        });
    }

  });
// toggle mobile nav function
$(document).ready(function() {
  $('.nav-toggle').on('click',function() {

    if($('.burger-target').hasClass('clicked')){
      $('.burger-target').removeClass('clicked');
      $('.dropdown-menu').slideUp();
    }
    else{
      $('.burger-target').addClass('clicked');
      $('.dropdown-menu').slideDown();
    }
  });
});

// close mobile dropdown menu on click function
$(function() {
    $('.navbar-container a').on('click', function(){ 
        if($('.dropdown-menu').css('display') !='none'){
            $('.nav-toggle').trigger( "click" );
        }
    });
});

// navbar scroll to section function
var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 250
    }, 500);

    return false;
});

// scroll to top function
$(function () {
  var viewPortWidth = $(window).width();

  $(window).scroll(function (event) {
      event.preventDefault();
      if (viewPortWidth > 180) {
          if ($(this).scrollTop() > 180) {
              $('.scroll-top').fadeIn();
          } else {
              $('.scroll-top').fadeOut();
          }
      }
  });

  $('.scroll-top').click(function (event) {
      $('html, body').animate({
          scrollTop: 0
      }, 600);
      event.preventDefault();
  });
});
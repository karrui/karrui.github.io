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


var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});

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
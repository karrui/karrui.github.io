/* eslint-disable */

// toggle mobile nav function
$(document).ready(function () {
  if (typeof localStorage.nightmode === "undefined") {
    var hours = new Date().getHours();
    var dayMode = hours > 8 && h < 20;

    if (dayMode) {
      $('#cb1').prop('checked', false);
      $('body').removeClass('night-mode');
      $('body').addClass('day-mode');
      $('.tools i').addClass('colored');
    } else {
      $('#cb1').prop('checked', true);
      $('body').removeClass('day-mode');
      $('body').addClass('night-mode');
      $('.tools i').removeClass('colored');
    }
    localStorage.nightmode = $('#cb1').prop('checked'); 
  } else {
    //set theme according to stored value;
    if (localStorage.nightmode) {
      $('#cb1').prop('checked', true);
      $('body').removeClass('day-mode');
      $('body').addClass('night-mode');
      $('.tools i').removeClass('colored');
      localStorage.nightmode = $('#cb1').prop('checked'); 
    } else {
      $('#cb1').prop('checked', false);
      $('body').removeClass('night-mode');
      $('body').addClass('day-mode');
      $('.tools i').addClass('colored');
      localStorage.nightmode = $('#cb1').prop('checked'); 
    }
  }

  $('.nav-toggle').on('click', function () {

    if ($('.burger-target').hasClass('clicked')) {
      $('.burger-target').removeClass('clicked');
      $('.dropdown-menu').slideUp();
    }
    else {
      $('.burger-target').addClass('clicked');
      $('.dropdown-menu').slideDown();
    }
  });
});

$('#cb1').on('change', function () {
  if (this.checked) {
    $('body').removeClass('day-mode');
    $('body').addClass('night-mode');
    $('.tools i').removeClass('colored');
  } else {
    $('body').removeClass('night-mode');
    $('body').addClass('day-mode');
    $('.tools i').addClass('colored');
  }
  localStorage.nightmode = this.checked;
});


// close mobile dropdown menu on click function
$(function () {
  $('.navbar-container a').on('click', function () {
    if ($('.dropdown-menu').css('display') != 'none') {
      $('.nav-toggle').trigger("click");
    }
  });
});

// navbar scroll to section function
var $root = $('html, body');

$('a[href^="#"]').click(function () {
  var windowWidth = $(window).width();
  if (windowWidth < 628) {
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 250
    }, 500);
    return false;
  } else {
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  }
});

// scroll to top function
$(function () {
  var viewPortWidth = $(window).width();
  $(window).scroll(function (event) {
    event.preventDefault();
    if (viewPortWidth > 180) {
      if ($(this).scrollTop() > 180) {
        $('#go-to-header').fadeIn();
      } else {
        $('#go-to-header').fadeOut();
      }
    }
  });

  $('#go-to-header').click(function (event) {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    event.preventDefault();
  });
});

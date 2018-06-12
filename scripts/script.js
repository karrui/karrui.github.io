/* eslint-disable */
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


$('#light').on('change', function () {
  if (this.checked) {
    $('body').removeClass('day-mode');
    $('body').addClass('night-mode');
    $('.tools i').removeClass('colored');
    $('.moon-icon').removeClass('off');
    $('.sun-icon').addClass('off');
  } else {
    $('body').removeClass('night-mode');
    $('body').addClass('day-mode');
    $('.tools i').addClass('colored');
    $('.sun-icon').removeClass('off');
    $('.moon-icon').addClass('off');
  }
  localStorage.nightmode = this.checked;
});


// close mobile dropdown menu on click function
$(function () {
  $('header a').on('click', function () {
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
      scrollTop: $($.attr(this, 'href')).offset().top - 230
    }, 500);
    return false;
  } else {
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 30
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

$(document).ready(function () {
  if (typeof localStorage.nightmode === "undefined") {
    var hours = new Date().getHours();
    var dayMode = hours > 8 && hours < 20;

    if (dayMode) {
      $('#light').prop('checked', false);
      $('body').removeClass('night-mode');
      $('body').addClass('day-mode');
      $('.tools i').addClass('colored');
      $('.sun-icon').removeClass('off');
      $('.moon-icon').addClass('off');
    } else {
      $('#light').prop('checked', true);
      $('body').removeClass('day-mode');
      $('body').addClass('night-mode');
      $('.tools i').removeClass('colored');
      $('.moon-icon').removeClass('off');
      $('.sun-icon').addClass('off');
    }
  } else {
    //set theme according to stored value;
    if (localStorage.nightmode == "true") {
      $('#light').prop('checked', true);
      $('body').removeClass('day-mode');
      $('body').addClass('night-mode');
      $('.tools i').removeClass('colored');
      $('.moon-icon').removeClass('off');
      $('.sun-icon').addClass('off');
    } else {
      $('#light').prop('checked', false);
      $('body').removeClass('night-mode');
      $('body').addClass('day-mode');
      $('.tools i').addClass('colored');
      $('.sun-icon').removeClass('off');
      $('.moon-icon').addClass('off');
    }

    localStorage.nightmode = $('#light').prop('checked'); 
  }
});

var DOMTokenListSupports = function(tokenList, token) {
  if (!tokenList || !tokenList.supports) {
    return;
  }
  try {
    return tokenList.supports(token);
  } catch (e) {
    if (e instanceof TypeError) {
      console.log("The DOMTokenList doesn't have a supported tokens list");
    } else {
      console.error("That shouldn't have happened");
    }
  }
};

// check for preload compatibility!
var linkSupportsPreload = DOMTokenListSupports(document.createElement("link").relList, "preload"); 
if (!linkSupportsPreload) {
  $('head').append('<link rel="stylesheet" type="text/css" href="./styles/non-critical.css">');
  $('head').append('<link rel="stylesheet" type="text/css" href="./styles/devicon-reduced.min.css">');
  $('head').append('<link rel="stylesheet" type="text/css" href="./styles/devicon-colors.css">');
};

// Intro text fade
$(window).scroll(function(){
  $(".intro").css("opacity", 1 - ($(window).scrollTop() - 200) / 600);
});


// Contact form scripts
$('.question').each(function(){
    $(this).on('blur', function(){
        if($(this).val().trim() != "") {
            $(this).addClass('has-val');
        }
        else {
            $(this).removeClass('has-val');
        }
    })    
})

// Contact form validation
var name = $('.validate-input input[name="name"]');
var email = $('.validate-input input[name="email"]');
var message = $('.validate-input textarea[name="message"]');


$('.contact-form').on('submit',function(){
    var check = true;

    if($(name).val().trim() == ''){
        showValidate(name);
        check=false;
    }


    if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        showValidate(email);
        check=false;
    }

    if($(message).val().trim() == ''){
        showValidate(message);
        check=false;
    }

    return check;
});


$('.contact-form .question').each(function(){
    $(this).focus(function(){
        hideValidate(this);
    });
});

function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
}

function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
}
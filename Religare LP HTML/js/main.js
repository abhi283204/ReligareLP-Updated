// Show & Hide Javascript

//smart search

$('.smart-search').show();

//When the Image is hovered upon, show the hidden div using Mouseover

$('#smart-search').mouseover(function() {

$('.smart-search').show();

});

 

//When the Image is hovered away from, hide the div using Mouseout

$('#smart-search').mouseout(function() {

$('.smart-search').show();

});

 

//fund transfer

$('.fund-transfer').hide();

//When the Image is hovered upon, show the hidden div using Mouseover

$('#fund-transfer').mouseover(function() {

$('.fund-transfer').show();

});

 

//When the Image is hovered away from, hide the div using Mouseout

$('#fund-transfer').mouseout(function() {

$('.fund-transfer').hide();

});

 

//Set Alert

$('.set-alert').hide();

//When the Image is hovered upon, show the hidden div using Mouseover

$('#set-alert').mouseover(function() {

$('.set-alert').show();

});

 

//When the Image is hovered away from, hide the div using Mouseout

$('#set-alert').mouseout(function() {

$('.set-alert').hide();

});

 

//notifications

$('.notifications').hide();

//When the Image is hovered upon, show the hidden div using Mouseover

$('#notifications').mouseover(function() {

$('.notifications').show();

});

 

//When the Image is hovered away from, hide the div using Mouseout

$('#notifications').mouseout(function() {

$('.notifications').hide();

});

 

//Stock Holding

$('.stock-holding').hide();

//When the Image is hovered upon, show the hidden div using Mouseover

$('#stock-holding').mouseover(function() {

$('.stock-holding').show();

});

 

//When the Image is hovered away from, hide the div using Mouseout

$('#stock-holding').mouseout(function() {

$('.stock-holding').hide();

});

 

//Reports

$('.reports').hide();

//When the Image is hovered upon, show the hidden div using Mouseover

$('#reports').mouseover(function() {

$('.reports').show();

});

 

//When the Image is hovered away from, hide the div using Mouseout

$('#reports').mouseout(function() {

$('.reports').hide();

});

 

 

 

$(function() {

  $('a[href*=#]:not([href=#])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {

        $('html,body').animate({

          scrollTop: target.offset().top

        }, 1000);

        return false;

      }

    }

  });

});

 

// Select all links with hashes

$('a[href*="#"]')

  // Remove links that don't actually link to anything

  .not('[href="#"]')

  .not('[href="#0"]')

  .click(function(event) {

    // On-page links

    if (

      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')

      &&

      location.hostname == this.hostname

    ) {

      // Figure out element to scroll to

      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      // Does a scroll target exist?

      if (target.length) {

        // Only prevent default if animation is actually gonna happen

        event.preventDefault();

        $('html, body').animate({

          scrollTop: target.offset().top

        }, 1000, function() {

          // Callback after animation

          // Must change focus!

          var $target = $(target);

          $target.focus();

          if ($target.is(":focus")) { // Checking if the target was focused

            return false;

          } else {

            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable

            $target.focus(); // Set focus again

          };

        });

      }

    }

  });

 

//Scroll the Page JavaScript

 

// Active Navigation Fuction JavaScript

 

$(function() {                       //run when the DOM is ready

  $(".nav-item:nth-child(1)").click(function() {  //use a class, since your ID gets mangled

    $(this).addClass("active1");

    $('.nav-item:nth-child(2)').removeClass("active2");

    $('.nav-item:nth-child(3)').removeClass("active3");

    $('.nav-item:nth-child(4)').removeClass("active4");

    $('.nav-item:nth-child(5)').removeClass("active5");

  });

});

$(function() {                       //run when the DOM is ready

  $(".nav-item:nth-child(2)").click(function() {  //use a class, since your ID gets mangled

    $(this).addClass("active2");

    $('.nav-item:nth-child(1)').removeClass("active1");

    $('.nav-item:nth-child(3)').removeClass("active3");

    $('.nav-item:nth-child(4)').removeClass("active4");

    $('.nav-item:nth-child(5)').removeClass("active5");

  });

});

$(function() {                       //run when the DOM is ready

  $(".nav-item:nth-child(3)").click(function() {  //use a class, since your ID gets mangled

    $(this).addClass("active3");

    $('.nav-item:nth-child(1)').removeClass("active1");

    $('.nav-item:nth-child(2)').removeClass("active2");

    $('.nav-item:nth-child(4)').removeClass("active4");

    $('.nav-item:nth-child(5)').removeClass("active5");

  });

});

$(function() {                       //run when the DOM is ready

  $(".nav-item:nth-child(4)").click(function() {  //use a class, since your ID gets mangled

    $(this).addClass("active4");

    $('.nav-item:nth-child(1)').removeClass("active1");

    $('.nav-item:nth-child(2)').removeClass("active2");

    $('.nav-item:nth-child(3)').removeClass("active3");

    $('.nav-item:nth-child(5)').removeClass("active5");

  });

});

$(function() {                       //run when the DOM is ready

  $(".nav-item:nth-child(5)").click(function() {  //use a class, since your ID gets mangled

    $(this).addClass("active5");

    $('.nav-item:nth-child(1)').removeClass("active1");

    $('.nav-item:nth-child(2)').removeClass("active2");

    $('.nav-item:nth-child(3)').removeClass("active3");

    $('.nav-item:nth-child(4)').removeClass("active4");

  });

});

$(function() {                       //run when the DOM is ready

  $(".nav-item:nth-child(6)").click(function() {  //use a class, since your ID gets mangled

    $(this).addClass("active6");      //add the class to the clicked element

  });

});

 

 

// ===== Scroll to Top ====

$(window).scroll(function() {

    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px

        $('#return-to-top').fadeIn(200);    // Fade in the arrow

    } else {

        $('#return-to-top').fadeOut(200);   // Else fade out the arrow

    }

});

$('#return-to-top').click(function() {      // When arrow is clicked

    $('body,html').animate({

        scrollTop : 0                       // Scroll to top of body

    }, 500);

});
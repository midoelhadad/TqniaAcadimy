// Taps menu

$('.gallery-taps .awesome-project .awesome-menu .cog').on('click', function() {

    $(this).parent().toggleClass("is-visible");

    if ($(this).parent('.gallery-taps .awesome-project .awesome-menu ').hasClass('is-visible')) {

        $(this).parent('.gallery-taps .awesome-project .awesome-menu ').css('right', '0 ');

    } else {

        $(this).parent('.gallery-taps .awesome-project .awesome-menu').css('right', '-150px');
    }
});


'use strict';
$(window).scroll(function () {
    
    var navbar = $('.navbar');
    if ($(window).scrollTop() >= navbar.height()) {
        
        navbar.addClass('scrolled');
    } else {
        navbar.removeClass('scrolled');
    }
    
});

  
/* global $, window */
$(function () {
    'use strict';
    
    
    // Firing (triggering) Nicescroll library
    $("body").niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
    });
    
    // Adjusting Header height to be as the window's height
    $('.header').height($(window).height());
    $(window).resize(function () {
        $('.header').height($(window).height());
    });
   
    
    // Scrolling to Features from the Arrow
    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 2000, "swing");
    });
    
    $('.hire').click(function () {
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        }, 2000, "swing");
    });
    
    
    // Showing hidden items in Our Work section
    $('.show-more').click(function () {
        $('.our-work .hidden').fadeIn(2000);
    });
    
    // Slider: Hiding arrows (checking) if it's the first or last client div
    var leftArrow  = $('.testimonials .fa-chevron-left'),
        rightArrow = $('.testimonials .fa-chevron-right');
    
    function checkingClients() {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut(1000) : leftArrow.fadeIn(1000);
        $('.client:last').hasClass('active') ? rightArrow.fadeOut(1000) : rightArrow.fadeIn(1000);
    }
    checkingClients();
    
    // Running the slider
    $('.testimonials i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testimonials .active').fadeOut(1000, function () {
                $(this).removeClass('active').next('.client').addClass('active').removeClass('hidden').fadeIn(2000);
                checkingClients();
            });
        } else {
            $('.testimonials .active').fadeOut(1000, function () {
                $(this).removeClass('active').prev('.client').addClass('active').removeClass('hidden').fadeIn(2000);
                checkingClients();
            });
        }
    });
    
    
});
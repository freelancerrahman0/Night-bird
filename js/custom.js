$(function () {
    'use strict';
    //------------------------------------;

    //    parallax js starts;

    //    for banner parallax
    $('.banner-bg').parallax({
        imageSrc: 'images/banner-bg.jpg',
        imageSrc: 'images/gallery-bg.jpg',
        imageSrc: 'images/event-bg.jpg',
        imageSrc: 'images/testimonials-bg.jpg',
        imageSrc: 'images/contact-bg.jpg',
    });

    //    parellax js ends
    //---------------------------------------;


    //    slick js starts;


    //    for banner text slick
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });

    //    for dj slick;
    $('.all-dj').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        centerPadding: '0',
        prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',

    });

    //    for the blog slick;
    $('.blog-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    });

    //    for the testimonilas slick;
    $('.tesi-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    });

    //    for countDownDate related;

    $('.event-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.event-text-slider'
    });
    $('.event-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.event-img-slider',
        prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    });


    //    slick js ends;


    //-----------------------------------------------;    


    //    venobox js starts

    //    for gallery venobox

    $('.venobox').venobox({
        spinner: 'cube-grid',
    });

    //    venobox js ends
    //-----------------------------------------------------;


    //    coundown js starts
    //    get element from html;
    var days = document.getElementById('days');
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');


    var days1 = document.getElementById('days1');
    var hours1 = document.getElementById('hours1');
    var minutes1 = document.getElementById('minutes1');
    var seconds1 = document.getElementById('seconds1');

    //    get event time now;
    var countDownDate = new Date("Oct 26, 2021 18:00:00").getTime();


    //    timer and create a function;

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var d = Math.floor(distance / (1000 * 60 * 60 * 24));
        var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((distance % (1000 * 60)) / 1000);

        //        print into html;

        days.innerHTML = d < 10 ? '0' + d : d;
        hours.innerHTML = h < 10 ? '0' + h : h;
        minutes.innerHTML = m < 10 ? '0' + m : m;
        seconds.innerHTML = s < 10 ? '0' + s : s;


        days1.innerHTML = d < 10 ? '0' + d : d;
        hours1.innerHTML = h < 10 ? '0' + h : h;
        minutes1.innerHTML = m < 10 ? '0' + m : m;
        seconds1.innerHTML = s < 10 ? '0' + s : s;
    }, 1000);

    //    countDownDate js ends here;

    //----------------------------------------------------------;

    //    back-to-top js starts here;
    var menuBg = $('.menu-bg');
    var btt = $('.btt');
    var html_body = $('html, body');

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            btt.slideDown();
        } else {
            btt.slideUp();
        }
        if (scrolling > 300) {
            menuBg.addClass('stiky');
        } else {
            menuBg.removeClass('stiky');
        }
    });

    btt.on('click', function () {
        html_body.animate({
            scrollTop: 0,
        }, 2000);
    });

    //animation scroll js
    $('.menu-bg a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });







    //    back-to-top js ends here;
});
$(document).ready(function() {

    /*top menu toggle*/
    $('.hambu').click(function(){
        $('.header-menu, .header').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#nav-icon4').toggleClass('open');
    });
    $('.menu').click(function () {
        $('.header-menu, .header').removeClass('vis');
        $('body').removeClass('oh');
        $('#nav-icon4').removeClass('open');
    });

    /*end top menu toggle*/

    /*scroll to top*/
    var scrollTop = $(".scroll-top");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 700) {
            $(scrollTop).addClass('vis');
        } else {
            $(scrollTop).removeClass('vis');
        }
    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /*end scroll to top*/



     function scrollEvent() {
         var hT = $('.vote').offset().top,
           hH = $('.vote').outerHeight(),
           wH = $(window).height(),
           wS = $(this).scrollTop();
         if (wS > (hT+hH-wH)){
             $('.vote__like div').each(function () {
                 $(this).prop('Counter',0).animate({
                     Counter: $(this).text()
                 }, {
                     duration: 2000,
                     easing: 'swing',
                     step: function (now) {
                         $(this).text(Math.ceil(now));
                     }
                 });
             });
           window.removeEventListener("scroll", scrollEvent);
         }
     }
     window.addEventListener("scroll", scrollEvent);

    $('#slick_1').slick({
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        asNavFor: '#slick_2',
        swipe: false,
        autoplaySpeed: 800,
    });
    $('#slick_2').slick({
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        asNavFor: '#slick_1',
        swipe: false,
        autoplaySpeed: 800
    });



});
$('.header-nav__link').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top + 10
    }, 1500, 'easeInOutExpo');
    remove_hash_from_url();
    $('.header-menu, .header').removeClass('vis');
    $('body').removeClass('oh');
    $('#nav-icon4').removeClass('open');
    event.preventDefault();
    //remove_hash_from_url();
});
function remove_hash_from_url() {
    var uri = window.location.toString();

    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0,
            uri.indexOf("#"));

        window.history.replaceState({},
            document.title, clean_uri);
    }
}
$( window ).on( "load", function() {

    new WOW().init();

});







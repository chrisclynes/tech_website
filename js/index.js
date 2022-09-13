$(document).ready(function(){
    let windowWidth = $(window).width();
    //set window width 
    $(window).on('resize', function() {    
        windowWidth = $(window).width();
    })
    //nav menu btn
    $('#navbar-menu-btn').click(function(){
        $('.navbar-collapse').slideToggle(250);
    });
    //window scrolling
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        const trans = 200;
        if(position > 100 && windowWidth >= 1024){
            $('.navbar-right-side-content, .navbar-left-side-content').hide(trans);
            $('.logo-link').hide(trans);
        }else if (windowWidth >= 1024) {
            $('.navbar-right-side-content, .navbar-left-side-content').show(trans);
            $('.logo-link').show(trans);
        }else return
    });
    //Testimonial Carousel
    $('.testimonials-section .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });
    //Scroll to Top
    $('.scroll-top-btn').click(function(){
        $('html, body').animate({scrollTop : 0}, 0);
    });
    $(window).on("scroll", function() {
        const trans = 200;
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if (scrollPosition >= scrollHeight / 2) {
            $('.scroll-top-btn').slideDown(trans);
        }else {
            $('.scroll-top-btn').slideUp(trans);
        }
    });
});


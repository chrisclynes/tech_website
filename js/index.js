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
});


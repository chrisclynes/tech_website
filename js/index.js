$(document).ready(function(){
    //nav menu btn
    $('#navbar-menu-btn').click(function(){
        $('.navbar-collapse').slideToggle(250);
    });

    $(window).scroll(function(){
        let position = $(window).scrollTop();
        const trans = 200;
        if(position > 100){
            $('.navbar-right-side-content, .navbar-left-side-content').hide(trans);
            $('.logo-link').hide(trans);
        }else {
            $('.navbar-right-side-content, .navbar-left-side-content').show(trans);
            $('.logo-link').show(trans);
        }
    });
});


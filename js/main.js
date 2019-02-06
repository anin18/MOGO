$(document).ready(function(){
    //HEADER ANIMATION
    function animateHeader() {
        
        var scrollTop = $(window).scrollTop();
        if(scrollTop  > 50) {
            $('header').addClass('header-active py-1 py-lg-2');
        } else {
             $('header').removeClass('header-active py-1  py-lg-2');
        }   
    }
    animateHeader();
    $(window).scroll(function(){
        animateHeader();
    });
    
    
    //EASY SCROLL
    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

//COUNTER UP 
 $('.counter').counterUp({
                delay: 10,
                time: 800
            });
    
});

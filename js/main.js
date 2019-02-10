$(document).ready(function () {
    //ANIMATIONS
    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                var delay = $(this).attr('data-delay');
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);

            }
        });
    }
    //HEADER ANIMATION
    function animateHeader() {

        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
            $('header').addClass('header-active py-1 py-lg-2');
        } else {
            $('header').removeClass('header-active py-1  py-lg-2');
        }
    }
    animation();
    animateHeader();
    $(window).scroll(function () {
        animation();
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


     //OWL CAROUSEL
    if ($('.owl-carousel').length > 0) {
        $('.joshua-slider').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            slideBy: 2
        });
        $('.speech-slider').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            slideBy: 2
        });
    }

    //search-form
    $('.search-icon').click(function () {
        $(this).next('.search-form').toggleClass('active');
        $('.overlay').hide(0);
    });
    //shopping cart
    $('.small-cart-icon').click(function(){
        $(this).next().addClass('active');
        $('.overlay').show(0);
        $('.search-form').slideUp();
        
    });
    $('.fa-close').click(function(e){
        e.preventDefault();
        $(this).parent().removeClass('active');
         $('.overlay').hide(0);
    });

    //product counter

    $('.q-minus').click(function (e) {
        e.preventDefault();
        var quantity = $(this).parent().next().val();
        if (!isNaN(quantity)) {
            quantity = parseFloat(quantity);
            if (quantity > 1) {
                quantity--;
                $(this).parent().next().val(quantity);
            }
        } else {
            $(this).parent().next().val(1);
        }

    });
    $('.q-plus').click(function(e){
        e.preventDefault();
        var quantity = $(this).parent().prev().val();
        
        if(!isNaN(quantity)) {
            quantity = parseFloat(quantity);
            quantity++;
            $(this).parent().prev().val(quantity);
        } else {
            $(this).parent().prev().val(1);
        }
    });
});

  
 

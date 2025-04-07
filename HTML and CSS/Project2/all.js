$(document).ready(function () {
    
    $(".up").click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.down').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 1000);
    });

    $('.cencel').click(function (e) { 
        e.preventDefault();
        $('.ad').slideUp();
    });

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        speed:3000,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        effect: 'slide',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    $('.picture .text').click(function (e) { 
        e.preventDefault();
        $('.picture .text p').toggleClass('animate__animated animate__flash');
    });
    $('.picture .badge .html5').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('animate__animated animate__flip');
    });
    $('.picture .badge .css3').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('animate__animated animate__flip');
    });
    $('.ad .adTitle').click(function (e) { 
        e.preventDefault();
        $('.ad').toggleClass('animate__animated animate__hinge');
    });

    $('.adTitle').click(function (e) { 
        e.preventDefault();
        $('.message').addClass('show');
        
    });

    $('.message .fa-xmark').click(function (e) { 
        e.preventDefault();
        $('.message').remove();
    });

    $('.header .menu .product').click(function (e) { 
        e.preventDefault();
        $('.list').toggleClass('add');
        $(this).toggleClass('active');
        
    });

});
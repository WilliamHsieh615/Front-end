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

    // $('.adTitle').click(function (e) { 
    //     e.preventDefault();
    //     $('.message').addClass('show');
    // });

    $('.adTitle').click(function (e) {
        e.preventDefault();
        $(".message .one, .message .two, .message .three, .message .fa-xmark").hide();
        $('.message').addClass('show');
        $(".message .one")
        .text("Sorry...您錯過優惠了...")
        .delay(2000).slideDown();
        $(".message .two")
        .text("下次請早")
        .delay(3000).slideDown();
        $(".message .three")
        .text("請原價購買")
        .delay(4000).slideDown();
        $(".fa-solid.fa-xmark")
        .delay(5000).slideDown();
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
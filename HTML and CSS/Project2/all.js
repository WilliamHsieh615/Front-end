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

    function slideText(className, text, delay) {
        $(className).hide().text(text).delay(delay).slideDown();
      }
      
      $('.ad .adTitle').click(function (e) {
        e.preventDefault();
        $('.ad').toggleClass('animate__animated animate__hinge');
        $(".message .one, .message .two, .message .three, .message .fa-xmark").hide();
        $('.message').addClass('show');
        slideText(".message .one", "Sorry...您錯過優惠了...", 2000);
        slideText(".message .two", "下次請早", 3000);
        slideText(".message .three", "請原價購買", 4000);
        $(".fa-solid.fa-xmark").delay(5000).slideDown();
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
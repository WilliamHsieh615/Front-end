$(document).ready(function () {
    const current = window.location.pathname.split("/").pop();
    $(".link_JS").each(function () {
        const href = $(this).attr("href");
        if (href === current || href === "") {
            $(this).addClass("active");
        }
    });
});


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        prevEl: ".leftArrow_JS",
        nextEl: ".rightArrow_JS",
    },

    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
        pauseOnMouseEnter: true 
    },

    mousewheel: true,

    breakpoints: {
        800: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});



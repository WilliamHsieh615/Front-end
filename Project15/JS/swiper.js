const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },

    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
        pauseOnMouseEnter: true 
    },

    mousewheel: true,

    breakpoints: {
        550: {
            slidesPerView: 2,
        },
        850: {
            slidesPerView: 3,
        },
    },
});


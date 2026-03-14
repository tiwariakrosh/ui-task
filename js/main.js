new Swiper(".hero-swiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    innerWidth: 200,
    spaceBetween: 24,
    grabCursor: true,
    initialSlide: 0,
    breakpoints: {
        640: { spaceBetween: 32 },
        1024: { spaceBetween: 48 },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});
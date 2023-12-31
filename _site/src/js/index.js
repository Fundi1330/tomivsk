const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 100,

    grabCursor: true,

    effect: 'coverflow',
    coverflowEffect: {
        // ...
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
import Hotjar from '@hotjar/browser';

const siteId = 3918178;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false
    }
}); 
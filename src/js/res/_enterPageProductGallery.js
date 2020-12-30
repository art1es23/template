import gsap from 'gsap';

const enterPageProductGallery = (container) => {

    const header = container.querySelector('.header');
    const sliderProduct = container.querySelector('.slider');
    const slideShopItems = container.querySelectorAll('.slide-shop__item');
    const footer = container.querySelector('.footer');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
        },
    });

    tl
        .to(container, {opacity: 1})
        .fromTo(header, {opacity: 0, yPercent: -100}, {opacity: 1, yPercent: 0})
        .fromTo(sliderProduct, {opacity: 0, scale: 0}, {opacity: 1, scale: 1})
        .fromTo(slideShopItems, {opacity: 0, yPercent: 5}, {opacity: 1, yPercent: 0, stagger: 0.2})
        .fromTo(footer, {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0})

    return tl;
};

export default enterPageProductGallery;


import gsap from 'gsap';

const enterPageShop = (container) => {

    const header = container.querySelector('.header');
    const title = container.querySelector('.shop__title');
    const locationDescription = container.querySelectorAll('.shop-location');
    const location = container.querySelector('.map--wrapper');
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
        .fromTo(title, {opacity: 0, yPercent: -100}, {opacity: 1, yPercent: 0})
        .fromTo(locationDescription, {opacity: 0, scale: 0.85}, {opacity: 1, scale: 1})
        .fromTo(location, {opacity: 0, xPercent: 100}, {opacity: 1, xPercent: 0})
        .fromTo(footer, {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0})

    return tl;
};

export default enterPageShop;


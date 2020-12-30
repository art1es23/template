import gsap from 'gsap';

const enterPageHome = (container) => {

    const header = container.querySelector('.header');
    const slider = container.querySelector('.slider');

    const outTurn = container.querySelector('.out-turn');
    const hero = container.querySelector('.hero');
    const newProductCaption = container.querySelector('.new-product__caption');
    const newProductWrapper = container.querySelector('.new-product--wrapper');
    const brands = container.querySelector('.brands');
    const health = container.querySelector('.health');
    const about = container.querySelector('.about');
    const aboutWrapper = container.querySelector('.about--wrapper');
    const popularProducts = container.querySelector('.popular-products');
    const popularProductsItems = container.querySelectorAll('.popular-products__item');

    const footer = container.querySelector('.footer');


    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
            delay: 0
        },
    });

    tl
        .fromTo(container, {xPercent: -25, opacity: 0}, {xPercent: 0, opacity: 1})
        .fromTo(header, {yPercent: -100}, {yPercent: 0})
        .fromTo(slider, {opacity: 0}, {opacity: 1})
        .fromTo(outTurn, {xPercent: -100}, {xPercent: 0})
        .fromTo(hero, {xPercent: 100, opacity: 0}, {xPercent: 0, opacity: 1})
        .fromTo(newProductCaption, {yPercent: -100, opacity: 0}, {yPercent: 0, opacity: 1})
        .fromTo(newProductWrapper, {scale: 0, opacity: 0}, {scale: 1, opacity: 1})
        .fromTo(brands, {xPercent: 100, opacity: 0}, {xPercent: 0, opacity: 1})
        .fromTo(health, {scale: 0.75, opacity: 0}, {scale: 1, opacity: 1})
        .fromTo(popularProducts, {yPercent: -100, opacity: 0}, {yPercent: 0, opacity: 1})
        .fromTo(popularProductsItems, {scale: 0.5, opacity: 0}, {scale: 1, opacity: 1, stagger: 0.1})
        .fromTo(about, {xPercent: -100, opacity: 0}, {xPercent: 0, opacity: 1})
        .fromTo(aboutWrapper, {scale: 0, opacity: 0}, {scale: 1, opacity: 1})
        .fromTo(footer, {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1, delay: -0.5})

    return tl;
};

export default enterPageHome;


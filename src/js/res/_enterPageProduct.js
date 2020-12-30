import gsap from 'gsap';

const enterPageProduct = (container) => {

    const header = container.querySelector('.header');
    const title = container.querySelector('.prod__title');
    const sliderProduct = container.querySelector('.slider');
    const productDescription = container.querySelector('.prod__item');
    const modal = container.querySelector('.modal');
    const footer = container.querySelector('.footer');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
        },
    });

    tl
        .to(container, {opacity: 1})
        .set(modal, {opacity: 0, xPercent: 100})
        .fromTo(header, {opacity: 0, yPercent: -100}, {opacity: 1, yPercent: 0})
        .fromTo(sliderProduct, {opacity: 0, xPercent: -50}, {opacity: 1, xPercent: 0})
        .fromTo(productDescription, {opacity: 0, xPercent: 100}, {opacity: 1, xPercent: 0})
        .fromTo(title, {opacity: 0, yPercent: -100}, {opacity: 1, yPercent: 0})
        .fromTo(footer, {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0})

    return tl;
};

export default enterPageProduct;


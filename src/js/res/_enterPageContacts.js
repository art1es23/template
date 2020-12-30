import gsap from 'gsap';

const enterPageProduct = (container) => {

    const header = container.querySelector('.header');
    const sliderProduct = container.querySelector('.slider');
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
        .fromTo(sliderProduct, {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0})
        .fromTo(productDescription, {opacity: 0, xPercent: 100}, {opacity: 1, xPercent: 0})
        .fromTo(footer, {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0})

    return tl;
};

export default enterPageProduct;


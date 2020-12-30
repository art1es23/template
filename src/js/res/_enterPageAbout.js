import gsap from 'gsap';

const enterPageAbout = (container) => {

    const header = container.querySelector('.header');
    const title = container.querySelector('.about-us__title')
    const box = container.querySelector('.about-us--wrapper');
    const description = container.querySelector('.about-us__description');
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
        .fromTo(box, {opacity: 0, scale: 0.75}, {opacity: 1, scale: 1})
        .fromTo(description, {opacity: 0, xPercent: 100}, {opacity: 1, xPercent: 0})
        .fromTo(footer, {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0})

    return tl;
};

export default enterPageAbout;


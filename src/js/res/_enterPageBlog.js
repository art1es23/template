import gsap from 'gsap';

const enterPageBlog = (container) => {

    const header = container.querySelector('.header');
    const slider = container.querySelector('.slider');
    const categoryTitle = container.querySelectorAll('.category__title');
    const category = container.querySelectorAll('.blog-group');
    const categoryItems = container.querySelectorAll('.blog-group__item');
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
        .fromTo(slider, {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0})
        .fromTo(categoryTitle, {opacity: 0, yPercent: -25}, {opacity: 1, yPercent: 0})
        .fromTo(category, {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0})
        .fromTo(categoryItems, {opacity: 0, yPercent: -5}, {opacity: 1, yPercent: 0, stagger: 0.2})
        .fromTo(footer, {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0})

    return tl;
};

export default enterPageBlog;


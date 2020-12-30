import gsap from 'gsap';

const leaveDefault = (container) => {

    const tl = gsap.timeline({
        defaults: {
            duration: 2.5,
            ease: 'power4.easeIn',
        },
    });

    tl
        .to(container, {yPercent: -100, opacity: 0})
        .then();

    return tl;
}

export default leaveDefault;
const slider = (container) => {
    const slider = container.querySelector('.slider');
    const prev = slider.querySelectorAll('.btn--prev');
    const next = slider.querySelectorAll('.btn--next');
    const slides = slider.querySelectorAll('.slider__item');
    const dots = slider.querySelectorAll('.slider-dots__item');

    let index = 0;

    const activeSlide = n => {
        slides.forEach(item => {
            item.classList.remove('activeSlide');
        })
        slides[n].classList.add('activeSlide');
    }
    const activeDots = n => {
        dots.forEach(item => {
            item.classList.remove('active');
        })
        dots[n].classList.add('active');
    }

    const currentActive = (x) => {
        activeSlide(x);
        activeDots(x);
    }

    const nextSlide = () => {

        if (index === slides.length - 1) {
            index = 0;
            currentActive(index)
        }
        else {
            index++;
            currentActive(index)
        }

    }

    const prevSlide = () => {
        if (index === 0) {
            index = slides.length - 1;
            currentActive(index)
        }
        else {
            index--;
            currentActive(index)
        }
    }

    dots.forEach((item, indexDot) => {
        const currentDot = () => {
            index = indexDot;
            currentActive(index);
            /*
                    clearInterval(interval);
            */
        }

        item.addEventListener('click', currentDot)
    })

    prev.forEach(item => {
        item.addEventListener('click', prevSlide);
    })
    next.forEach(item => {
        item.addEventListener('click', nextSlide);
    })

}

export default slider;

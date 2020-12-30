const menuMobile = () => {

    const header = document.querySelector('.header');
    const nav = document.querySelector('.navigation');
    const menuToggle = document.querySelector('.menu');

    menuToggle.addEventListener('click', (evt) => {

        header.classList.toggle('header--direction')
        menuToggle.classList.toggle('menu--toggle');
        nav.classList.toggle('navigation--active');
/*
        document.body.classList.toggle('scroll--hidden');
*/
    })

}

export default menuMobile;
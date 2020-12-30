const menuMobile = () => {
    console.log(document);

    const header = document.querySelector('.header');
    const nav = document.querySelector('.navigation');
    const menuToggle = document.querySelector('.menu');

    menuToggle.addEventListener('click', (evt) => {

        header.classList.toggle('header--direction')
        menuToggle.classList.toggle('menu--toggle');
        nav.classList.toggle('navigation--active');

/*
        if (header.classList.contains('header--direction')) {

        }
*/

        console.log(evt)

    })

}

export default menuMobile;
const tabsToggle = () => {
    document.querySelectorAll('.tab-navigation__item').forEach((item)  =>
        item.addEventListener('click', e => {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');

            document.querySelectorAll('.tab-navigation__item').forEach(
                (child) => child.classList.remove('tab-navigation__item--active')
            );
            document.querySelectorAll('.tab-description__item').forEach(
                (child) => child.classList.remove('tab-description__item--active')
            );

            item.classList.add('tab-navigation__item--active');
            document.getElementById(id).classList.add('tab-description__item--active');
        })
    );
}

export default tabsToggle;
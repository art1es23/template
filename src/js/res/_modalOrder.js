const modalOrder = () => {
    function eventsModal() {
        const modal = document.querySelector('.modal');
        /*
                const closeBtn = document.querySelector('.btn--close');
        */

        document.querySelectorAll('.order__link').forEach(item =>
            item.addEventListener('click', e => {
                modal.classList.add('modal--active');
                document.body.classList.add('scroll--hidden')
            })
        )

// When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.classList.remove('modal--active');
                document.body.classList.remove('scroll--hidden')
            }
        }

        /*
                closeBtn.addEventListener('click', (e) => {
                    if (e.target == closeBtn) {
                        modalOrder.classList.remove('modal-order--active');
                        document.body.classList.remove('scroll--hidden')
                    }
                })
        */
    }
    eventsModal();

}

export default modalOrder;
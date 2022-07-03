

function navBar(header, burgerIco) {
    const head = document.querySelector(header),
          burgerIcon = document.querySelector(burgerIco),
          navItems = head.querySelectorAll('.nav__item');

    
    burgerIcon.addEventListener('click', () => {
        if (burgerIcon.classList.contains('nav__burger-icon-active')) {
            closeNav();
        } else {
            openNav();
        }
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (burgerIcon.classList.contains('nav__burger-icon-active')) {
                closeNav();
            }
        });
    });

    function closeNav() {
        head.style = 'transform: translateY(0);';
        document.body.removeAttribute('style');
        setTimeout(() => {
            burgerIcon.classList.remove('nav__burger-icon-active');
            head.classList.remove('nav__burger-menu');
            head.removeAttribute('style');
        }, 800);
    }

    function openNav() {
        burgerIcon.classList.add('nav__burger-icon-active');
        head.classList.add('nav__burger-menu');
        document.body.style.overflow = 'hidden';
    }
}

export default navBar;
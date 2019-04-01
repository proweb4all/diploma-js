function burger(){
    
    let burger = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger-menu');

    burger.addEventListener('click', () => {
        if (window.screen.width <= 768) {
            burgerMenu.classList.toggle('display-block');
        }
    });
    window.addEventListener('resize', () => {
        if (window.screen.width > 768) {
            burgerMenu.classList.remove('display-block');
        }
    });
}

module.exports = burger;
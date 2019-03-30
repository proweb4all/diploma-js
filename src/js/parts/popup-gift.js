function popupGift(){
    console.log('Подключен модуль popupGift');
    
    let buttonGift = document.querySelector('.fixed-gift');
    let popGift = document.querySelector('.popup-gift');
    let buttons = document.querySelectorAll('button');
    let countClicks = 0;

    buttonGift.addEventListener('click', () => {
        popGift.style.display = 'block';
        buttonGift.style.display = 'none';
    });
    popGift.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('popup-gift') || target.classList.contains('popup-close')) {
            popGift.style.display = 'none';
        }
    });
    
    buttons.forEach((elem) => {elem.addEventListener('click', () => {countClicks++});});
    window.addEventListener('scroll', function() {
        let elem = document.querySelector('html');
        if ((elem.scrollHeight - elem.scrollTop == elem.clientHeight) && (countClicks == 0)) {
            console.log('Прокручено до конца', countClicks);
            popGift.style.display = 'block';
            buttonGift.style.display = 'none';
        }
    })

}

module.exports = popupGift;
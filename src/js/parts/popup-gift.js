function popupGift(){
    console.log('Подключен модуль popupGift');
    
    let buttonGift = document.querySelector('.fixed-gift');
    let popGift = document.querySelector('.popup-gift');

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
}

module.exports = popupGift;
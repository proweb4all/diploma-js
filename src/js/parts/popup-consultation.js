function popupConsultation(){
    console.log('Подключен модуль popupConsultation');
    
    let buttonConsultation = document.querySelectorAll('.button-consultation');
    let popConsultation = document.querySelector('.popup-consultation');

    buttonConsultation.forEach((elem) => {
        elem.addEventListener('click', () => {
            popConsultation.style.display = 'block';
        });
    });
    popConsultation.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('popup-consultation') || target.classList.contains('popup-close')) {
            popConsultation.style.display = 'none';
        }
    });
    setTimeout(() => {
        console.log('Таймаут 60 секунд');
        let arrPopup = document.querySelectorAll('.popup-design, .popup-gift, .popup-consultation');
        let flag = true;
        arrPopup.forEach((elem) => {if (elem.style.display == 'block') flag = false});
        if (flag) popConsultation.style.display = 'block';
    }, 60000);

}

module.exports = popupConsultation;
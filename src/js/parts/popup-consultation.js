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

}

module.exports = popupConsultation;
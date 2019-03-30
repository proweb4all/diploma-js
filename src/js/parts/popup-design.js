function popupDesign(){
    console.log('Подключен модуль popupDesign');
    
    let buttonDesign = document.querySelectorAll('.button-design');
    let popDesign = document.querySelector('.popup-design');

    buttonDesign.forEach((elem) => {
        elem.addEventListener('click', () => {
            popDesign.style.display = 'block';
        });
    });
    popDesign.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('popup-design') || target.classList.contains('popup-close')) {
            popDesign.style.display = 'none';
        }
    });

}

module.exports = popupDesign;
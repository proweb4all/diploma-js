function popupConsultation(){
    
    let buttonConsultation = document.querySelectorAll('.button-consultation'),
        popConsultation = document.querySelector('.popup-consultation');

    buttonConsultation.forEach((elem) => {
        elem.addEventListener('click', () => {
            popConsultation.style.display = 'block';
        });
    });
    popConsultation.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('popup-consultation') || target.classList.contains('popup-close')) {
            let statusPost = document.querySelector('.status-post');
            popConsultation.style.display = 'none';
            if (statusPost) {statusPost.style.display = 'none'}
        }
    });
    setTimeout(() => {
        let arrPopup = document.querySelectorAll('.popup-design, .popup-gift, .popup-consultation');
        let flag = true;
        arrPopup.forEach((elem) => {if (elem.style.display == 'block') flag = false});
        if (flag) popConsultation.style.display = 'block';
    }, 60000);

}

module.exports = popupConsultation;
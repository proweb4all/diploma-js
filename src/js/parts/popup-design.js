function popupDesign(){
    
    let buttonDesign = document.querySelectorAll('.button-design'),
        popDesign = document.querySelector('.popup-design');

    buttonDesign.forEach((elem) => {
        elem.addEventListener('click', () => {
            popDesign.style.display = 'block';
        });
    });
    popDesign.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('popup-design') || target.classList.contains('popup-close')) {
            let statusPost = document.querySelector('.status-post');
            popDesign.style.display = 'none';
            if (statusPost) {statusPost.style.display = 'none'}
        }
    });

}

module.exports = popupDesign;
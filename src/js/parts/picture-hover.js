function pictureHover(){
    
    let picSection = document.querySelector('.sizes'),
        pictHover = document.querySelectorAll('.sizes-block');

    if (browser()) {
        pictHover.forEach((elem) => {
            elem.addEventListener('mouseover', () => {
                elem.querySelector('.back-side').style.opacity = '1';
            });
            elem.addEventListener('mouseout', () => {
                elem.querySelector('.back-side').style.opacity = '0';
            });
        });
    } else {
        picSection.addEventListener('touchstart', (e) => {
            const target = e.target;
            if (target.classList.contains('back-side')) {
                target.style.opacity = '1';
            } else {
                pictHover.forEach((elem) => {
                    elem.querySelector('.back-side').style.opacity = '0';
                });
            }
        }, false);
    }



    // Определение мобильного браузера
    function browser(){
        let ua = navigator.userAgent.toLowerCase();
        if( ua.match(/android/i)
            || ua.match(/webos/i)
            || ua.match(/iphone/i)
            || ua.match(/ipad/i)
            || ua.match(/ipod/i)
            || ua.match(/blackberry/i)
            || ua.match(/windows phone/i)){
            return 0;
        } else {return 1}
    }

}

module.exports = pictureHover;
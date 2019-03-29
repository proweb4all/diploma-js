function pictureHover(){
    console.log('Подключен модуль pictureHover');
    
    let pictWrapper= document.querySelector('.sizes-wrapper');
    let picSection = document.querySelector('.sizes');
    let pictHover = document.querySelectorAll('.sizes-block');

    if (browser()) {
        pictHover.forEach(function(elem){
            elem.addEventListener('mouseover', function(e) {
                elem.querySelector('.back-side').style.opacity = '1';
            });
            elem.addEventListener('mouseout', function(e) {
                elem.querySelector('.back-side').style.opacity = '0';
            });
        });
    } else {
        picSection.addEventListener('touchstart', function(e) {
            // e.preventDefault();
            // e.stopPropagation();
            const target = e.target;
            if (target.classList.contains('back-side')) {
                target.style.opacity = '1';
            } else {
                pictHover.forEach(function(elem){
                    elem.querySelector('.back-side').style.opacity = '0';
                });
            }
        }, false);
    }



    // Определение мобильного браузера
    function browser(){
        let ua = navigator.userAgent.toLowerCase();
        console.log(ua);
        // if (window.screen.width <= 800) {
        if( ua.match(/android/i)
            || ua.match(/webos/i)
            || ua.match(/iphone/i)
            || ua.match(/ipad/i)
            || ua.match(/ipod/i)
            || ua.match(/blackberry/i)
            || ua.match(/windows phone/i)){
            return 0;
        } else {return 1};
    };











    // pictWrapper.addEventListener('mouseover', function(e) {
    //     const target = e.target;
    //     if (target && target.classList.contains('sizes-block')) {
    //         const pict = target.querySelector('img');
    //         console.log(pict.scr, 'pictUnhover');
    //     };
    // });
    // pictWrapper.addEventListener('mouseout', function(e) {
    //     const target = e.target;
    //     if (target && target.classList.contains('sizes-block')) {
    //         const pict = target.querySelector('img');
    //         console.log(pict.scr, 'pictUnhover');
    //     };
    // });



}

module.exports = pictureHover;
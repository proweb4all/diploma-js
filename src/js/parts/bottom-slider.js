function bottomSlider(){
    console.log('Подключен модуль bottomSlider');
    
    let slideIndex = 1,
        slides = document.querySelectorAll('.feedback-slider-item'),
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn');
        let timerId = setInterval(() => {plusSlides(1)}, 7000);
    //showSlides(slideIndex, 0);
    function showSlides(n, d){
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        slides.forEach((item) => {
            item.style.display = 'none';
            item.classList.remove('slide-to-right');
            item.classList.add('slide-to-left');
        });
        slides[slideIndex - 1].style.display = 'block';
        if (d < 0) {
            slides[slideIndex - 1].classList.remove('slide-to-left');
            slides[slideIndex - 1].classList.add('slide-to-right');
        }
    }
    function plusSlides(n) {showSlides(slideIndex += n, n)}
    prev.addEventListener('click', () => {
        clearInterval(timerId);
        plusSlides(-1);
        autoPlay();
    });
    next.addEventListener('click', () => {
        clearInterval(timerId);
        plusSlides(1);
        autoPlay();
    });
    function autoPlay () {
        timerId = setInterval(() => {plusSlides(1)}, 7000);
    }

}

module.exports = bottomSlider;
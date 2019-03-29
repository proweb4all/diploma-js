function mainSlider(){
    console.log('Подключен модуль mainSlider')
    
    let slideIndex = 1,
    slides = document.querySelectorAll('.main-slider-item');
    // slider = document.querySelector('.main-slider');
    function showSlides(n){
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
    };
    function plusSlides(n) {showSlides(slideIndex += n)};
    setInterval(() => {plusSlides(1)}, 5000);
    // slider.addEventListener('click', () => plusSlides(1));
}

module.exports = mainSlider;
function addStyles(){
    
    let buttonAS = document.querySelector('.styles .button-transparent'),
        styles2 = document.querySelectorAll('.styles-2');

    buttonAS.addEventListener('click', () => {
        styles2.forEach((elem) => {
            elem.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            elem.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-10', 'col-xs-offset-1');
        });
        buttonAS.style.display = 'none';
    });
}

module.exports = addStyles;
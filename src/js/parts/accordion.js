function accordion(){
    console.log('Подключен модуль accordion');
    
    let accord = document.querySelector('#accordion');
    let accordHeads = document.querySelectorAll('.accordion-heading');
    let accordBlocks = document.querySelectorAll('.accordion-block');

    accordBlocks.forEach(function(elem){
        elem.classList.add('spirt');
    });
    accordHeads.forEach(function(elem){
        elem.addEventListener('click', function(e) {
            accordHeads.forEach(function(elHead){
                if (elem != elHead){
                    elHead.classList.remove('ui-accordion-header-active');
                    elHead.nextElementSibling.classList.add('spirt');
                } else {
                    elHead.classList.toggle('ui-accordion-header-active');
                    elHead.nextElementSibling.classList.toggle('spirt');
                }
            })
        });
    });

}

module.exports = accordion;
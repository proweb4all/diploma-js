function accordion(){
    
    let accordHeads = document.querySelectorAll('.accordion-heading'),
        accordBlocks = document.querySelectorAll('.accordion-block');

    accordBlocks.forEach((elem) => {elem.classList.add('spirt')});
    accordHeads.forEach((elem) => {
        elem.addEventListener('click', () => {
            accordHeads.forEach((elHead) => {
                if (elem != elHead){
                    elHead.classList.remove('ui-accordion-header-active');
                    elHead.nextElementSibling.classList.add('spirt');
                } else {
                    elHead.classList.toggle('ui-accordion-header-active');
                    elHead.nextElementSibling.classList.toggle('spirt');
                }
            });
        });
    });

}

module.exports = accordion;
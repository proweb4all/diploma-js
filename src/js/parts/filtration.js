function filtration(){
    
    let pfMenu= document.querySelector('.portfolio-menu'),
        pfBlock = document.querySelectorAll('.portfolio-block'),
        pfNo = document.querySelector('.portfolio-no');


    pfMenu.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName == 'LI') {
            let elemsMenu = pfMenu.querySelectorAll('li');
            elemsMenu.forEach((elem) => elem.classList.remove('active'));
            target.classList.add('active');
            let flag = true;
            pfBlock.forEach((elem) => {
                if (elem.classList.contains(target.classList[0])){
                    elem.style.display = 'block';
                    flag = false;
                } else {
                    elem.style.display = 'none';
                }
            });
            if (flag) {pfNo.style.display = 'block'} 
            else {pfNo.style.display = 'no'}
        }
    });

}

module.exports = filtration;
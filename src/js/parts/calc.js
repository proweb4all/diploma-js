function calc(){
    console.log('Подключен модуль calc');

    let inputCalc = document.querySelectorAll('.form select, .promocode'),
        inputPromo = document.querySelector('.promocode'),
        totalValue = document.querySelector('.calc-price');
    let totalDefault = totalValue.textContent;
    let promoDiscount = .3;
    let promoCode = 'IWANTPOPART';
    inputCalc.forEach((elem) => {
        elem.addEventListener('change', () => {
            // console.log('inputCalc[0]', inputCalc[0].options[inputCalc[0].selectedIndex].getAttribute('data-price'));
            // console.log('inputCalc[1]', inputCalc[1].options[inputCalc[1].selectedIndex].getAttribute('data-price'));
            // console.log('inputCalc[2]', inputCalc[2].options[inputCalc[2].selectedIndex].getAttribute('data-price'));
            let price0 = +inputCalc[0].options[inputCalc[0].selectedIndex].getAttribute('data-price');
            let price1 = +inputCalc[1].options[inputCalc[1].selectedIndex].getAttribute('data-price');
            let price2 = +inputCalc[2].options[inputCalc[2].selectedIndex].getAttribute('data-price');

            if ((price0 <= 0) || (price1 <= 0)) {
                totalValue.style.fontSize = '14px';
                totalValue.textContent = totalDefault;

            } else {
                let res = price0 * price1 + price2;
                if (inputPromo.value.trim().toUpperCase() == promoCode) {
                    res *= (1 - promoDiscount);
                }
                totalValue.style.fontSize = '40px';
                animNum(totalValue, Math.round(res), 50, 1000);
                //totalValue.textContent = Math.round(res);
            };
        })
    })

    // Анимация числа
    function animNum(elem, n, f, t){
        let num = n || 0,
            fps = f || 10, 
            time = t || 1000, 
            steps = time / (1000 / fps), 
            cNum = 0,
            d0 = num / steps;
        let timer = setInterval(function(){
            cNum += d0;
            elem.textContent = Math.round(cNum);
            steps--;
            if(steps <= 0){
                clearInterval(timer);
            }
        }, (1000 / fps));
    }    
}

module.exports = calc;
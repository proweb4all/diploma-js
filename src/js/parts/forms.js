function forms(){
    console.log('Подключен модуль forms')

    let message = {
        //loading: 'Загрузка...',
        success: 'Спасибо!<br>Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status-post');

    function sendForm(elem) {
        elem.addEventListener('submit', function(event){
            event.preventDefault();
            if (!elem.querySelector('.status-post')) {elem.appendChild(statusMessage)};
            let input = elem.querySelectorAll('input, textarea'),
                formData = new FormData(elem);
            let obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            //console.log('formData', formData);
            //console.log('obj', obj);
            let json = JSON.stringify(obj);

            function postData(data){
                return new Promise(function(resolve, reject){
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
            //        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                    request.addEventListener('readystatechange', function(){
                        if (request.readyState < 4){
                            resolve()
                        } else if (request.readyState === 4){
                            if (request.status == 200 && request.status < 300){
                                resolve();
                            } else {
                                reject()
                            }
                        }
                    });
                    request.send(json);
                    statusMessage.style.display = 'flex';
                    //request.send(formData);
                })
            }
            function clearInput(){
                input.forEach((elem) => {elem.value = ''})
            }
            postData(formData)
                .then(() => {
                    statusMessage.style.backgroundImage = 'url(img/loading.gif)';
                    statusMessage.textContent = '';
                })
                .then(() => {
                    statusMessage.style.backgroundImage = '';
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => {
                    statusMessage.style.backgroundImage = '';
                    statusMessage.textContent = message.failure;
                })
                .then(clearInput)
        });
    }
    // Попап формы
    let popupForms = document.querySelectorAll('#form-design, #form-consult');
    console.log(popupForms);
    popupForms.forEach((elem) => {sendForm(elem)})
    // Нижняя форма
    // let form1 = document.querySelector('#form');
    // sendForm(form1);

    // Input telephone
    let inputTel = document.querySelectorAll('input[type="tel"]');
    let inputText = document.querySelectorAll('input[type="text"], textarea');
    
    inputTel.forEach((elem) => {
        elem.addEventListener('focus', () => {if(!/^\+\d*$/.test(elem.value)) elem.value = '+';});
        elem.addEventListener('keypress', e => {if(!/\d/.test(e.key)) e.preventDefault();});
        // elem.addEventListener('input', () => { //keyup
        //     elem.value = elem.value.replace(/[^+0-9]/g, '')
        // });
    });
    inputText.forEach((elem) => {
        elem.addEventListener('input', () => { //keyup
            elem.value = elem.value.replace(/[A-Z]/gi, '')
        });
    });



}

module.exports = forms;
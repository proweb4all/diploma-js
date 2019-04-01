function forms(){

    let message = {
        success: 'Спасибо!<br>Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status-post');
    
    let buttonBottom = document.querySelector('.consultation .button-order');

    function sendForm(elem) {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!elem.querySelector('.status-post')) {
                elem.appendChild(statusMessage);
                elem.querySelector('.status-post').addEventListener('click', function() { 
                    this.style.display = 'none';
                    buttonBottom.classList.remove('no-shadow');
                });
            };
            let input = elem.querySelectorAll('input, textarea'),
                formData = new FormData(elem);
            let obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            function postData(){
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                    request.addEventListener('readystatechange', () => {
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
                    buttonBottom.classList.add('no-shadow');
                })
            }
            function clearInput(){
                input.forEach((elem) => {elem.value = ''})
            }
            postData()
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
    let popupForms = document.querySelectorAll('#form-design, #form-consult, #form-bottom');
    popupForms.forEach((elem) => {sendForm(elem)});

    let inputTel = document.querySelectorAll('input[type="tel"]');
    let inputText = document.querySelectorAll('input[type="text"]:not([class="promocode"]), textarea');
    inputTel.forEach((elem) => {
        elem.addEventListener("input", mask, false);
        elem.addEventListener("focus", mask, false);
        elem.addEventListener("blur", mask, false);
    });
    inputText.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[A-Z]/gi, '');
        });
    });
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }
    function mask(event) {
        let matrix = "+_ (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = "";
        } else setCursorPosition(this.value.length, this);
    }

}

module.exports = forms;
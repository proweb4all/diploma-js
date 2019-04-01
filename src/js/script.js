require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let mainSlider = require('./parts/main-slider.js'),
        bottomSlider = require('./parts/bottom-slider.js'),
        pictureHover = require('./parts/picture-hover.js'),
        accordion = require('./parts/accordion.js'),
        calc = require('./parts/calc.js'),
        burger = require('./parts/burger.js'),
        addStyles = require('./parts/add-styles.js'),
        filtration = require('./parts/filtration.js'),
        popupDesign = require('./parts/popup-design.js'),
        popupGift = require('./parts/popup-gift.js'),
        popupConsultation = require('./parts/popup-consultation.js'),
        forms = require('./parts/forms.js');
    
    mainSlider();
    bottomSlider();
    pictureHover();
    accordion();
    calc();
    burger();
    addStyles();
    filtration();
    popupDesign();
    popupGift();
    popupConsultation();
    forms();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
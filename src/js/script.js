require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let mainSlider = require('./parts/main-slider.js');
    let bottomSlider = require('./parts/bottom-slider.js');
    let pictureHover = require('./parts/picture-hover.js');
    let accordion = require('./parts/accordion.js');
    let calc = require('./parts/calc.js');

    mainSlider();
    bottomSlider();
    pictureHover();
    accordion();
    calc();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
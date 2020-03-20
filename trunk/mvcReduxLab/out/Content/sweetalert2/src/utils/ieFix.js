"use strict";
exports.__esModule = true;
var dom = require("./dom/index.js");
// https://stackoverflow.com/a/21825207
var isIE11 = function () { return !!window.MSInputMethodContext && !!document.documentMode; };
// Fix IE11 centering sweetalert2/issues/933
/* istanbul ignore next */
var fixVerticalPositionIE = function () {
    var container = dom.getContainer();
    var popup = dom.getPopup();
    container.style.removeProperty('align-items');
    if (popup.offsetTop < 0) {
        container.style.alignItems = 'flex-start';
    }
};
/* istanbul ignore next */
exports.IEfix = function () {
    if (typeof window !== 'undefined' && isIE11()) {
        fixVerticalPositionIE();
        window.addEventListener('resize', fixVerticalPositionIE);
    }
};
/* istanbul ignore next */
exports.undoIEfix = function () {
    if (typeof window !== 'undefined' && isIE11()) {
        window.removeEventListener('resize', fixVerticalPositionIE);
    }
};

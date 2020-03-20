"use strict";
exports.__esModule = true;
var isNodeEnv_js_1 = require("../isNodeEnv.js");
exports.animationEndEvent = (function () {
    // Prevent run in Node env
    /* istanbul ignore if */
    if (isNodeEnv_js_1.isNodeEnv()) {
        return false;
    }
    var testEl = document.createElement('div');
    var transEndEventNames = {
        'WebkitAnimation': 'webkitAnimationEnd',
        'OAnimation': 'oAnimationEnd oanimationend',
        'animation': 'animationend'
    };
    for (var i in transEndEventNames) {
        if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
            return transEndEventNames[i];
        }
    }
    return false;
})();

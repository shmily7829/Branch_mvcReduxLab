"use strict";
exports.__esModule = true;
var domUtils_js_1 = require("./domUtils.js");
exports.parseHtmlToContainer = function (param, target) {
    if (!param) {
        return domUtils_js_1.hide(target);
    }
    // DOM element
    if (param instanceof HTMLElement) {
        target.appendChild(param);
        // JQuery element(s)
    }
    else if (typeof param === 'object') {
        target.innerHTML = '';
        if (0 in param) {
            for (var i = 0; i in param; i++) {
                target.appendChild(param[i].cloneNode(true));
            }
        }
        else {
            target.appendChild(param.cloneNode(true));
        }
    }
    else if (param) {
        target.innerHTML = param;
    }
    domUtils_js_1.show(target);
};

"use strict";
exports.__esModule = true;
var dom = require("./dom/index.js");
var classes_js_1 = require("../utils/classes.js");
// Fix iOS scrolling http://stackoverflow.com/q/39626302
/* istanbul ignore next */
exports.iOSfix = function () {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (iOS && !dom.hasClass(document.body, classes_js_1.swalClasses.iosfix)) {
        var offset = document.body.scrollTop;
        document.body.style.top = (offset * -1) + 'px';
        dom.addClass(document.body, classes_js_1.swalClasses.iosfix);
    }
};
/* istanbul ignore next */
exports.undoIOSfix = function () {
    if (dom.hasClass(document.body, classes_js_1.swalClasses.iosfix)) {
        var offset = parseInt(document.body.style.top, 10);
        dom.removeClass(document.body, classes_js_1.swalClasses.iosfix);
        document.body.style.top = '';
        document.body.scrollTop = (offset * -1);
    }
};

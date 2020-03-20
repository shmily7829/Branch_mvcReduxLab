"use strict";
exports.__esModule = true;
var classes_js_1 = require("../classes.js");
var utils_js_1 = require("../utils.js");
var domUtils_js_1 = require("./domUtils.js");
exports.getContainer = function () { return document.body.querySelector('.' + classes_js_1.swalClasses.container); };
var elementBySelector = function (selectorString) {
    var container = exports.getContainer();
    return container ? container.querySelector(selectorString) : null;
};
var elementByClass = function (className) {
    return elementBySelector('.' + className);
};
exports.getPopup = function () { return elementByClass(classes_js_1.swalClasses.popup); };
exports.getIcons = function () {
    var popup = exports.getPopup();
    return utils_js_1.toArray(popup.querySelectorAll('.' + classes_js_1.swalClasses.icon));
};
exports.getTitle = function () { return elementByClass(classes_js_1.swalClasses.title); };
exports.getContent = function () { return elementByClass(classes_js_1.swalClasses.content); };
exports.getImage = function () { return elementByClass(classes_js_1.swalClasses.image); };
exports.getProgressSteps = function () { return elementByClass(classes_js_1.swalClasses['progress-steps']); };
exports.getValidationMessage = function () { return elementByClass(classes_js_1.swalClasses['validation-message']); };
exports.getConfirmButton = function () { return elementBySelector('.' + classes_js_1.swalClasses.actions + ' .' + classes_js_1.swalClasses.confirm); };
exports.getCancelButton = function () { return elementBySelector('.' + classes_js_1.swalClasses.actions + ' .' + classes_js_1.swalClasses.cancel); };
exports.getActions = function () { return elementByClass(classes_js_1.swalClasses.actions); };
exports.getFooter = function () { return elementByClass(classes_js_1.swalClasses.footer); };
exports.getCloseButton = function () { return elementByClass(classes_js_1.swalClasses.close); };
exports.getFocusableElements = function () {
    var focusableElementsWithTabindex = utils_js_1.toArray(exports.getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
        // sort according to tabindex
        .sort(function (a, b) {
        a = parseInt(a.getAttribute('tabindex'));
        b = parseInt(b.getAttribute('tabindex'));
        if (a > b) {
            return 1;
        }
        else if (a < b) {
            return -1;
        }
        return 0;
    });
    // https://github.com/jkup/focusable/blob/master/index.js
    var otherFocusableElements = utils_js_1.toArray(exports.getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (el) { return el.getAttribute('tabindex') !== '-1'; });
    return utils_js_1.uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) { return domUtils_js_1.isVisible(el); });
};
exports.isModal = function () {
    return !exports.isToast() && !document.body.classList.contains(classes_js_1.swalClasses['no-backdrop']);
};
exports.isToast = function () {
    return document.body.classList.contains(classes_js_1.swalClasses['toast-shown']);
};
exports.isLoading = function () {
    return exports.getPopup().hasAttribute('data-loading');
};

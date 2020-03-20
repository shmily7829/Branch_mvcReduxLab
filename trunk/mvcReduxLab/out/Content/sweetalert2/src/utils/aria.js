"use strict";
exports.__esModule = true;
var getters_js_1 = require("./dom/getters.js");
var domUtils_js_1 = require("./dom/domUtils.js");
var utils_js_1 = require("./utils.js");
// From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.
exports.setAriaHidden = function () {
    var bodyChildren = utils_js_1.toArray(document.body.children);
    bodyChildren.forEach(function (el) {
        if (el === getters_js_1.getContainer() || domUtils_js_1.contains(el, getters_js_1.getContainer())) {
            return;
        }
        if (el.hasAttribute('aria-hidden')) {
            el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
        }
        el.setAttribute('aria-hidden', 'true');
    });
};
exports.unsetAriaHidden = function () {
    var bodyChildren = utils_js_1.toArray(document.body.children);
    bodyChildren.forEach(function (el) {
        if (el.hasAttribute('data-previous-aria-hidden')) {
            el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
            el.removeAttribute('data-previous-aria-hidden');
        }
        else {
            el.removeAttribute('aria-hidden');
        }
    });
};

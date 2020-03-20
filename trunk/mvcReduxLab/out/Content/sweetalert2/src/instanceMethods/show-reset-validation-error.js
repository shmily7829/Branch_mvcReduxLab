"use strict";
exports.__esModule = true;
var dom = require("../utils/dom/index.js");
var classes_js_1 = require("../utils/classes.js");
var privateProps_js_1 = require("../privateProps.js");
// Show block with validation message
function showValidationMessage(error) {
    var domCache = privateProps_js_1["default"].domCache.get(this);
    domCache.validationMessage.innerHTML = error;
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationMessage.style.marginLeft = "-" + popupComputedStyle.getPropertyValue('padding-left');
    domCache.validationMessage.style.marginRight = "-" + popupComputedStyle.getPropertyValue('padding-right');
    dom.show(domCache.validationMessage);
    var input = this.getInput();
    if (input) {
        input.setAttribute('aria-invalid', true);
        input.setAttribute('aria-describedBy', classes_js_1.swalClasses['validation-message']);
        dom.focusInput(input);
        dom.addClass(input, classes_js_1.swalClasses.inputerror);
    }
}
exports.showValidationMessage = showValidationMessage;
// Hide block with validation message
function resetValidationMessage() {
    var domCache = privateProps_js_1["default"].domCache.get(this);
    if (domCache.validationMessage) {
        dom.hide(domCache.validationMessage);
    }
    var input = this.getInput();
    if (input) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedBy');
        dom.removeClass(input, classes_js_1.swalClasses.inputerror);
    }
}
exports.resetValidationMessage = resetValidationMessage;

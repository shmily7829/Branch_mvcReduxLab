"use strict";
exports.__esModule = true;
var privateProps_js_1 = require("../privateProps.js");
function enableButtons() {
    var domCache = privateProps_js_1["default"].domCache.get(this);
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
}
exports.enableButtons = enableButtons;
function disableButtons() {
    var domCache = privateProps_js_1["default"].domCache.get(this);
    domCache.confirmButton.disabled = true;
    domCache.cancelButton.disabled = true;
}
exports.disableButtons = disableButtons;
function enableConfirmButton() {
    var domCache = privateProps_js_1["default"].domCache.get(this);
    domCache.confirmButton.disabled = false;
}
exports.enableConfirmButton = enableConfirmButton;
function disableConfirmButton() {
    var domCache = privateProps_js_1["default"].domCache.get(this);
    domCache.confirmButton.disabled = true;
}
exports.disableConfirmButton = disableConfirmButton;
function enableInput() {
    var input = this.getInput();
    if (!input) {
        return false;
    }
    if (input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var i = 0; i < radios.length; i++) {
            radios[i].disabled = false;
        }
    }
    else {
        input.disabled = false;
    }
}
exports.enableInput = enableInput;
function disableInput() {
    var input = this.getInput();
    if (!input) {
        return false;
    }
    if (input && input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var i = 0; i < radios.length; i++) {
            radios[i].disabled = true;
        }
    }
    else {
        input.disabled = true;
    }
}
exports.disableInput = disableInput;

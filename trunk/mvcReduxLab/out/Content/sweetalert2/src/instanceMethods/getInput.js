"use strict";
exports.__esModule = true;
var dom = require("../utils/dom/index.js");
var classes_js_1 = require("../utils/classes.js");
var privateProps_js_1 = require("../privateProps.js");
// Get input element by specified type or, if type isn't specified, by params.input
function getInput(inputType) {
    var innerParams = privateProps_js_1["default"].innerParams.get(this);
    var domCache = privateProps_js_1["default"].domCache.get(this);
    inputType = inputType || innerParams.input;
    if (!inputType) {
        return null;
    }
    switch (inputType) {
        case 'select':
        case 'textarea':
        case 'file':
            return dom.getChildByClass(domCache.content, classes_js_1.swalClasses[inputType]);
        case 'checkbox':
            return domCache.popup.querySelector("." + classes_js_1.swalClasses.checkbox + " input");
        case 'radio':
            return domCache.popup.querySelector("." + classes_js_1.swalClasses.radio + " input:checked") ||
                domCache.popup.querySelector("." + classes_js_1.swalClasses.radio + " input:first-child");
        case 'range':
            return domCache.popup.querySelector("." + classes_js_1.swalClasses.range + " input");
        default:
            return dom.getChildByClass(domCache.content, classes_js_1.swalClasses.input);
    }
}
exports.getInput = getInput;

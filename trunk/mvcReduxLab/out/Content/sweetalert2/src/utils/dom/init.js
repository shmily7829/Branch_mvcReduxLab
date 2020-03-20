"use strict";
exports.__esModule = true;
var classes_js_1 = require("../classes.js");
var getters_js_1 = require("./getters.js");
var domUtils_js_1 = require("./domUtils.js");
var isNodeEnv_js_1 = require("../isNodeEnv.js");
var utils_js_1 = require("../utils.js");
var sweetalert2_js_1 = require("../../sweetalert2.js");
var sweetHTML = ("\n <div aria-labelledby=\"" + classes_js_1.swalClasses.title + "\" aria-describedby=\"" + classes_js_1.swalClasses.content + "\" class=\"" + classes_js_1.swalClasses.popup + "\" tabindex=\"-1\">\n   <div class=\"" + classes_js_1.swalClasses.header + "\">\n     <ul class=\"" + classes_js_1.swalClasses['progress-steps'] + "\"></ul>\n     <div class=\"" + classes_js_1.swalClasses.icon + " " + classes_js_1.iconTypes.error + "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"" + classes_js_1.swalClasses.icon + " " + classes_js_1.iconTypes.question + "\">\n       <span class=\"" + classes_js_1.swalClasses['icon-text'] + "\">?</span>\n      </div>\n     <div class=\"" + classes_js_1.swalClasses.icon + " " + classes_js_1.iconTypes.warning + "\">\n       <span class=\"" + classes_js_1.swalClasses['icon-text'] + "\">!</span>\n      </div>\n     <div class=\"" + classes_js_1.swalClasses.icon + " " + classes_js_1.iconTypes.info + "\">\n       <span class=\"" + classes_js_1.swalClasses['icon-text'] + "\">i</span>\n      </div>\n     <div class=\"" + classes_js_1.swalClasses.icon + " " + classes_js_1.iconTypes.success + "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"" + classes_js_1.swalClasses.image + "\" />\n     <h2 class=\"" + classes_js_1.swalClasses.title + "\" id=\"" + classes_js_1.swalClasses.title + "\"></h2>\n     <button type=\"button\" class=\"" + classes_js_1.swalClasses.close + "\">\u00D7</button>\n   </div>\n   <div class=\"" + classes_js_1.swalClasses.content + "\">\n     <div id=\"" + classes_js_1.swalClasses.content + "\"></div>\n     <input class=\"" + classes_js_1.swalClasses.input + "\" />\n     <input type=\"file\" class=\"" + classes_js_1.swalClasses.file + "\" />\n     <div class=\"" + classes_js_1.swalClasses.range + "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"" + classes_js_1.swalClasses.select + "\"></select>\n     <div class=\"" + classes_js_1.swalClasses.radio + "\"></div>\n     <label for=\"" + classes_js_1.swalClasses.checkbox + "\" class=\"" + classes_js_1.swalClasses.checkbox + "\">\n       <input type=\"checkbox\" />\n       <span class=\"" + classes_js_1.swalClasses.label + "\"></span>\n     </label>\n     <textarea class=\"" + classes_js_1.swalClasses.textarea + "\"></textarea>\n     <div class=\"" + classes_js_1.swalClasses['validation-message'] + "\" id=\"" + classes_js_1.swalClasses['validation-message'] + "\"></div>\n   </div>\n   <div class=\"" + classes_js_1.swalClasses.actions + "\">\n     <button type=\"button\" class=\"" + classes_js_1.swalClasses.confirm + "\">OK</button>\n     <button type=\"button\" class=\"" + classes_js_1.swalClasses.cancel + "\">Cancel</button>\n   </div>\n   <div class=\"" + classes_js_1.swalClasses.footer + "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
/*
 * Add modal + backdrop to DOM
 */
exports.init = function (params) {
    // Clean up the old popup if it exists
    var c = getters_js_1.getContainer();
    if (c) {
        c.parentNode.removeChild(c);
        domUtils_js_1.removeClass([document.documentElement, document.body], [
            classes_js_1.swalClasses['no-backdrop'],
            classes_js_1.swalClasses['toast-shown'],
            classes_js_1.swalClasses['has-column']
        ]);
    }
    /* istanbul ignore if */
    if (isNodeEnv_js_1.isNodeEnv()) {
        utils_js_1.error('SweetAlert2 requires document to initialize');
        return;
    }
    var container = document.createElement('div');
    container.className = classes_js_1.swalClasses.container;
    container.innerHTML = sweetHTML;
    var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
    targetElement.appendChild(container);
    var popup = getters_js_1.getPopup();
    var content = getters_js_1.getContent();
    var input = domUtils_js_1.getChildByClass(content, classes_js_1.swalClasses.input);
    var file = domUtils_js_1.getChildByClass(content, classes_js_1.swalClasses.file);
    var range = content.querySelector("." + classes_js_1.swalClasses.range + " input");
    var rangeOutput = content.querySelector("." + classes_js_1.swalClasses.range + " output");
    var select = domUtils_js_1.getChildByClass(content, classes_js_1.swalClasses.select);
    var checkbox = content.querySelector("." + classes_js_1.swalClasses.checkbox + " input");
    var textarea = domUtils_js_1.getChildByClass(content, classes_js_1.swalClasses.textarea);
    // a11y
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
        popup.setAttribute('aria-modal', 'true');
    }
    // RTL
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
        domUtils_js_1.addClass(getters_js_1.getContainer(), classes_js_1.swalClasses.rtl);
    }
    var oldInputVal; // IE11 workaround, see #1109 for details
    var resetValidationMessage = function (e) {
        if (sweetalert2_js_1["default"].isVisible() && oldInputVal !== e.target.value) {
            sweetalert2_js_1["default"].resetValidationMessage();
        }
        oldInputVal = e.target.value;
    };
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;
    range.oninput = function (e) {
        resetValidationMessage(e);
        rangeOutput.value = range.value;
    };
    range.onchange = function (e) {
        resetValidationMessage(e);
        range.nextSibling.value = range.value;
    };
    return popup;
};

"use strict";
exports.__esModule = true;
var dom = require("../utils/dom/index.js");
var sweetalert2_js_1 = require("../sweetalert2.js");
var classes_js_1 = require("../utils/classes.js");
/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
var showLoading = function () {
    var popup = dom.getPopup();
    if (!popup) {
        sweetalert2_js_1["default"].fire('');
    }
    popup = dom.getPopup();
    var actions = dom.getActions();
    var confirmButton = dom.getConfirmButton();
    var cancelButton = dom.getCancelButton();
    dom.show(actions);
    dom.show(confirmButton);
    dom.addClass([popup, actions], classes_js_1.swalClasses.loading);
    confirmButton.disabled = true;
    cancelButton.disabled = true;
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
};
exports.showLoading = showLoading;
exports.enableLoading = showLoading;

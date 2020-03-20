"use strict";
exports.__esModule = true;
var classes_js_1 = require("../../classes.js");
var dom = require("../../dom/index.js");
exports.renderActions = function (params) {
    var actions = dom.getActions();
    var confirmButton = dom.getConfirmButton();
    var cancelButton = dom.getCancelButton();
    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showCancelButton) {
        dom.hide(actions);
    }
    else {
        dom.show(actions);
    }
    // Cancel button
    if (params.showCancelButton) {
        cancelButton.style.display = 'inline-block';
    }
    else {
        dom.hide(cancelButton);
    }
    // Confirm button
    if (params.showConfirmButton) {
        confirmButton.style.removeProperty('display');
    }
    else {
        dom.hide(confirmButton);
    }
    // Edit text on confirm and cancel buttons
    confirmButton.innerHTML = params.confirmButtonText;
    cancelButton.innerHTML = params.cancelButtonText;
    // ARIA labels for confirm and cancel buttons
    confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
    cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);
    // Add buttons custom classes
    confirmButton.className = classes_js_1.swalClasses.confirm;
    dom.addClass(confirmButton, params.confirmButtonClass);
    cancelButton.className = classes_js_1.swalClasses.cancel;
    dom.addClass(cancelButton, params.cancelButtonClass);
    // Buttons styling
    if (params.buttonsStyling) {
        dom.addClass([confirmButton, cancelButton], classes_js_1.swalClasses.styled);
        // Buttons background colors
        if (params.confirmButtonColor) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
        }
        if (params.cancelButtonColor) {
            cancelButton.style.backgroundColor = params.cancelButtonColor;
        }
        // Loading state
        var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
        confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
        confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
    }
    else {
        dom.removeClass([confirmButton, cancelButton], classes_js_1.swalClasses.styled);
        confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
        cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
    }
};

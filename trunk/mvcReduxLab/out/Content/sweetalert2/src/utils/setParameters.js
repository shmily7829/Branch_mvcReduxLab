"use strict";
exports.__esModule = true;
var classes_js_1 = require("./classes.js");
var utils_js_1 = require("./utils.js");
var dom = require("./dom/index.js");
var defaultInputValidators_js_1 = require("./defaultInputValidators.js");
/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
function setParameters(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
        Object.keys(defaultInputValidators_js_1["default"]).forEach(function (key) {
            if (params.input === key) {
                params.inputValidator = defaultInputValidators_js_1["default"][key];
            }
        });
    }
    // Determine if the custom target element is valid
    if (!params.target ||
        (typeof params.target === 'string' && !document.querySelector(params.target)) ||
        (typeof params.target !== 'string' && !params.target.appendChild)) {
        utils_js_1.warn('Target parameter is not valid, defaulting to "body"');
        params.target = 'body';
    }
    // Animation
    if (typeof params.animation === 'function') {
        params.animation = params.animation.call();
    }
    var popup;
    var oldPopup = dom.getPopup();
    var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
    // If the model target has changed, refresh the popup
    if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
        popup = dom.init(params);
    }
    else {
        popup = oldPopup || dom.init(params);
    }
    // Set popup width
    if (params.width) {
        popup.style.width = (typeof params.width === 'number') ? params.width + 'px' : params.width;
    }
    // Set popup padding
    if (params.padding !== null) {
        popup.style.padding = (typeof params.padding === 'number') ? params.padding + 'px' : params.padding;
    }
    // Set popup background
    if (params.background) {
        popup.style.background = params.background;
    }
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (var i = 0; i < successIconParts.length; i++) {
        successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
    var container = dom.getContainer();
    var closeButton = dom.getCloseButton();
    var footer = dom.getFooter();
    // Title
    dom.renderTitle(params);
    // Content
    dom.renderContent(params);
    // Backdrop
    if (typeof params.backdrop === 'string') {
        dom.getContainer().style.background = params.backdrop;
    }
    else if (!params.backdrop) {
        dom.addClass([document.documentElement, document.body], classes_js_1.swalClasses['no-backdrop']);
    }
    if (!params.backdrop && params.allowOutsideClick) {
        utils_js_1.warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    // Position
    if (params.position in classes_js_1.swalClasses) {
        dom.addClass(container, classes_js_1.swalClasses[params.position]);
    }
    else {
        utils_js_1.warn('The "position" parameter is not valid, defaulting to "center"');
        dom.addClass(container, classes_js_1.swalClasses.center);
    }
    // Grow
    if (params.grow && typeof params.grow === 'string') {
        var growClass = 'grow-' + params.grow;
        if (growClass in classes_js_1.swalClasses) {
            dom.addClass(container, classes_js_1.swalClasses[growClass]);
        }
    }
    // Close button
    if (params.showCloseButton) {
        closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
        dom.show(closeButton);
    }
    else {
        dom.hide(closeButton);
    }
    // Default Class
    popup.className = classes_js_1.swalClasses.popup;
    if (params.toast) {
        dom.addClass([document.documentElement, document.body], classes_js_1.swalClasses['toast-shown']);
        dom.addClass(popup, classes_js_1.swalClasses.toast);
    }
    else {
        dom.addClass(popup, classes_js_1.swalClasses.modal);
    }
    // Custom Class
    if (params.customClass) {
        dom.addClass(popup, params.customClass);
    }
    if (params.customContainerClass) {
        dom.addClass(container, params.customContainerClass);
    }
    // Progress steps
    dom.renderProgressSteps(params);
    // Icon
    dom.renderIcon(params);
    // Image
    dom.renderImage(params);
    // Actions (buttons)
    dom.renderActions(params);
    // Footer
    dom.parseHtmlToContainer(params.footer, footer);
    // CSS animation
    if (params.animation === true) {
        dom.removeClass(popup, classes_js_1.swalClasses.noanimation);
    }
    else {
        dom.addClass(popup, classes_js_1.swalClasses.noanimation);
    }
    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
        utils_js_1.warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' +
            'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' +
            'https://sweetalert2.github.io/#ajax-request');
    }
}
exports["default"] = setParameters;

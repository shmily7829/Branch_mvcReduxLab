"use strict";
exports.__esModule = true;
var utils_js_1 = require("../utils/utils.js");
var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    type: null,
    toast: false,
    customClass: '',
    customContainerClass: '',
    target: 'body',
    backdrop: true,
    animation: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: null,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: null,
    confirmButtonClass: '',
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: null,
    cancelButtonClass: '',
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    imageUrl: null,
    imageWidth: null,
    imageHeight: null,
    imageAlt: '',
    imageClass: '',
    timer: null,
    width: null,
    padding: null,
    background: null,
    input: null,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputClass: '',
    inputAttributes: {},
    inputValidator: null,
    validationMessage: null,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: null,
    progressStepsDistance: null,
    onBeforeOpen: null,
    onAfterClose: null,
    onOpen: null,
    onClose: null,
    scrollbarPadding: true
};
exports.deprecatedParams = [];
var toastIncompatibleParams = [
    'allowOutsideClick',
    'allowEnterKey',
    'backdrop',
    'focusConfirm',
    'focusCancel',
    'heightAuto',
    'keydownListenerCapture'
];
/**
 * Is valid parameter
 * @param {String} paramName
 */
exports.isValidParameter = function (paramName) {
    return defaultParams.hasOwnProperty(paramName);
};
/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */
exports.isUpdatableParameter = function (paramName) {
    return [
        'title',
        'titleText',
        'text',
        'html',
        'type',
        'showConfirmButton',
        'showCancelButton',
        'confirmButtonText',
        'confirmButtonAriaLabel',
        'confirmButtonColor',
        'confirmButtonClass',
        'cancelButtonText',
        'cancelButtonAriaLabel',
        'cancelButtonColor',
        'cancelButtonClass',
        'buttonsStyling',
        'reverseButtons',
        'imageUrl',
        'imageWidth',
        'imageHeigth',
        'imageAlt',
        'imageClass',
        'progressSteps',
        'currentProgressStep'
    ].indexOf(paramName) !== -1;
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */
exports.isDeprecatedParameter = function (paramName) {
    return exports.deprecatedParams.includes(paramName);
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */
exports.showWarningsForParams = function (params) {
    for (var param in params) {
        if (!exports.isValidParameter(param)) {
            utils_js_1.warn("Unknown parameter \"" + param + "\"");
        }
        if (params.toast && toastIncompatibleParams.includes(param)) {
            utils_js_1.warn("The parameter \"" + param + "\" is incompatible with toasts");
        }
        if (exports.isDeprecatedParameter(param)) {
            utils_js_1.warnOnce("The parameter \"" + param + "\" is deprecated and will be removed in the next major release.");
        }
    }
};
exports["default"] = defaultParams;

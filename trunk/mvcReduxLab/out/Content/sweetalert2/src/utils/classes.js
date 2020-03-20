"use strict";
exports.__esModule = true;
exports.swalPrefix = 'swal2-';
exports.prefix = function (items) {
    var result = {};
    for (var i in items) {
        result[items[i]] = exports.swalPrefix + items[i];
    }
    return result;
};
exports.swalClasses = exports.prefix([
    'container',
    'shown',
    'height-auto',
    'iosfix',
    'popup',
    'modal',
    'no-backdrop',
    'toast',
    'toast-shown',
    'toast-column',
    'fade',
    'show',
    'hide',
    'noanimation',
    'close',
    'title',
    'header',
    'content',
    'actions',
    'confirm',
    'cancel',
    'footer',
    'icon',
    'icon-text',
    'image',
    'input',
    'file',
    'range',
    'select',
    'radio',
    'checkbox',
    'label',
    'textarea',
    'inputerror',
    'validation-message',
    'progress-steps',
    'active-progress-step',
    'progress-step',
    'progress-step-line',
    'loading',
    'styled',
    'top',
    'top-start',
    'top-end',
    'top-left',
    'top-right',
    'center',
    'center-start',
    'center-end',
    'center-left',
    'center-right',
    'bottom',
    'bottom-start',
    'bottom-end',
    'bottom-left',
    'bottom-right',
    'grow-row',
    'grow-column',
    'grow-fullscreen',
    'rtl'
]);
exports.iconTypes = exports.prefix([
    'success',
    'warning',
    'info',
    'question',
    'error'
]);

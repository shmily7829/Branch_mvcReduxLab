"use strict";
exports.__esModule = true;
var classes_js_1 = require("../classes.js");
// Remember state in cases where opening and handling a modal will fiddle with it.
exports.states = {
    previousBodyPadding: null
};
exports.hasClass = function (elem, className) {
    return elem.classList.contains(className);
};
exports.focusInput = function (input) {
    input.focus();
    // place cursor at end of text in text input
    if (input.type !== 'file') {
        // http://stackoverflow.com/a/2345915
        var val = input.value;
        input.value = '';
        input.value = val;
    }
};
var addOrRemoveClass = function (target, classList, add) {
    if (!target || !classList) {
        return;
    }
    if (typeof classList === 'string') {
        classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(function (className) {
        if (target.forEach) {
            target.forEach(function (elem) {
                add ? elem.classList.add(className) : elem.classList.remove(className);
            });
        }
        else {
            add ? target.classList.add(className) : target.classList.remove(className);
        }
    });
};
exports.addClass = function (target, classList) {
    addOrRemoveClass(target, classList, true);
};
exports.removeClass = function (target, classList) {
    addOrRemoveClass(target, classList, false);
};
exports.getChildByClass = function (elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
        if (exports.hasClass(elem.childNodes[i], className)) {
            return elem.childNodes[i];
        }
    }
};
exports.show = function (elem) {
    elem.style.opacity = '';
    elem.style.display = (elem.id === classes_js_1.swalClasses.content) ? 'block' : 'flex';
};
exports.hide = function (elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
};
// borrowed from jquery $(elem).is(':visible') implementation
exports.isVisible = function (elem) { return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)); };
exports.contains = function (haystack, needle) {
    if (typeof haystack.contains === 'function') {
        return haystack.contains(needle);
    }
};

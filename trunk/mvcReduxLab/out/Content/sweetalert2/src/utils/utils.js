"use strict";
exports.__esModule = true;
exports.consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */
exports.uniqueArray = function (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */
exports.toArray = function (nodeList) { return Array.prototype.slice.call(nodeList); };
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */
exports.formatInputOptions = function (inputOptions) {
    var result = [];
    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
        inputOptions.forEach(function (value, key) {
            result.push([key, value]);
        });
    }
    else {
        Object.keys(inputOptions).forEach(function (key) {
            result.push([key, inputOptions[key]]);
        });
    }
    return result;
};
/**
 * Standardise console warnings
 * @param message
 */
exports.warn = function (message) {
    console.warn(exports.consolePrefix + " " + message);
};
/**
 * Standardise console errors
 * @param message
 */
exports.error = function (message) {
    console.error(exports.consolePrefix + " " + message);
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
exports.warnOnce = function (message) {
    if (!previousWarnOnceMessages.includes(message)) {
        previousWarnOnceMessages.push(message);
        exports.warn(message);
    }
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */
exports.callIfFunction = function (arg) { return typeof arg === 'function' ? arg() : arg; };
exports.isPromise = function (arg) { return arg && Promise.resolve(arg) === arg; };

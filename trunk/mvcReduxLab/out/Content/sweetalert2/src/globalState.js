"use strict";
exports.__esModule = true;
var constants_js_1 = require("./constants.js");
var globalState = {};
exports["default"] = globalState;
// Restore previous active (focused) element
exports.restoreActiveElement = function () {
    return new Promise(function (resolve) {
        var x = window.scrollX;
        var y = window.scrollY;
        globalState.restoreFocusTimeout = setTimeout(function () {
            if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
                globalState.previousActiveElement.focus();
                globalState.previousActiveElement = null;
            }
            else if (document.body) {
                document.body.focus();
            }
            resolve();
        }, constants_js_1.RESTORE_FOCUS_TIMEOUT); // issues/900
        if (typeof x !== 'undefined' && typeof y !== 'undefined') { // IE doesn't have scrollX/scrollY support
            window.scrollTo(x, y);
        }
    });
};

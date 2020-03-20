"use strict";
exports.__esModule = true;
var scrollbarFix_js_1 = require("../utils/scrollbarFix.js");
var iosFix_js_1 = require("../utils/iosFix.js");
var ieFix_js_1 = require("../utils/ieFix.js");
var aria_js_1 = require("../utils/aria.js");
var dom = require("../utils/dom/index.js");
var classes_js_1 = require("../utils/classes.js");
var globalState_js_1 = require("../globalState.js");
var privateProps_js_1 = require("../privateProps.js");
var privateMethods_js_1 = require("../privateMethods.js");
/*
 * Instance method to close sweetAlert
 */
function close(resolveValue) {
    var container = dom.getContainer();
    var popup = dom.getPopup();
    var innerParams = privateProps_js_1["default"].innerParams.get(this);
    var swalPromiseResolve = privateMethods_js_1["default"].swalPromiseResolve.get(this);
    var onClose = innerParams.onClose;
    var onAfterClose = innerParams.onAfterClose;
    if (!popup) {
        return;
    }
    if (onClose !== null && typeof onClose === 'function') {
        onClose(popup);
    }
    dom.removeClass(popup, classes_js_1.swalClasses.show);
    dom.addClass(popup, classes_js_1.swalClasses.hide);
    var removePopupAndResetState = function () {
        if (!dom.isToast()) {
            globalState_js_1.restoreActiveElement().then(function () { return triggerOnAfterClose(onAfterClose); });
            globalState_js_1["default"].keydownTarget.removeEventListener('keydown', globalState_js_1["default"].keydownHandler, { capture: globalState_js_1["default"].keydownListenerCapture });
            globalState_js_1["default"].keydownHandlerAdded = false;
        }
        else {
            triggerOnAfterClose(onAfterClose);
        }
        if (container.parentNode) {
            container.parentNode.removeChild(container);
        }
        dom.removeClass([document.documentElement, document.body], [
            classes_js_1.swalClasses.shown,
            classes_js_1.swalClasses['height-auto'],
            classes_js_1.swalClasses['no-backdrop'],
            classes_js_1.swalClasses['toast-shown'],
            classes_js_1.swalClasses['toast-column']
        ]);
        if (dom.isModal()) {
            scrollbarFix_js_1.undoScrollbar();
            iosFix_js_1.undoIOSfix();
            ieFix_js_1.undoIEfix();
            aria_js_1.unsetAriaHidden();
        }
    };
    // If animation is supported, animate
    if (dom.animationEndEvent && !dom.hasClass(popup, classes_js_1.swalClasses.noanimation)) {
        popup.addEventListener(dom.animationEndEvent, function swalCloseEventFinished() {
            popup.removeEventListener(dom.animationEndEvent, swalCloseEventFinished);
            if (dom.hasClass(popup, classes_js_1.swalClasses.hide)) {
                removePopupAndResetState();
            }
        });
    }
    else {
        // Otherwise, remove immediately
        removePopupAndResetState();
    }
    // Resolve Swal promise
    swalPromiseResolve(resolveValue || {});
}
exports.close = close;
exports.closePopup = close;
exports.closeModal = close;
exports.closeToast = close;
var triggerOnAfterClose = function (onAfterClose) {
    if (onAfterClose !== null && typeof onAfterClose === 'function') {
        setTimeout(function () {
            onAfterClose();
        });
    }
};

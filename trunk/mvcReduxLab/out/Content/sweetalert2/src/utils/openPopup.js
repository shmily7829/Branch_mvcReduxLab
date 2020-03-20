"use strict";
exports.__esModule = true;
var dom = require("./dom/index.js");
var classes_js_1 = require("./classes.js");
var scrollbarFix_js_1 = require("./scrollbarFix.js");
var iosFix_js_1 = require("./iosFix.js");
var ieFix_js_1 = require("./ieFix.js");
var aria_js_1 = require("./aria.js");
var globalState_js_1 = require("../globalState.js");
/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */
exports.openPopup = function (params) {
    var container = dom.getContainer();
    var popup = dom.getPopup();
    if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
        params.onBeforeOpen(popup);
    }
    if (params.animation) {
        dom.addClass(popup, classes_js_1.swalClasses.show);
        dom.addClass(container, classes_js_1.swalClasses.fade);
        dom.removeClass(popup, classes_js_1.swalClasses.hide);
    }
    else {
        dom.removeClass(popup, classes_js_1.swalClasses.fade);
    }
    dom.show(popup);
    // scrolling is 'hidden' until animation is done, after that 'auto'
    container.style.overflowY = 'hidden';
    if (dom.animationEndEvent && !dom.hasClass(popup, classes_js_1.swalClasses.noanimation)) {
        popup.addEventListener(dom.animationEndEvent, function swalCloseEventFinished() {
            popup.removeEventListener(dom.animationEndEvent, swalCloseEventFinished);
            container.style.overflowY = 'auto';
        });
    }
    else {
        container.style.overflowY = 'auto';
    }
    dom.addClass([document.documentElement, document.body, container], classes_js_1.swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
        dom.addClass([document.documentElement, document.body], classes_js_1.swalClasses['height-auto']);
    }
    if (dom.isModal()) {
        if (params.scrollbarPadding) {
            scrollbarFix_js_1.fixScrollbar();
        }
        iosFix_js_1.iOSfix();
        ieFix_js_1.IEfix();
        aria_js_1.setAriaHidden();
        // sweetalert2/issues/1247
        setTimeout(function () {
            container.scrollTop = 0;
        });
    }
    if (!dom.isToast() && !globalState_js_1["default"].previousActiveElement) {
        globalState_js_1["default"].previousActiveElement = document.activeElement;
    }
    if (params.onOpen !== null && typeof params.onOpen === 'function') {
        setTimeout(function () {
            params.onOpen(popup);
        });
    }
};

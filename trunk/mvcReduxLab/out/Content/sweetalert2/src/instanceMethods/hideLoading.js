"use strict";
exports.__esModule = true;
var dom = require("../utils/dom/index.js");
var classes_js_1 = require("../utils/classes.js");
var privateProps_js_1 = require("../privateProps.js");
/**
 * Enables buttons and hide loader.
 */
function hideLoading() {
    var innerParams = privateProps_js_1["default"].innerParams.get(this);
    var domCache = privateProps_js_1["default"].domCache.get(this);
    if (!innerParams.showConfirmButton) {
        dom.hide(domCache.confirmButton);
        if (!innerParams.showCancelButton) {
            dom.hide(domCache.actions);
        }
    }
    dom.removeClass([domCache.popup, domCache.actions], classes_js_1.swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
}
exports.hideLoading = hideLoading;
exports.disableLoading = hideLoading;

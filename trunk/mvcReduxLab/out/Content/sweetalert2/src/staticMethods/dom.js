"use strict";
exports.__esModule = true;
var dom = require("../utils/dom/index.js");
var domUtils = require("../utils/dom/domUtils.js");
var index_js_1 = require("../utils/dom/index.js");
exports.getContainer = index_js_1.getContainer;
exports.getPopup = index_js_1.getPopup;
exports.getTitle = index_js_1.getTitle;
exports.getContent = index_js_1.getContent;
exports.getImage = index_js_1.getImage;
exports.getIcons = index_js_1.getIcons;
exports.getCloseButton = index_js_1.getCloseButton;
exports.getActions = index_js_1.getActions;
exports.getConfirmButton = index_js_1.getConfirmButton;
exports.getCancelButton = index_js_1.getCancelButton;
exports.getFooter = index_js_1.getFooter;
exports.getFocusableElements = index_js_1.getFocusableElements;
exports.getValidationMessage = index_js_1.getValidationMessage;
exports.isLoading = index_js_1.isLoading;
/*
 * Global function to determine if SweetAlert2 popup is shown
 */
exports.isVisible = function () {
    return domUtils.isVisible(dom.getPopup());
};
/*
 * Global function to click 'Confirm' button
 */
exports.clickConfirm = function () { return dom.getConfirmButton().click(); };
/*
 * Global function to click 'Cancel' button
 */
exports.clickCancel = function () { return dom.getCancelButton().click(); };

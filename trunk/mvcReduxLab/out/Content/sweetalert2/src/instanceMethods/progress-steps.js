"use strict";
exports.__esModule = true;
var dom = require("../utils/dom/index.js");
var privateProps_js_1 = require("../privateProps.js");
function getProgressSteps() {
    var innerParams = privateProps_js_1["default"].innerParams.get(this);
    return innerParams.progressSteps;
}
exports.getProgressSteps = getProgressSteps;
function setProgressSteps(progressSteps) {
    var innerParams = privateProps_js_1["default"].innerParams.get(this);
    var updatedParams = Object.assign({}, innerParams, { progressSteps: progressSteps });
    privateProps_js_1["default"].innerParams.set(this, updatedParams);
    dom.renderProgressSteps(updatedParams);
}
exports.setProgressSteps = setProgressSteps;
function showProgressSteps() {
    var domCache = privateProps_js_1["default"].domCache.get(this);
    dom.show(domCache.progressSteps);
}
exports.showProgressSteps = showProgressSteps;
function hideProgressSteps() {
    var domCache = privateProps_js_1["default"].domCache.get(this);
    dom.hide(domCache.progressSteps);
}
exports.hideProgressSteps = hideProgressSteps;

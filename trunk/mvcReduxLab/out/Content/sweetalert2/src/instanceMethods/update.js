"use strict";
exports.__esModule = true;
var dom = require("../../src/utils/dom/index.js");
var utils_js_1 = require("../../src/utils/utils.js");
var sweetalert2_js_1 = require("../sweetalert2.js");
var privateProps_js_1 = require("../privateProps.js");
/**
 * Updates popup options.
 */
function update(params) {
    var validUpdatableParams = {};
    // assign valid params from `params` to `defaults`
    Object.keys(params).forEach(function (param) {
        if (sweetalert2_js_1["default"].isUpdatableParameter(param)) {
            validUpdatableParams[param] = params[param];
        }
        else {
            utils_js_1.warn("Invalid parameter to update: \"" + param + "\". Updatable params are listed here: TODO (@limonte) add link");
        }
    });
    var innerParams = privateProps_js_1["default"].innerParams.get(this);
    var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    // Actions
    dom.renderActions(updatedParams);
    // Content
    dom.renderContent(updatedParams);
    // Icon
    dom.renderIcon(updatedParams);
    // Image
    dom.renderImage(updatedParams);
    // Progress steps
    dom.renderProgressSteps(updatedParams);
    // Title
    dom.renderTitle(updatedParams);
    privateProps_js_1["default"].innerParams.set(this, updatedParams);
}
exports.update = update;

"use strict";
exports.__esModule = true;
var classes_js_1 = require("../../classes.js");
var utils_js_1 = require("../../utils.js");
var dom = require("../../dom/index.js");
var sweetalert2_js_1 = require("../../../sweetalert2.js");
exports.renderIcon = function (params) {
    var icons = dom.getIcons();
    for (var i = 0; i < icons.length; i++) {
        dom.hide(icons[i]);
    }
    if (params.type) {
        if (Object.keys(classes_js_1.iconTypes).indexOf(params.type) !== -1) {
            var icon = sweetalert2_js_1["default"].getPopup().querySelector("." + classes_js_1.swalClasses.icon + "." + classes_js_1.iconTypes[params.type]);
            dom.show(icon);
            // Animate icon
            if (params.animation) {
                dom.addClass(icon, "swal2-animate-" + params.type + "-icon");
            }
        }
        else {
            utils_js_1.error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"" + params.type + "\"");
        }
    }
};

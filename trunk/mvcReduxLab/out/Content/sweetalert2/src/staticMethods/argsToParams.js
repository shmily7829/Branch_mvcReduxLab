"use strict";
exports.__esModule = true;
var utils_js_1 = require("../utils/utils.js");
exports.argsToParams = function (args) {
    var params = {};
    switch (typeof args[0]) {
        case 'object':
            Object.assign(params, args[0]);
            break;
        default:
            ['title', 'html', 'type'].forEach(function (name, index) {
                switch (typeof args[index]) {
                    case 'string':
                        params[name] = args[index];
                        break;
                    case 'undefined':
                        break;
                    default:
                        utils_js_1.error("Unexpected type of " + name + "! Expected \"string\", got " + typeof args[index]);
                }
            });
    }
    return params;
};

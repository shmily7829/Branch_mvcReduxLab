"use strict";
exports.__esModule = true;
var utils_js_1 = require("./utils/utils.js");
var DismissReason_js_1 = require("./utils/DismissReason.js");
var staticMethods = require("./staticMethods.js");
var instanceMethods = require("./instanceMethods.js");
var privateProps_js_1 = require("./privateProps.js");
var currentInstance;
// SweetAlert constructor
function SweetAlert() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Prevent run in Node env
    /* istanbul ignore if */
    if (typeof window === 'undefined') {
        return;
    }
    // Check for the existence of Promise
    /* istanbul ignore if */
    if (typeof Promise === 'undefined') {
        utils_js_1.error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
    }
    currentInstance = this;
    var outerParams = Object.freeze(this.constructor.argsToParams(args));
    Object.defineProperties(this, {
        params: {
            value: outerParams,
            writable: false,
            enumerable: true
        }
    });
    var promise = this._main(this.params);
    privateProps_js_1["default"].promise.set(this, promise);
}
// `catch` cannot be the name of a module export, so we define our thenable methods here instead
SweetAlert.prototype.then = function (onFulfilled) {
    var promise = privateProps_js_1["default"].promise.get(this);
    return promise.then(onFulfilled);
};
SweetAlert.prototype["finally"] = function (onFinally) {
    var promise = privateProps_js_1["default"].promise.get(this);
    return promise["finally"](onFinally);
};
// Assign instance methods from src/instanceMethods/*.js to prototype
Object.assign(SweetAlert.prototype, instanceMethods);
// Assign static methods from src/staticMethods/*.js to constructor
Object.assign(SweetAlert, staticMethods);
// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (currentInstance) {
            return currentInstance[key].apply(currentInstance, args);
        }
    };
});
SweetAlert.DismissReason = DismissReason_js_1.DismissReason;
SweetAlert.version = '8.2.4';
exports["default"] = SweetAlert;

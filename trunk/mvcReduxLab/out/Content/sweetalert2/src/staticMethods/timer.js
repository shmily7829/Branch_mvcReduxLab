"use strict";
exports.__esModule = true;
var globalState_js_1 = require("../globalState.js");
/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */
exports.getTimerLeft = function () {
    return globalState_js_1["default"].timeout && globalState_js_1["default"].timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
exports.stopTimer = function () {
    return globalState_js_1["default"].timeout && globalState_js_1["default"].timeout.stop();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
exports.resumeTimer = function () {
    return globalState_js_1["default"].timeout && globalState_js_1["default"].timeout.start();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
exports.toggleTimer = function () {
    var timer = globalState_js_1["default"].timeout;
    return timer && (timer.running ? timer.stop() : timer.start());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */
exports.increaseTimer = function (n) {
    return globalState_js_1["default"].timeout && globalState_js_1["default"].timeout.increase(n);
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */
exports.isTimerRunning = function () {
    return globalState_js_1["default"].timeout && globalState_js_1["default"].timeout.isRunning();
};

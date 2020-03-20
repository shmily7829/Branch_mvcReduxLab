"use strict";
exports.__esModule = true;
var classes_js_1 = require("../../classes.js");
var utils_js_1 = require("../../utils.js");
var dom = require("../../dom/index.js");
var sweetalert2_js_1 = require("../../../sweetalert2.js");
exports.renderProgressSteps = function (params) {
    var progressStepsContainer = dom.getProgressSteps();
    var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetalert2_js_1["default"].getQueueStep() : params.currentProgressStep, 10);
    if (params.progressSteps && params.progressSteps.length) {
        dom.show(progressStepsContainer);
        progressStepsContainer.innerHTML = '';
        if (currentProgressStep >= params.progressSteps.length) {
            utils_js_1.warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' +
                '(currentProgressStep like JS arrays starts from 0)');
        }
        params.progressSteps.forEach(function (step, index) {
            var stepEl = document.createElement('li');
            dom.addClass(stepEl, classes_js_1.swalClasses['progress-step']);
            stepEl.innerHTML = step;
            if (index === currentProgressStep) {
                dom.addClass(stepEl, classes_js_1.swalClasses['active-progress-step']);
            }
            progressStepsContainer.appendChild(stepEl);
            if (index !== params.progressSteps.length - 1) {
                var line = document.createElement('li');
                dom.addClass(line, classes_js_1.swalClasses['progress-step-line']);
                if (params.progressStepsDistance) {
                    line.style.width = params.progressStepsDistance;
                }
                progressStepsContainer.appendChild(line);
            }
        });
    }
    else {
        dom.hide(progressStepsContainer);
    }
};

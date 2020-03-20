"use strict";
exports.__esModule = true;
// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */
exports.queue = function (steps) {
    var Swal = this;
    currentSteps = steps;
    var resetQueue = function () {
        currentSteps = [];
        document.body.removeAttribute('data-swal2-queue-step');
    };
    var queueResult = [];
    return new Promise(function (resolve) {
        (function step(i, callback) {
            if (i < currentSteps.length) {
                document.body.setAttribute('data-swal2-queue-step', i);
                Swal.fire(currentSteps[i]).then(function (result) {
                    if (typeof result.value !== 'undefined') {
                        queueResult.push(result.value);
                        step(i + 1, callback);
                    }
                    else {
                        resetQueue();
                        resolve({ dismiss: result.dismiss });
                    }
                });
            }
            else {
                resetQueue();
                resolve({ value: queueResult });
            }
        })(0);
    });
};
/*
 * Global function for getting the index of current popup in queue
 */
exports.getQueueStep = function () { return document.body.getAttribute('data-swal2-queue-step'); };
/*
 * Global function for inserting a popup to the queue
 */
exports.insertQueueStep = function (step, index) {
    if (index && index < currentSteps.length) {
        return currentSteps.splice(index, 0, step);
    }
    return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */
exports.deleteQueueStep = function (index) {
    if (typeof currentSteps[index] !== 'undefined') {
        currentSteps.splice(index, 1);
    }
};

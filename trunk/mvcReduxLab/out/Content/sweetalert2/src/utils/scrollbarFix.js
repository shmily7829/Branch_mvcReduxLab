"use strict";
exports.__esModule = true;
var dom = require("./dom/index.js");
exports.fixScrollbar = function () {
    // for queues, do not do this more than once
    if (dom.states.previousBodyPadding !== null) {
        return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight) {
        // add padding so the content doesn't shift after removal of scrollbar
        dom.states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
        document.body.style.paddingRight = (dom.states.previousBodyPadding + dom.measureScrollbar()) + 'px';
    }
};
exports.undoScrollbar = function () {
    if (dom.states.previousBodyPadding !== null) {
        document.body.style.paddingRight = dom.states.previousBodyPadding + 'px';
        dom.states.previousBodyPadding = null;
    }
};

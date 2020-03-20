"use strict";
exports.__esModule = true;
// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
exports.measureScrollbar = function () {
    var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if (supportsTouch) {
        return 0;
    }
    var scrollDiv = document.createElement('div');
    scrollDiv.style.width = '50px';
    scrollDiv.style.height = '50px';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
};

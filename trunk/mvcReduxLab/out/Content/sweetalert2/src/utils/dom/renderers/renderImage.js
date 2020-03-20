"use strict";
exports.__esModule = true;
var classes_js_1 = require("../../classes.js");
var dom = require("../../dom/index.js");
exports.renderImage = function (params) {
    var image = dom.getImage();
    if (params.imageUrl) {
        image.setAttribute('src', params.imageUrl);
        image.setAttribute('alt', params.imageAlt);
        dom.show(image);
        if (params.imageWidth) {
            image.setAttribute('width', params.imageWidth);
        }
        else {
            image.removeAttribute('width');
        }
        if (params.imageHeight) {
            image.setAttribute('height', params.imageHeight);
        }
        else {
            image.removeAttribute('height');
        }
        image.className = classes_js_1.swalClasses.image;
        if (params.imageClass) {
            dom.addClass(image, params.imageClass);
        }
    }
    else {
        dom.hide(image);
    }
};

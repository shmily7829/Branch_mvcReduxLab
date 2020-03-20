"use strict";
exports.__esModule = true;
var classes_js_1 = require("../../classes.js");
var dom = require("../../dom/index.js");
exports.renderContent = function (params) {
    var content = dom.getContent().querySelector('#' + classes_js_1.swalClasses.content);
    // Content as HTML
    if (params.html) {
        dom.parseHtmlToContainer(params.html, content);
        // Content as plain text
    }
    else if (params.text) {
        content.textContent = params.text;
        dom.show(content);
    }
    else {
        dom.hide(content);
    }
};

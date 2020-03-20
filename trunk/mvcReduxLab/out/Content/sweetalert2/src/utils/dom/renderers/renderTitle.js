"use strict";
exports.__esModule = true;
var dom = require("../../dom/index.js");
exports.renderTitle = function (params) {
    var title = dom.getTitle();
    if (params.titleText) {
        title.innerText = params.titleText;
    }
    else if (params.title) {
        if (typeof params.title === 'string') {
            params.title = params.title.split('\n').join('<br />');
        }
        dom.parseHtmlToContainer(params.title, title);
    }
};

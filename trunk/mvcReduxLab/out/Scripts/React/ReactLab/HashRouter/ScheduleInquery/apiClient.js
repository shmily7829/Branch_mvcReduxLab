"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
exports["default"] = {
    StartPort: function (args) {
        var url = '/MA08/MA080102/GetStartPort';
        return axios_1["default"].post(url, args);
    },
    EndPort: function (args) {
        var url = '/MA08/MA080102/GetEndPort';
        return axios_1["default"].post(url, args);
    }
};

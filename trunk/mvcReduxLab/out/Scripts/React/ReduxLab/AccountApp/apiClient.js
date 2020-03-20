"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
exports["default"] = {
    SaveFormData: function (formData) {
        var url = '/ReduxLab/AccountApp/SaveFormData';
        return axios_1["default"].post(url, { formData: formData });
    },
    LoadFormData: function (args) {
        var url = '/ReduxLab/AccountApp/LoadFormData';
        return axios_1["default"].post(url, args);
    }
};

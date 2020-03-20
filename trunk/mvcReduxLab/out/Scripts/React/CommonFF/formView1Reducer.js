"use strict";
exports.__esModule = true;
var actions_js_1 = require("./actions.js");
var initialState = {
    recUnit: ''
};
var formView1Reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var _a;
    //console.log('formView1Reducer', state, action)
    var match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'formView1Reducer';
    if (!match)
        return state;
    switch (action.type) {
        case actions_js_1.Ks.ASSIGN_VALUE:
            return Object.assign({}, state, (_a = {}, _a[action.name] = action.value, _a));
        case actions_js_1.Ks.ASSIGN_FROM_DATA_1:
            return Object.assign({}, state, action.formData1);
        default:
            return state;
    }
};
exports["default"] = formView1Reducer;

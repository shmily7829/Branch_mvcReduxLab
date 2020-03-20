"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var actions_js_1 = require("CommonFF/actions.js");
var initialState = {
    name: '',
    email: '',
    mobilePhone: ''
};
function accountReducer(state, action) {
    if (state === void 0) { state = initialState; }
    var _a;
    //console.log('accountReducer', state, action)
    var match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'accountReducer';
    if (!match)
        return state;
    switch (action.type) {
        case actions_js_1.Ks.ASSIGN_VALUE:
            /// action = { type, name, value }
            return __assign({}, state, (_a = {}, _a[action.name] = action.value, _a));
        case actions_js_1.Ks.ASSIGN_STATE_PROPS:
            /// action = { type, properties }
            return __assign({}, state, (action.properties));
        case actions_js_1.Ks.FILL_FORM_DATA:
            /// action = { type, formData }
            return __assign({}, state, (action.formData.accountInfo));
        default:
            return state;
    }
}
exports["default"] = accountReducer;

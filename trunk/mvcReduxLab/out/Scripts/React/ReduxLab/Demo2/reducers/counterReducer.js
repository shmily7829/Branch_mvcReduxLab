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
    count: 0,
    num: 3
};
function counterReducer(state, action) {
    if (state === void 0) { state = initialState; }
    var _a;
    //console.log('formView1Reducer', state, action)
    var match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'counterReducer';
    if (!match)
        return state;
    switch (action.type) {
        case actions_js_1.Ks.ASSIGN_VALUE:
            return __assign({}, state, (_a = {}, _a[action.name] = action.value, _a));
        //return Object.assign({}, state, { [action.name]: action.value });
        case actions_js_1.Ks.ASSIGN_STATE_PROPS:
        case actions_js_1.Ks.ASSIGN_PROPS:
            return __assign({}, state, (action.properties));
        case 'INCREASE_COUNT':
            return __assign({}, state, { count: state.count + 1 });
        case 'DECREASE_COUNT':
            return __assign({}, state, { count: state.count - 1 });
        default:
            return state;
    }
}
exports["default"] = counterReducer;

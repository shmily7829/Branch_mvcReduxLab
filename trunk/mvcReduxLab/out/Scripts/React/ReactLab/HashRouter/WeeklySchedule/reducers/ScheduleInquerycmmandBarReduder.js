"use strict";
exports.__esModule = true;
var actions_js_1 = require("CommonFF/actions.js");
var initialState = {
    form_no: '',
    form_mode: '',
    view_only: false
};
function cmmandBarReduder(state, action) {
    if (state === void 0) { state = initialState; }
    var _a;
    //console.log('formView1Reducer', state, action)
    var match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'cmmandBarReduder';
    if (!match)
        return state;
    switch (action.type) {
        case actions_js_1.Ks.ASSIGN_VALUE:
            return Object.assign({}, state, (_a = {}, _a[action.name] = action.value, _a));
        case actions_js_1.Ks.ASSIGN_STATE_PROPS:
            return Object.assign({}, state, action.properties);
        case actions_js_1.Ks.SETUP_FROM_MODE:
            return Object.assign({}, state, action.formAttrs);
        default:
            return state;
    }
}
exports["default"] = cmmandBarReduder;

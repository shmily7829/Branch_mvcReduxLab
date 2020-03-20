"use strict";
exports.__esModule = true;
var actions_js_1 = require("CommonFF/actions.js");
/// itemList
//const initialState = ['Apple', 'Samsung', 'Sony', 'ASUS']
var initialState = [
    { name: 'Apple', count: 0 },
    { name: 'Samsung', count: 0 },
    { name: 'Sony', count: 0 },
    { name: 'ASUS', count: 0 }
];
function listerReducer(state, action) {
    if (state === void 0) { state = initialState; }
    //console.log('listerReducer', state, action)
    var match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'listerReducer';
    if (!match)
        return state;
    switch (action.type) {
        case actions_js_1.Ks.INSERT_ITEM:
            {
                var itemList = state.slice();
                itemList.push(action.payload);
                return itemList;
            }
        case actions_js_1.Ks.UPDATE_ITEM:
            {
                var itemList = state.slice();
                itemList[action.index] = action.payload;
                return itemList;
            }
        case actions_js_1.Ks.REMOVE_ITEM:
            {
                var itemList = state.slice();
                itemList.splice(action.index, 1);
                return itemList;
            }
        default:
            return state;
    }
}
exports["default"] = listerReducer;

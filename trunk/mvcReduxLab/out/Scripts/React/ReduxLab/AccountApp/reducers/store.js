"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var appHelperReducer_js_1 = require("CommonFF/appHelperReducer.js");
var accountReducer_js_1 = require("./accountReducer.js");
var userReducer_js_1 = require("./userReducer.js");
var rootReducer = redux_1.combineReducers({
    appInfo: appHelperReducer_js_1["default"],
    accountInfo: accountReducer_js_1["default"],
    userInfo: userReducer_js_1["default"]
});
var store = redux_1.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
exports["default"] = store;

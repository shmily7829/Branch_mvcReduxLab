"use strict";
exports.__esModule = true;
var actions_js_1 = require("./actions.js");
var initialState = {
    functionId: undefined,
    appTitle: undefined,
    appId: undefined,
    antiForgeryToken: undefined,
    authToken: undefined,
    entryFormNo: undefined,
    entryMode: undefined,
    loginUserInfo: undefined,
    blocking: false,
    errorList: []
};
//    errorList: [
//        { caption: '錯誤訊息', message: '我是測試用錯誤訊息。我是測試用錯誤訊息。我是測試用錯誤訊息。' },
//        { caption: '邏輯錯誤', message: '我是邏輯錯誤' },
//        { caption: '系統錯誤', message: '我是系統錯誤' },
//    ]
var appHelperReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var _a;
    //console.log('formView1Reducer', state, action)
    var match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'appHelperReducer';
    if (!match)
        return state;
    switch (action.type) {
        case actions_js_1.Ks.ASSIGN_VALUE:
            return Object.assign({}, state, (_a = {}, _a[action.name] = action.value, _a));
        case actions_js_1.Ks.SETUP_APP_INFO:
            return Object.assign({}, state, {
                functionId: action.appInfo.functionId,
                appTitle: action.appInfo.appTitle,
                appId: action.appInfo.appId,
                antiForgeryToken: action.appInfo.antiForgeryToken,
                loginUserInfo: action.appInfo.loginUserInfo,
                entryFormNo: action.appInfo.entryFormNo,
                entryMode: action.appInfo.entryMode
            });
        case actions_js_1.Ks.SET_BLOCKING:
            return Object.assign({}, state, { blocking: action.flag });
        case actions_js_1.Ks.ADD_ERROR_MESSAGE:
            {
                var _b = action.payload, caption = _b.caption, message = _b.message; // 解析封包
                var errorList = state.errorList.slice(); // copy array
                errorList.push({ caption: caption, message: message });
                return Object.assign({}, state, { errorList: errorList });
            }
        default:
            return state;
    }
};
exports["default"] = appHelperReducer;

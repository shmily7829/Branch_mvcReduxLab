"use strict";
exports.__esModule = true;
var actionBase_js_1 = require("./actionBase.js");
//== constants - string ==========================================
/// 常數字串。用以避免打錯字的冏狀。
exports.Ks = Object.assign(actionBase_js_1.Ks, {
/// 往下新增或 overriding
/// 一些範例
//ASSIGN_VALUE_EX1: 'ASSIGN_VALUE_EX1',
//ASSIGN_VALUE_EX2: 'ASSIGN_VALUE_EX2',
//ASSIGN_VALUE_EX3: 'ASSIGN_VALUE_EX3',
});
//== actions =====================================================
/// 數據封包
exports["default"] = Object.assign(actionBase_js_1["default"], {
/// 往下新增或 overriding
/// 一些範例
//assignValueEx1: (targetReducer) => {
//    return {
//        type: Ks.ASSIGN_VALUE_EX1,
//        targetReducer: targetReducer
//    }
//},
//assignValueEx2: (targetReducer) => {
//    return {
//        type: Ks.ASSIGN_VALUE_EX2,
//        targetReducer: targetReducer
//    }
//}
});

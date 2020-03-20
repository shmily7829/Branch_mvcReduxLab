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
var actions_js_1 = require("../../../CommonFF/actions.js");
var initialState = {
    // 查詢條件
    qryParams: {},
    // 分頁資訊
    dataList: [{
            value1: 'ATXG108001727',
            value2: '015990 (BR4042)',
            value3: '臺港22602號 (TIPM22602)'
        }, {
            value1: 'ATXG108001725',
            value2: 'V00813 (A8LW3)',
            value3: '皇帝 (OCEAN EMPEROR)'
        }, {
            value1: 'ATXG108001727',
            value2: '015990 (BR4042)',
            value3: '臺港22602號 (TIPM22602)'
        }, {
            value1: 'ATXG108001727',
            value2: '015990 (BR4042)',
            value3: '臺港22602號 (TIPM22602)'
        }, {
            value1: 'ATXG108001727',
            value2: '015990 (BR4042)',
            value3: '臺港22602號 (TIPM22602)'
        }, {
            value1: 'ATXG108001727',
            value2: '015990 (BR4042)',
            value3: '臺港22602號 (TIPM22602)'
        }, {
            value1: 'ATXG108001727',
            value2: '015990 (BR4042)',
            value3: '臺港22602號 (TIPM22602)'
        }, {
            value1: 'ATXG108001727',
            value2: '015990 (BR4042)',
            value3: '臺港22602號 (TIPM22602)'
        }, {
            value1: 'ATXG108001727',
            value2: '015990 (BR4042)',
            value3: '臺港22602號 (TIPM22602)'
        }, {
            value1: 'ATXG108001727',
            value2: '015990 (BR4042)',
            value3: '臺港22602號 (TIPM22602)'
        }
    ],
    form_no: '',
    view_only: false,
    totalCount: 0,
    pageCount: 0,
    pageSelected: 0,
    pageSize: 10,
    // UI控制
    form_mode: 'QUERY',
    // 資料明細
    dataInfo: {},
    // PDF報表檔URL
    fileUrl: null
};
var SuspendAnnounceReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var _a;
    //console.log('formView1Reducer', state, action)
    var match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'SuspendAnnounceReducer';
    if (!match)
        return state;
    switch (action.type) {
        case actions_js_1.Ks.SETUP_FROM_MODE:
            return __assign({}, state, { form_mode: action.form_mode });
        case actions_js_1.Ks.ASSIGN_VALUE:
            return __assign({}, state, (_a = {}, _a[action.name] = action.value, _a));
        //return Object.assign({}, state, { [action.name]: action.value });
        case actions_js_1.Ks.ASSIGN_STATE_PROPS:
            return __assign({}, state, (action.properties));
        //return Object.assign({}, state, action.properties);
        default:
            return state;
    }
};
exports["default"] = SuspendAnnounceReducer;

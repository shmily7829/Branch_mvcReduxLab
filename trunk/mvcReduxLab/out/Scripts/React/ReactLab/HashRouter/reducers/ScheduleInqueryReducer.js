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
var nowDate = new Date();
var getNowDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
    nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate();
var initialState = {
    // 查詢條件
    qryParams: {},
    startPort: {},
    // 分頁資訊
    dataList: [{
            value1: getNowDate + ' 07:00',
            value2: getNowDate + ' 07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: getNowDate + ' 07:00',
            value2: getNowDate + ' 07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: getNowDate + ' 10:00',
            value2: getNowDate + ' 10:00',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: getNowDate + ' 10:00',
            value2: getNowDate + ' 10:00',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: getNowDate + ' 15:30',
            value2: getNowDate + ' 15:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: getNowDate + ' 15:30',
            value2: getNowDate + ' 15:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: getNowDate + ' 18:00',
            value2: getNowDate + ' 18:00',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: getNowDate + ' 18:00',
            value2: getNowDate + ' 18:00',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        },
    ],
    dataList2: [{
            value1: '2019/04/01 07:00',
            value2: '2019/04/01 07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/01 07:00',
            value2: '2019/04/01  07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/01 15:00',
            value2: '2019/04/01 15:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/01 18:00',
            value2: '2019/04/01  18:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        },
        {
            value1: '2019/04/02 07:00',
            value2: '2019/04/02 07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/02 07:00',
            value2: '2019/04/02  07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/02 15:00',
            value2: '2019/04/02 15:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/02 18:00',
            value2: '2019/04/02  18:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        },
        {
            value1: '2019/04/03 07:00',
            value2: '2019/04/03 07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/03 07:00',
            value2: '2019/04/03  07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/03 15:00',
            value2: '2019/04/03 15:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/03 18:00',
            value2: '2019/04/03  18:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        },
    ],
    dataList3: [{
            value1: '2019/04/01 07:00',
            value2: '2019/04/01 07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/01 07:00',
            value2: '2019/04/01  07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/01 15:00',
            value2: '2019/04/01 15:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/01 18:00',
            value2: '2019/04/01  18:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        },
        {
            value1: '2019/04/02 07:00',
            value2: '2019/04/02 07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/02 07:00',
            value2: '2019/04/02  07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/02 15:00',
            value2: '2019/04/02 15:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/02 18:00',
            value2: '2019/04/02  18:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        },
        {
            value1: '2019/04/03 07:00',
            value2: '2019/04/03 07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/03 07:00',
            value2: '2019/04/03  07:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/03 15:00',
            value2: '2019/04/03 15:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        }, {
            value1: '2019/04/03 18:00',
            value2: '2019/04/03  18:30',
            value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
        },
    ],
    form_no: '',
    view_only: false,
    totalCount: 0,
    pageCount: 0,
    pageSelected: 0,
    pageSize: 10,
    // UI控制
    form_mode: 'QUERY',
    queryMode: 'TODAY',
    // 資料明細
    dataInfo: {
        itemList: [
            { value1: '小琉球大福漁港', value2: '', value3: getNowDate + ' 07:00', value4: '準點' },
            { value1: '東港鹽埔漁港', value2: getNowDate + ' 07:30', value3: getNowDate + ' 08:00', value4: '準點' },
            { value1: '小琉球大福漁港', value2: getNowDate + ' 08:30', value3: '', value4: '準點' },
        ],
        itemList2: [
            { value1: '小琉球大福漁港', value2: '', value3: getNowDate + ' 07:00', value4: '準點' },
            { value1: '東港鹽埔漁港', value2: getNowDate + ' 07:30', value3: getNowDate + ' 08:00', value4: '準點' },
            { value1: '小琉球大福漁港', value2: getNowDate + ' 08:30', value3: '', value4: '準點' },
        ],
        itemList3: [
            { value1: '小琉球大福漁港', value2: '', value3: getNowDate + ' 07:00', value4: '準點' },
            { value1: '東港鹽埔漁港', value2: getNowDate + ' 07:30', value3: getNowDate + ' 08:00', value4: '準點' },
            { value1: '小琉球大福漁港', value2: getNowDate + ' 08:30', value3: '', value4: '準點' },
        ]
    },
    // PDF報表檔URL
    fileUrl: null
};
var ScheduleInqueryReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var _a;
    //console.log('formView1Reducer', state, action)
    var match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'ScheduleInqueryReducer';
    if (!match)
        return state;
    switch (action.type) {
        case actions_js_1.Ks.SETUP_FROM_MODE:
            console.log("ScheduleInqueryReducer SETUP", action.queryType);
            return __assign({}, state, { form_mode: action.form_mode, queryType: action.queryType });
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
exports["default"] = ScheduleInqueryReducer;

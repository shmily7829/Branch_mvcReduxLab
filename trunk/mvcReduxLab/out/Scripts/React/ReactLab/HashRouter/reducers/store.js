"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var appHelperReducer_js_1 = require("CommonFF/appHelperReducer.js");
//import commandBar from './cmmandBarReduder.js'
var RescheduleAnnounceReducer_js_1 = require("./RescheduleAnnounceReducer.js");
var ScheduleInqueryReducer_js_1 = require("./ScheduleInqueryReducer.js");
var SuspendAnnounceReducer_js_1 = require("./SuspendAnnounceReducer.js");
var TodayScheduleReducer_js_1 = require("./TodayScheduleReducer.js");
var WeeklyScheduleReducer_js_1 = require("./WeeklyScheduleReducer.js");
var rootReducer = redux_1.combineReducers({
    appInfo: appHelperReducer_js_1["default"],
    //old
    //commandBar, 
    SuspendAnnounceData: SuspendAnnounceReducer_js_1["default"],
    RescheduleAnnounceData: RescheduleAnnounceReducer_js_1["default"],
    TodayScheduleData: TodayScheduleReducer_js_1["default"],
    WeeklyScheduleData: WeeklyScheduleReducer_js_1["default"],
    ScheduleInqueryData: ScheduleInqueryReducer_js_1["default"]
});
var store = redux_1.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
exports["default"] = store;

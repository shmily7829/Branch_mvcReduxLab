"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
require("babel-polyfill");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var store_js_1 = require("./reducers/store.js");
var AppHelper_js_1 = require("CommonFF/AppHelper.js");
var AppIndex_js_1 = require("./AppIndex.js");
//import SuspendAnnounce from './SuspendAnnounce/AppForm'
//import RescheduleAnnounce from './RescheduleAnnounce/AppForm'
//import TodaySchedule from './TodaySchedule/AppForm'
//import WeeklySchedule from './WeeklySchedule/AppForm'
//import ScheduleInquery from './ScheduleInquery/AppForm'
var SuspendAnnounce_js_1 = require("./SuspendAnnounce.js");
var RescheduleAnnounce_js_1 = require("./RescheduleAnnounce.js");
var TodaySchedule_js_1 = require("./TodaySchedule.js");
var WeeklySchedule_js_1 = require("./WeeklySchedule.js");
var ScheduleInquery_js_1 = require("./ScheduleInquery.js");
//axios.defaults.headers.common['Authorization'] = 'Bearer ' + AuthToken;
axios_1["default"].defaults.headers.common['RequestVerificationToken'] = globalappinfo.antiForgeryToken;
axios_1["default"].defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // mark as an ajax request
axios_1["default"].defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (<react_redux_1.Provider store={store_js_1["default"]}>
                <react_router_dom_1.HashRouter>
                    <div>
                        <AppHelper_js_1["default"] appInfo={globalappinfo} noInitFormMode/>
                        <react_router_dom_1.Route exact path="/" component={AppIndex_js_1["default"]}/>
                        <react_router_dom_1.Route path="/SuspendAnnounce" component={SuspendAnnounce_js_1["default"]}/>
                        <react_router_dom_1.Route path="/RescheduleAnnounce" component={RescheduleAnnounce_js_1["default"]}/>
                        <react_router_dom_1.Route path="/TodaySchedule" component={TodaySchedule_js_1["default"]}/>
                        <react_router_dom_1.Route path="/WeeklySchedule" component={WeeklySchedule_js_1["default"]}/>
                        <react_router_dom_1.Route path="/ScheduleInquery" component={ScheduleInquery_js_1["default"]}/>
                    </div>
                </react_router_dom_1.HashRouter>
            </react_redux_1.Provider>);
    };
    return App;
}(react_1.Component));
react_dom_1["default"].render(<App />, document.getElementById('app'));

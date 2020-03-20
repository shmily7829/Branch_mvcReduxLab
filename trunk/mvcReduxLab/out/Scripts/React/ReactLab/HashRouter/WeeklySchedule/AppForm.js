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
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_js_1 = require("CommonFF/actions.js");
//import apiClient from './apiClient.js'
var AppHelper_js_1 = require("CommonFF/AppHelper.js");
var TitleWidget_js_1 = require("CommonMA/TitleWidget.js");
var reactstrap_1 = require("reactstrap");
var DataSearch_js_1 = require("./DataSearch.js");
var DataLister_js_1 = require("./DataLister.js");
var DataInfo_js_1 = require("./DataInfo.js");
var targetReducer = 'WeeklyScheduleReducer';
var AppForm = /** @class */ (function (_super) {
    __extends(AppForm, _super);
    function AppForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.handleValueChange = _this.handleValueChange.bind(_this);
        _this.handleToggle = _this.handleToggle.bind(_this);
        return _this;
    }
    AppForm.prototype.componentWillMount = function () {
        ///!!! 先讓原型能跑再補到正確的碼
        var appInfo = globalappinfo; // 取環境參數
        if (appInfo.entryMode === 'INIT') {
            // 查詢模式
            this.props.dispatch({
                type: actions_js_1.Ks.SETUP_FROM_MODE,
                form_mode: 'QUERY',
                QueryType: 'TODAY',
                targetReducer: targetReducer
            });
        }
    };
    AppForm.prototype.render = function () {
        var form_mode = this.props.form_mode;
        return (<reactstrap_1.Container>
                <AppHelper_js_1["default"] appInfo={globalappinfo} noInitFormMode/>
                <TitleWidget_js_1["default"] appTitle={globalappinfo.appTitle}/>

                {form_mode === 'QUERY' &&
            <DataSearch_js_1["default"] />}
                {form_mode === 'LIST' &&
            <DataLister_js_1["default"] />}
                {form_mode === 'VIEW' &&
            <DataInfo_js_1["default"] />}

            </reactstrap_1.Container>);
    };
    AppForm.prototype.handleValueChange = function (name, value) {
        var _a;
        this.setState((_a = {},
            _a[name] = value,
            _a));
    };
    AppForm.prototype.handleToggle = function (name) {
        var _a;
        this.setState((_a = {},
            _a[name] = !this.state[name],
            _a));
    };
    return AppForm;
}(react_1.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        appInfo: state.appInfo,
        formData: state.WeeklyScheduleData,
        form_mode: state.WeeklyScheduleData.form_mode
    };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        dispatch: dispatch,
        setBlocking: function (flag) {
            dispatch(actions_js_1["default"].setBlocking(flag));
        },
        setupFormMode: function (form_mode, queryMode) { return ({
            type: actions_js_1.Ks.SETUP_FROM_MODE,
            form_mode: form_mode,
            queryMode: queryMode,
            targetReducer: targetReducer
        }); }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AppForm);

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
var reactstrap_1 = require("reactstrap");
var reactstrap_2 = require("reactstrap");
var reactstrap_3 = require("reactstrap");
var targetReducer = 'RescheduleAnnounceReducer';
var DataLister = /** @class */ (function (_super) {
    __extends(DataLister, _super);
    function DataLister(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            queryParams: {
                param1: '',
                param2: ''
            }
        };
        _this.handleValueChange = _this.handleValueChange.bind(_this);
        _this.handleGoBack = _this.handleGoBack.bind(_this);
        _this.hanldeItemClick = _this.hanldeItemClick.bind(_this);
        _this.handleParamChange = _this.handleParamChange.bind(_this);
        return _this;
    }
    DataLister.prototype.render = function () {
        var queryParams = this.state.queryParams;
        var dataList = this.props.dataList;
        var nowDate = new Date();
        var getNowDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
            nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate();
        return (<div>
                <div className="py-1">
                    <reactstrap_2.Row>
                        <reactstrap_2.Col xs={12}>今日({getNowDate})客輪航班<b>異動資訊</b>：</reactstrap_2.Col>
                    </reactstrap_2.Row>
                </div>
                <reactstrap_1.ListGroup>
                    
                </reactstrap_1.ListGroup>
                <reactstrap_3.FormGroup className="text-right text-sm-center">
                    <reactstrap_3.Button color="primary m-1">公告至底</reactstrap_3.Button>
                </reactstrap_3.FormGroup>
            </div>);
    };
    DataLister.prototype.handleValueChange = function (name, value) {
        var _a;
        this.setState((_a = {}, _a[name] = value, _a));
    };
    DataLister.prototype.handleGoBack = function () {
        this.props.dispatch({ type: actions_js_1.Ks.SETUP_FROM_MODE, form_mode: 'QUERY', targetReducer: targetReducer });
    };
    DataLister.prototype.hanldeItemClick = function (item, index) {
        var _this = this;
        // 模擬查詢情境
        this.props.setBlocking(true);
        setTimeout(function () {
            _this.props.dispatch({ type: actions_js_1.Ks.SETUP_FROM_MODE, form_mode: 'VIEW', targetReducer: targetReducer });
            _this.props.setBlocking(false);
        }, 1000);
    };
    DataLister.prototype.handleParamChange = function (name, value) {
        var queryParams = this.state.queryParams;
        queryParams[name] = value;
        this.setState({ queryParams: queryParams });
    };
    return DataLister;
}(react_1.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        appInfo: state.appInfo,
        dataList: state.RescheduleAnnounceData.dataList
    };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        dispatch: dispatch,
        setBlocking: function (flag) {
            dispatch(actions_js_1["default"].setBlocking(flag));
        },
        setupFormMode: function (form_mode) {
            dispatch({ type: actions_js_1.Ks.SETUP_FROM_MODE, form_mode: form_mode, targetReducer: targetReducer });
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DataLister);

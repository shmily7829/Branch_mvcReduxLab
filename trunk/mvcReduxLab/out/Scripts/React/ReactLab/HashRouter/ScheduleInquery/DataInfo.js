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
var DataInfoView1_js_1 = require("./widgets/DataInfoView1.js");
var DataInfoView2_js_1 = require("./widgets/DataInfoView2.js");
var targetReducer = 'ScheduleInqueryReducer';
var DataInfo = /** @class */ (function (_super) {
    __extends(DataInfo, _super);
    function DataInfo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeTab: 'tab1'
        };
        _this.toggle = _this.toggle.bind(_this);
        _this.handleGoBack = _this.handleGoBack.bind(_this);
        return _this;
    }
    DataInfo.prototype.render = function () {
        var _this = this;
        var queryType = this.props.queryType;
        var activeTab = this.state.activeTab;
        var dataInfo = this.props.dataInfo;
        //
        var itemList = this.props.dataInfo.itemList.itemList;
        return (<div>
                <div> 
                    <reactstrap_1.Nav pills horizontal="sm-center">
                        <reactstrap_1.NavItem>
                            <reactstrap_1.NavLink active={activeTab === "tab1"} onClick={function () { _this.toggle('tab1'); }}>
                                航班明細
                            </reactstrap_1.NavLink>
                        </reactstrap_1.NavItem>
                        <reactstrap_1.NavItem>
                            <reactstrap_1.NavLink active={activeTab === "tab2"} onClick={function () { _this.toggle('tab2'); }}>
                                航線時刻表
                            </reactstrap_1.NavLink>
                        </reactstrap_1.NavItem>
                    </reactstrap_1.Nav>
                </div>

                <p className="mt-2">
                    簽證編號：{"\u6771\u6E2F\u9E7D\u57D4\u6F01\u6E2F\u5C0F\u7409\u7403\u5927\u798F\u6F01\u6E2F\u822A\u7DDA(\u6B23\u6CF0)"}
                </p>

                <reactstrap_1.TabContent activeTab={this.state.activeTab}>
                    <reactstrap_1.TabPane tabId="tab1">
                        <DataInfoView1_js_1["default"] dataInfo={dataInfo}/>
                    </reactstrap_1.TabPane>
                    <reactstrap_1.TabPane tabId="tab2">
                        <DataInfoView2_js_1["default"] dataInfo={dataInfo}/>
                    </reactstrap_1.TabPane>
                </reactstrap_1.TabContent>

                <reactstrap_2.FormGroup className="text-right text-sm-center">
                    <reactstrap_2.Button color="secondary m-1" onClick={this.handleGoBack}>回上一頁</reactstrap_2.Button>
                    <reactstrap_2.Button color="secondary m-1">加入最愛</reactstrap_2.Button>
                </reactstrap_2.FormGroup>
            </div>);
    };
    DataInfo.prototype.toggle = function (tabId) {
        if (this.state.activeTab !== tabId) {
            this.setState({
                activeTab: tabId
            });
        }
    };
    DataInfo.prototype.handleGoBack = function () {
        var queryType = this.props.queryType;
        console.log("DataInfo queryType", queryType);
        this.props.dispatch({ type: actions_js_1.Ks.SETUP_FROM_MODE, form_mode: 'LIST', queryType: queryType, targetReducer: targetReducer });
    };
    return DataInfo;
}(react_1.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        appInfo: state.appInfo,
        dataInfo: state.ScheduleInqueryData.dataInfo,
        itemList: state.ScheduleInqueryData.dataInfo.itemList,
        queryType: state.ScheduleInqueryData.queryType
        //form_mode: state.formData.form_mode,
    };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        dispatch: dispatch,
        setBlocking: function (flag) {
            dispatch(actions_js_1["default"].setBlocking(flag));
        },
        setupFormMode: function (form_mode, queryType) {
            dispatch({ type: actions_js_1.Ks.SETUP_FROM_MODE, form_mode: form_mode, queryType: queryType, targetReducer: targetReducer });
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DataInfo);

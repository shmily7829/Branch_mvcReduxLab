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
var targetReducer = 'WeeklyScheduleReducer';
var DataLister = /** @class */ (function (_super) {
    __extends(DataLister, _super);
    function DataLister(props) {
        var _this = _super.call(this, props) || this;
        var nowDate = new Date();
        var getNowDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
            nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate();
        _this.state = {
            activeTab: 'tab1',
            startDate: getNowDate,
            endDate: getNowDate
        };
        _this.handleValueChange = _this.handleValueChange.bind(_this);
        _this.handleGoBack = _this.handleGoBack.bind(_this);
        _this.hanldeItemClick = _this.hanldeItemClick.bind(_this);
        return _this;
    }
    DataLister.prototype.render = function () {
        var _this = this;
        var dataList = this.props.dataList;
        //臨時LIST
        var dataList2 = this.props.dataList2;
        var dataList3 = this.props.dataList3;
        var queryType = this.props.queryType;
        var allPROPS = this.props;
        console.log("DataLister FormqueryType :", allPROPS);
        return (<div>
                {queryType === 'TODAY' &&
            <div>
                        <div className="py-1">
                            <row>
                                <span className="lead">查詢條件：{this.state.startDate} ~ {this.state.endDate}</span>
                            </row>
                            <row>
                                <span className="lead">{"小琉球大福漁港"} ~ {"東港鹽埔漁港"}</span>
                            </row>
                        </div>
                        <reactstrap_1.ListGroup>
                            <reactstrap_1.ListGroupItem className="px-0">
                                <reactstrap_2.Row noGutters>
                                    <reactstrap_2.Col xs={1} className="my-auto text-center"></reactstrap_2.Col>
                                    <reactstrap_2.Col xs={5}>實際開航時間</reactstrap_2.Col>
                                    <reactstrap_2.Col xs={6}>實際抵達時間</reactstrap_2.Col>
                                </reactstrap_2.Row>
                            </reactstrap_1.ListGroupItem>
                            {dataList.map(function (item, index) {
                return <reactstrap_1.ListGroupItem key={index} className="px-0">
                                    <reactstrap_2.Row noGutters>
                                        <reactstrap_2.Col xs={1} className="my-auto text-center" onClick={function () { return alert('click testing'); }}>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </reactstrap_2.Col>
                                        <reactstrap_2.Col xs={10} onClick={function () { return _this.hanldeItemClick(item, index); }}>
                                            <reactstrap_2.Row noGutters>
                                                <reactstrap_2.Col xs={6}>{item.value1}</reactstrap_2.Col>
                                                <reactstrap_2.Col xs={6}>{item.value2}</reactstrap_2.Col>
                                                <reactstrap_2.Col xs={12}>
                                                    <span className="lead">{item.value3}</span>
                                                </reactstrap_2.Col>
                                            </reactstrap_2.Row>
                                        </reactstrap_2.Col>
                                        <reactstrap_2.Col xs={1} className="my-auto text-center" onClick={function () { return _this.hanldeItemClick(item, index); }}>
                                            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                        </reactstrap_2.Col>
                                    </reactstrap_2.Row>
                                </reactstrap_1.ListGroupItem>;
            })}
                        </reactstrap_1.ListGroup>
                        <reactstrap_3.FormGroup className="text-right text-sm-center">
                            <reactstrap_3.Button color="primary m-1">載入更多</reactstrap_3.Button>
                            <reactstrap_3.Button color="secondary m-1">重新載入</reactstrap_3.Button>
                            <reactstrap_3.Button color="secondary m-1" onClick={this.handleGoBack}>重新查詢</reactstrap_3.Button>
                        </reactstrap_3.FormGroup>
                    </div>}
                {queryType === 'THISWEEK' &&
            <div>
                        <div className="py-1">
                            <row>
                                <span className="lead">查詢條件：2019/4/3 ~ 2019/4/10</span>
                            </row>
                            <row>
                                <span className="lead">{"小琉球大福漁港"} ~ {"東港鹽埔漁港"}</span>
                            </row>
                        </div>
                        <reactstrap_1.ListGroup>
                            <reactstrap_1.ListGroupItem className="px-0">
                                <reactstrap_2.Row noGutters>
                                    <reactstrap_2.Col xs={1} className="my-auto text-center"></reactstrap_2.Col>
                                    <reactstrap_2.Col xs={5}>實際開航時間</reactstrap_2.Col>
                                    <reactstrap_2.Col xs={6}>實際抵達時間</reactstrap_2.Col>
                                </reactstrap_2.Row>
                            </reactstrap_1.ListGroupItem>
                            {dataList2.map(function (item, index) {
                return <reactstrap_1.ListGroupItem key={index} className="px-0">
                                    <reactstrap_2.Row noGutters>
                                        <reactstrap_2.Col xs={1} className="my-auto text-center" onClick={function () { return alert('click testing'); }}>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </reactstrap_2.Col>
                                        <reactstrap_2.Col xs={10} onClick={function () { return _this.hanldeItemClick(item, index); }}>
                                            <reactstrap_2.Row noGutters>
                                                <reactstrap_2.Col xs={6}>{item.value1}</reactstrap_2.Col>
                                                <reactstrap_2.Col xs={6}>{item.value2}</reactstrap_2.Col>
                                                <reactstrap_2.Col xs={12}>
                                                    <span className="lead">{item.value3}</span>
                                                </reactstrap_2.Col>
                                            </reactstrap_2.Row>
                                        </reactstrap_2.Col>
                                        <reactstrap_2.Col xs={1} className="my-auto text-center" onClick={function () { return _this.hanldeItemClick(item, index); }}>
                                            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                        </reactstrap_2.Col>
                                    </reactstrap_2.Row>
                                </reactstrap_1.ListGroupItem>;
            })}
                        </reactstrap_1.ListGroup>
                        <reactstrap_3.FormGroup className="text-right text-sm-center">
                            <reactstrap_3.Button color="primary m-1">載入更多</reactstrap_3.Button>
                            <reactstrap_3.Button color="secondary m-1">重新載入</reactstrap_3.Button>
                            <reactstrap_3.Button color="secondary m-1" onClick={this.handleGoBack}>重新查詢</reactstrap_3.Button>
                        </reactstrap_3.FormGroup>
                    </div>}
                {queryType === 'FLIGHTQUERY' &&
            <div>
                        <div className="py-1">
                            <row>
                                <span className="lead">查詢條件：{"2019/04/01"} ~ {"2019/04/30"} </span>
                            </row>
                            <row>
                                <span className="lead">{"小琉球大福漁港"} ~ {"東港鹽埔漁港"}</span>
                            </row>
                        </div>
                        <reactstrap_1.ListGroup>
                            <reactstrap_1.ListGroupItem className="px-0">
                                <reactstrap_2.Row noGutters>
                                    <reactstrap_2.Col xs={1} className="my-auto text-center"></reactstrap_2.Col>
                                    <reactstrap_2.Col xs={5}>實際開航時間</reactstrap_2.Col>
                                    <reactstrap_2.Col xs={6}>實際抵達時間</reactstrap_2.Col>
                                </reactstrap_2.Row>
                            </reactstrap_1.ListGroupItem>
                            {dataList3.map(function (item, index) {
                return <reactstrap_1.ListGroupItem key={index} className="px-0">
                                    <reactstrap_2.Row noGutters>
                                        <reactstrap_2.Col xs={1} className="my-auto text-center" onClick={function () { return alert('click testing'); }}>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </reactstrap_2.Col>
                                        <reactstrap_2.Col xs={10} onClick={function () { return _this.hanldeItemClick(item, index); }}>
                                            <reactstrap_2.Row noGutters>
                                                <reactstrap_2.Col xs={6}>{item.value1}</reactstrap_2.Col>
                                                <reactstrap_2.Col xs={6}>{item.value2}</reactstrap_2.Col>
                                                <reactstrap_2.Col xs={12}>
                                                    <span className="lead">{item.value3}</span>
                                                </reactstrap_2.Col>
                                            </reactstrap_2.Row>
                                        </reactstrap_2.Col>
                                        <reactstrap_2.Col xs={1} className="my-auto text-center" onClick={function () { return _this.hanldeItemClick(item, index); }}>
                                            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                        </reactstrap_2.Col>
                                    </reactstrap_2.Row>
                                </reactstrap_1.ListGroupItem>;
            })}
                        </reactstrap_1.ListGroup>
                        <reactstrap_3.FormGroup className="text-right text-sm-center">
                            <reactstrap_3.Button color="primary m-1">載入更多</reactstrap_3.Button>
                            <reactstrap_3.Button color="secondary m-1">重新載入</reactstrap_3.Button>
                            <reactstrap_3.Button color="secondary m-1" onClick={this.handleGoBack}>重新查詢</reactstrap_3.Button>
                        </reactstrap_3.FormGroup>
                    </div>}
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
        var queryType = this.props.queryType;
        console.log("This hanldeItemClick queryType", queryType);
        // 模擬查詢情境
        this.props.setBlocking(true);
        setTimeout(function () {
            _this.props.dispatch({ type: actions_js_1.Ks.SETUP_FROM_MODE, queryType: queryType, form_mode: 'VIEW', targetReducer: targetReducer });
            _this.props.setBlocking(false);
        }, 1000);
    };
    return DataLister;
}(react_1.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        appInfo: state.appInfo,
        dataList: state.WeeklyScheduleData.dataList,
        dataList2: state.WeeklyScheduleData.dataList2,
        dataList3: state.WeeklyScheduleData.dataList3,
        queryType: state.WeeklyScheduleData.queryType
    };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        dispatch: dispatch,
        setBlocking: function (flag) {
            dispatch(actions_js_1["default"].setBlocking(flag));
        },
        setupFormMode: function (form_mode, queryType) {
            dispatch({ type: actions_js_1.Ks.SETUP_FROM_MODE, queryType: queryType, form_mode: form_mode, targetReducer: targetReducer });
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DataLister);

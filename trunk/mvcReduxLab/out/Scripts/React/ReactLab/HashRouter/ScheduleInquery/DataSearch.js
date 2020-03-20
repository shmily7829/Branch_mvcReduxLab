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
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_js_1 = require("CommonFF/actions.js");
var CommonUtilities_js_1 = require("Common/CommonUtilities.js");
var reactstrap_1 = require("reactstrap");
var reactstrap_2 = require("reactstrap");
var FormInputFields_js_1 = require("CommonMA/FormInputFields.js");
var apiClient_1 = require("./apiClient");
///## resource
var targetReducer = 'ScheduleInqueryReducer';
//======================================================================
var DataSearch = /** @class */ (function (_super) {
    __extends(DataSearch, _super);
    function DataSearch(props) {
        var _this = _super.call(this, props) || this;
        //const nowDate = new Date()
        //const getNowDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
        //    nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate();
        //const weekDate = new Date(nowDate);
        //weekDate.setDate(weekDate.getDate() + 7);
        //const getWeekDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
        //    nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate();
        // 查詢條件
        _this.state = {
            queryType: 'Today',
            queryParams: {
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                param5: '',
                param6: '',
                param7: '',
                fooNewShipFrepUnit: '',
                fooStartDate: '',
                fooEndDate: ''
            },
            formCtrl: {
                disabled: false,
                readOnly: false
            },
            testStartPortList: [],
            testEndPortList: []
        };
        _this.handleParamChange = _this.handleParamChange.bind(_this);
        _this.handleSearch = _this.handleSearch.bind(_this);
        _this.handleEndPortChange = _this.handleEndPortChange.bind(_this);
        _this.setDate = _this.setDate.bind(_this);
        return _this;
    }
    DataSearch.prototype.componentDidMount = function () {
        this.StartPortData();
        this.setDate();
    };
    DataSearch.prototype.render = function () {
        var _this = this;
        //console.log('DataSearch render',this.props)
        var queryParams = this.state.queryParams;
        var formCtrl = this.state.formCtrl;
        return (<div>
                
                {this.state.queryType === 'Today' &&
            <FormInputFields_js_1.FormPanel caption="今日航班查詢">
                        <reactstrap_1.Row className="text-center mb-0">
                            <reactstrap_1.Col md={12}>
                                <FormInputFields_js_1.ButtonRadioField {...formCtrl} className="mb-0" 
            //label=""
            name="queryType" value={this.state.queryType} 
            //note="註：此為參考用客製範本。"
            //validMessage="選取項目符合規定。"
            //invalidMessage="未選取項目。"
            onValidate={function (name, value) { return CommonUtilities_js_1.cuNotEmpty(value); }} onChange={function (name, value) { return _this.handleValueChange(name, value); }} options={[
                { value: 'Today', label: '今日航班' },
                { value: 'ThisWeek', label: '本週航班' },
                { value: 'FlightQuery', label: '航班查詢' }
            ]}/>
                            </reactstrap_1.Col>
                        </reactstrap_1.Row>
                        <reactstrap_1.Row>
                            <reactstrap_1.Col md={6}>
                                <reactstrap_2.FormGroup row>
                                    <reactstrap_2.Label xs={4}>出發港口</reactstrap_2.Label>
                                    <reactstrap_1.Col xs={8}>
                                        
                                        <FormInputFields_js_1.SelectField className="mb-0" name="param1" value={queryParams.param1} placeholder="請選擇" onChange={function (name, value) { return _this.handleEndPortChange(name, value); }} options={this.state.testStartPortList}/>
                                    </reactstrap_1.Col>
                                </reactstrap_2.FormGroup>
                            </reactstrap_1.Col>
                            <reactstrap_1.Col md={6}>
                                <reactstrap_2.FormGroup row>
                                    <reactstrap_2.Label xs={4}>目的港口</reactstrap_2.Label>
                                    <reactstrap_1.Col xs={8}>
                                        
                                        <FormInputFields_js_1.SelectField className="mb-0" name="param2" value={queryParams.param2} placeholder="請選擇" onChange={this.handleParamChange} options={this.state.testEndPortList}/>
                                    </reactstrap_1.Col>
                                </reactstrap_2.FormGroup>
                            </reactstrap_1.Col>
                        </reactstrap_1.Row>
                        <reactstrap_1.Row>
                            <reactstrap_1.Col md={6}>
                                <reactstrap_2.FormGroup row>
                                    <reactstrap_2.Label xs={4}>航班起日</reactstrap_2.Label>
                                    <reactstrap_1.Col xs={8}>
                                        <FormInputFields_js_1.TextField type="text" name="fooStartDate" className="mb-0" placeholder="" value={queryParams.fooStartDate || ''} onChange={this.handleParamChange}/>
                                    </reactstrap_1.Col>
                                </reactstrap_2.FormGroup>
                            </reactstrap_1.Col>
                            <reactstrap_1.Col md={6}>
                                <reactstrap_2.FormGroup row>
                                    <reactstrap_2.Label xs={4}>航班迄日</reactstrap_2.Label>
                                    <reactstrap_1.Col xs={8}>
                                        <FormInputFields_js_1.TextField type="text" name="fooEndDate" className="mb-0" placeholder="" value={queryParams.fooEndDate || ''} onChange={this.handleParamChange}/>
                                    </reactstrap_1.Col>
                                </reactstrap_2.FormGroup>
                            </reactstrap_1.Col>
                        </reactstrap_1.Row>
                        <reactstrap_2.FormGroup className="text-right text-sm-center">
                            <reactstrap_2.Button color="primary m-1" onClick={this.handleSearch}>開始查詢</reactstrap_2.Button>
                        </reactstrap_2.FormGroup>
                    </FormInputFields_js_1.FormPanel>}
                {this.state.queryType === 'ThisWeek' &&
            <FormInputFields_js_1.FormPanel caption="本週航班查詢">
                        <reactstrap_1.Row className="text-center mb-0">
                            <reactstrap_1.Col md={12}>
                                <FormInputFields_js_1.ButtonRadioField {...formCtrl} className="mb-0" 
            //label=""
            name="queryType" value={this.state.queryType} 
            //note="註：此為參考用客製範本。"
            //validMessage="選取項目符合規定。"
            //invalidMessage="未選取項目。"
            onValidate={function (name, value) { return CommonUtilities_js_1.cuNotEmpty(value); }} onChange={function (name, value) { return _this.handleValueChange(name, value); }} options={[
                { value: 'Today', label: '今日航班' },
                { value: 'ThisWeek', label: '本週航班' },
                { value: 'FlightQuery', label: '航班查詢' }
            ]}/>
                            </reactstrap_1.Col>
                        </reactstrap_1.Row>
                        <reactstrap_1.Row>
                            <reactstrap_1.Col md={6}>
                                <reactstrap_2.FormGroup row>
                                    <reactstrap_2.Label xs={4}>出發港口</reactstrap_2.Label>
                                    <reactstrap_1.Col xs={8}>
                                        
                                        <FormInputFields_js_1.SelectField value={queryParams.param1} name="param1" className="mb-0" placeholder="請選擇" onChange={this.handleParamChange} options={[
                { value: 'A', label: '小琉球白沙港' },
                { value: 'B', label: '北竿白沙灣' },
                { value: 'C', label: '布袋港' },
                { value: 'D', label: '吉貝漁港' },
                { value: 'E', label: '赤崁漁港' },
                { value: 'F', label: '東引中柱港' },
                { value: 'G', label: '東港鹽埔漁港' }
            ]}/>
                                    </reactstrap_1.Col>
                                </reactstrap_2.FormGroup>
                            </reactstrap_1.Col>
                            <reactstrap_1.Col md={6}>
                                <reactstrap_2.FormGroup row>
                                    <reactstrap_2.Label xs={4}>目的港口</reactstrap_2.Label>
                                    <reactstrap_1.Col xs={8}>
                                        
                                        <FormInputFields_js_1.SelectField value={queryParams.param2} name="param2" className="mb-0" placeholder="請選擇" onChange={this.handleParamChange} options={[
                { value: 'G', label: '東港鹽埔漁港' },
                { value: 'H', label: '屏東大鵬灣遊艇港' },
            ]}/>
                                    </reactstrap_1.Col>
                                </reactstrap_2.FormGroup>
                            </reactstrap_1.Col>
                        </reactstrap_1.Row>
                        <reactstrap_1.Row>
                            <reactstrap_1.Col md={6}>
                                <reactstrap_2.FormGroup row>
                                    <reactstrap_2.Label xs={4}>航班起日</reactstrap_2.Label>
                                    <reactstrap_1.Col xs={8}>
                                        <FormInputFields_js_1.TextField type="text" name="fooStartDate" className="mb-0" name="fooStartDate" placeholder="" value={queryParams.fooStartDate || ''} onChange={function (name, value) { return _this.setDate(name, value); }}/>
                                    </reactstrap_1.Col>
                                </reactstrap_2.FormGroup>
                            </reactstrap_1.Col>
                            <reactstrap_1.Col md={6}>
                                <reactstrap_2.FormGroup row>
                                    <reactstrap_2.Label xs={4}>航班迄日</reactstrap_2.Label>
                                    <reactstrap_1.Col xs={8}>
                                        <FormInputFields_js_1.TextField type="text" name="fooEndDate" className="mb-0" name="fooEndDate" placeholder="" value={queryParams.fooEndDate || ''} onChange={function (name, value) { return _this.setDate(name, value); }}/>
                                    </reactstrap_1.Col>
                                </reactstrap_2.FormGroup>
                            </reactstrap_1.Col>
                        </reactstrap_1.Row>
                        <reactstrap_2.FormGroup className="text-right text-sm-center">
                            <reactstrap_2.Button color="primary m-1" onClick={this.handleSearch}>開始查詢</reactstrap_2.Button>
                        </reactstrap_2.FormGroup>
                    </FormInputFields_js_1.FormPanel>}
                {this.state.queryType === 'FlightQuery' &&
            <FormInputFields_js_1.FormPanel caption="航班查詢">
                        <reactstrap_1.Row className="text-center">
                            <reactstrap_1.Col md={12}>
                                <FormInputFields_js_1.ButtonRadioField {...formCtrl} className="mb-0" 
            //label=""
            name="queryType" value={this.state.queryType} 
            //note="註：此為參考用客製範本。"
            //validMessage="選取項目符合規定。"
            //invalidMessage="未選取項目。"
            onValidate={function (name, value) { return CommonUtilities_js_1.cuNotEmpty(value); }} onChange={function (name, value) { return _this.handleValueChange(name, value); }} options={[
                { value: 'Today', label: '今日航班' },
                { value: 'ThisWeek', label: '本週航班' },
                { value: 'FlightQuery', label: '航班查詢' }
            ]}/>
                            </reactstrap_1.Col>
                        </reactstrap_1.Row>
                        <reactstrap_1.Row>
                            <reactstrap_1.Col md={6}>
                                <reactstrap_2.FormGroup row>
                                    <reactstrap_2.Label xs={4}>出發港口</reactstrap_2.Label>
                                    <reactstrap_1.Col xs={8}>
                                        
                                        <FormInputFields_js_1.SelectField value={queryParams.param1} name="param1" className="mb-0" placeholder="請選擇" onChange={this.handleParamChange} options={[
                { value: 'A', label: '小琉球白沙港' },
                { value: 'B', label: '北竿白沙灣' },
                { value: 'C', label: '布袋港' },
                { value: 'D', label: '吉貝漁港' },
                { value: 'E', label: '赤崁漁港' },
                { value: 'F', label: '東引中柱港' },
                { value: 'G', label: '東港鹽埔漁港' }
            ]}/>
                                    </reactstrap_1.Col>
                                </reactstrap_2.FormGroup>
                            </reactstrap_1.Col>
                            <reactstrap_1.Col md={6}>
                                <reactstrap_2.FormGroup row>
                                    <reactstrap_2.Label xs={4}>目的港口</reactstrap_2.Label>
                                    <reactstrap_1.Col xs={8}>
                                        
                                        <FormInputFields_js_1.SelectField value={queryParams.param2} name="param2" className="mb-0" placeholder="請選擇" onChange={this.handleParamChange} options={[
                { value: 'G', label: '東港鹽埔漁港' },
                { value: 'H', label: '屏東大鵬灣遊艇港' },
            ]}/>
                                    </reactstrap_1.Col>
                                </reactstrap_2.FormGroup>
                            </reactstrap_1.Col>
                        </reactstrap_1.Row>
                        <reactstrap_1.Row>
                            <reactstrap_1.Col md={6}>
                                <reactstrap_2.FormGroup row>
                                    <reactstrap_2.Label xs={4}>航班起日</reactstrap_2.Label>
                                    <reactstrap_1.Col xs={8}>
                                        <FormInputFields_js_1.TextField type="text" name="fooStartDate" className="mb-0" placeholder="" value={queryParams.fooStartDate || ''} onChange={this.handleParamChange}/>
                                    </reactstrap_1.Col>
                                </reactstrap_2.FormGroup>
                            </reactstrap_1.Col>
                            <reactstrap_1.Col md={6}>
                                <reactstrap_2.FormGroup row>
                                    <reactstrap_2.Label xs={4}>航班迄日</reactstrap_2.Label>
                                    <reactstrap_1.Col xs={8}>
                                        <FormInputFields_js_1.TextField type="text" name="fooEndDate" className="mb-0" placeholder="" value={queryParams.fooEndDate || ''} onChange={this.handleParamChange}/>
                                    </reactstrap_1.Col>
                                </reactstrap_2.FormGroup>
                            </reactstrap_1.Col>
                        </reactstrap_1.Row>
                        <reactstrap_2.FormGroup className="text-right text-sm-center">
                            <reactstrap_2.Button color="primary m-1" onClick={this.handleSearch}>開始查詢</reactstrap_2.Button>
                        </reactstrap_2.FormGroup>
                    </FormInputFields_js_1.FormPanel>}
            </div>);
    };
    DataSearch.prototype.setDate = function () {
        var nowDate = new Date();
        var getNowDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
            nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate();
        var weekDate = new Date(nowDate);
        weekDate.setDate(weekDate.getDate() + 7);
        var getWeekDate = weekDate.getMonth != 11 ? weekDate.getFullYear() + "/" + (weekDate.getMonth() + 1) + "/" + weekDate.getDate() :
            weekDate.getFullYear() + "/" + (weekDate.getMonth()) + "/" + weekDate.getDate();
        var queryParams = this.state.queryParams;
        console.log("Debug SetDate A FooStartDate:", queryParams);
        if (this.state.queryType == "Today") {
            queryParams = __assign({}, queryParams, { fooStartDate: getNowDate, fooEndDate: getNowDate });
            console.log("Debug SetDate B-1 FooStartDate:", queryParams);
            this.setState({ queryParams: queryParams });
            console.log("Debug SetDate B-2 FooStartDate:", this.state);
        }
        else if (this.state.queryType == "ThisWeek") {
            queryParams = __assign({}, queryParams, { fooStartDate: getNowDate, fooEndDate: getNowDate });
            console.log("Debug SetDate C-1 FooStartDate:", queryParams);
            this.setState({ queryParams: queryParams });
            console.log("Debug SetDate C-2 FooStartDate:", this.state);
        }
        else if (this.state.queryType == "FlightQuery") {
            queryParams = __assign({}, queryParams, { fooStartDate: getNowDate, fooEndDate: getNowDate });
            console.log("Debug SetDate D-1 FooStartDate:", queryParams);
            this.setState({ queryParams: queryParams });
            console.log("Debug SetDate D-2 FooStartDate:", this.state);
        }
    };
    DataSearch.prototype.StartPortData = function (name, value) {
        var _this = this;
        name = '';
        var args = { name: name };
        apiClient_1["default"].StartPort(args).then(function (resp) {
            var itemList = resp.data;
            //let {testStartPortList} = this.state
            //testStartPortList = {...testStartPortList, [name]: value.trim() }
            _this.setState({
                testStartPortList: itemList,
                testEndPortList: itemList
            });
            console.log("testStartPortList ", itemList);
        });
        //apiClient.LoadStartPort
        //apiClient.LoadStartPort(arg).then((resp) => {
        //    const itemList = resp.data
        //})
    };
    DataSearch.prototype.handleEndPortChange = function (name, value) {
        var _this = this;
        var args = { value: value };
        console.log("handleEndPortChange queryEndPortChange 1", args);
        apiClient_1["default"].EndPort(args).then(function (resp) {
            var _a;
            var itemList = resp.data;
            var queryParams = _this.state.queryParams;
            queryParams = __assign({}, queryParams, (_a = {}, _a[name] = value, _a));
            //testStartPortList = {...testStartPortList, [name]: value.trim() }
            _this.setState({
                queryParams: queryParams,
                testEndPortList: itemList
            });
            console.log("testEndPortList ", itemList);
        });
    };
    DataSearch.prototype.handleValueChange = function (name, value) {
        var _a;
        console.log("handleValueChange", name, value);
        this.setState((_a = {}, _a[name] = value, _a));
    };
    // 改寫handleValueChange
    DataSearch.prototype.handleParamChange = function (name, value) {
        var _a;
        var queryParams = this.state.queryParams; // 取原值
        queryParams = __assign({}, queryParams, (_a = {}, _a[name] = value.trim(), _a)); // 給新值
        this.setState({ queryParams: queryParams }); // 更新
        console.log("paraChange", { queryParams: queryParams });
    };
    DataSearch.prototype.handleValueChange = function (name, value) {
        var _a;
        this.setState((_a = {},
            _a[name] = value,
            _a));
    };
    DataSearch.prototype.handleSearch = function () {
        var _this = this;
        console.log("Check Search Run");
        console.log("Check qu");
        if (this.state.queryType == "Today") {
            // 模擬查詢情境
            this.props.setBlocking(true);
            setTimeout(function () {
                _this.props.dispatch({ type: actions_js_1.Ks.SETUP_FROM_MODE, queryType: 'TODAY', form_mode: 'LIST', targetReducer: targetReducer });
                //this.props.dispatch({ type: Ks.SETUP_FROM_MODE, form_mode: 'LIST' })
                _this.props.setBlocking(false);
            }, 2000);
        }
        else if (this.state.queryType == "ThisWeek") {
            // 模擬查詢情境
            this.props.setBlocking(true);
            setTimeout(function () {
                _this.props.dispatch({ type: actions_js_1.Ks.SETUP_FROM_MODE, queryType: 'THISWEEK', form_mode: 'LIST', targetReducer: targetReducer });
                //this.props.dispatch({ type: Ks.SETUP_FROM_MODE, form_mode: 'LIST' })
                _this.props.setBlocking(false);
            }, 2000);
        }
        else if (this.state.queryType == "FlightQuery") {
            // 模擬查詢情境
            this.props.setBlocking(true);
            setTimeout(function () {
                _this.props.dispatch({ type: actions_js_1.Ks.SETUP_FROM_MODE, queryType: 'FLIGHTQUERY', form_mode: 'LIST', targetReducer: targetReducer });
                //this.props.dispatch({ type: Ks.SETUP_FROM_MODE, form_mode: 'LIST' })
                _this.props.setBlocking(false);
            }, 2000);
        }
    };
    return DataSearch;
}(react_1.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        appInfo: state.appInfo,
        formData: state.ScheduleInqueryData,
        form_mode: state.ScheduleInqueryData.form_mode,
        queryType: state.ScheduleInqueryData.queryType
    };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        dispatch: dispatch,
        setBlocking: function (flag) {
            dispatch(actions_js_1["default"].setBlocking(flag));
        },
        setupFormMode: function (form_mode, queryType) { return ({
            type: actions_js_1.Ks.SETUP_FROM_MODE,
            form_mode: form_mode,
            targetReducer: targetReducer,
            queryType: queryType
        }); }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DataSearch);

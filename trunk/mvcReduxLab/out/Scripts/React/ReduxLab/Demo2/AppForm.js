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
var AppHelper_js_1 = require("CommonFF/AppHelper.js");
var TitleWidget_js_1 = require("Common/TitleWidget.js");
var Counter_js_1 = require("./Counter.js");
var Lister_js_1 = require("./Lister.js");
var Hello2_js_1 = require("./Hello2.js");
var AppForm = /** @class */ (function (_super) {
    __extends(AppForm, _super);
    function AppForm(props) {
        var _this = _super.call(this, props) || this;
        /// 注意：state 必需是物件
        _this.state = {
            showHello2: true,
            showCounter: false,
            showLister: false
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }
    AppForm.prototype.render = function () {
        var _a = this.state, showHello2 = _a.showHello2, showCounter = _a.showCounter, showLister = _a.showLister;
        return (<div>
                <AppHelper_js_1["default"] appInfo={globalappinfo} noInitFormMode/>
                <TitleWidget_js_1["default"] appTitle={globalappinfo.appTitle}/> 
                <div className="container">
                    <label>勾選展示項目：</label>
                    <label><input type="checkbox" name="showHello2" checked={showHello2} onChange={this.handleInputChange}/> Redux Hello</label>&nbsp;
                    <label><input type="checkbox" name="showCounter" checked={showCounter} onChange={this.handleInputChange}/> Counter</label>&nbsp;
                    <label><input type="checkbox" name="showLister" checked={showLister} onChange={this.handleInputChange}/> Lister</label>&nbsp;
                </div>

                {showHello2 && <Hello2_js_1["default"] />}

                {showCounter && <Counter_js_1["default"] />}

                {showLister && <Lister_js_1["default"] />}

            </div>);
    };
    AppForm.prototype.handleInputChange = function (e) {
        var _a;
        var target = e.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        this.setState((_a = {},
            _a[name] = value,
            _a));
    };
    return AppForm;
}(react_1["default"].Component));
// connect to Store
var mapStateToProps = function (state, ownProps) { return ({
    appInfo: state.appInfo
}); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    dispatch: dispatch
}); };
//export default AppForm;
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AppForm);

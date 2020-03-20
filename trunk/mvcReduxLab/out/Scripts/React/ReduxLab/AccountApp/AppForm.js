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
var FormViewAccount_js_1 = require("./FormViewAccount.js");
var FormViewUser_js_1 = require("./FormViewUser.js");
var actions_js_1 = require("CommonFF/actions.js");
var apiClient_js_1 = require("./apiClient.js");
var FormViewAccount3_js_1 = require("./FormViewAccount3.js");
var AppForm = /** @class */ (function (_super) {
    __extends(AppForm, _super);
    function AppForm(props) {
        var _this = _super.call(this, props) || this;
        /// 注意：state 必需是物件
        _this.state = {
            showViewAccount: false,
            showViewUser: false,
            showViewAccount3: true
        };
        _this.handleSaveFormData = _this.handleSaveFormData.bind(_this);
        _this.handleLoadFormData = _this.handleLoadFormData.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }
    AppForm.prototype.render = function () {
        //取得狀態
        var _a = this.state, showViewAccount = _a.showViewAccount, showViewUser = _a.showViewUser, showViewAccount3 = _a.showViewAccount3;
        return (<div>
                <AppHelper_js_1["default"] appInfo={globalappinfo} noInitFormMode/>
                <TitleWidget_js_1["default"] appTitle={globalappinfo.appTitle}/>
                
                <div className="container">
                    <label>勾選展示項目：</label>
                    <label><input type="checkbox" name="showViewAccount" checked={showViewAccount} onChange={this.handleInputChange}/> FormViewAccount</label>&nbsp;
                    <label><input type="checkbox" name="showViewUser" checked={showViewUser} onChange={this.handleInputChange}/> FormViewUser</label>&nbsp;
                    <label><input type="checkbox" name="showViewAccount3" checked={showViewAccount3} onChange={this.handleInputChange}/> FormViewAccount3</label>&nbsp;
                </div>

                {showViewAccount && <FormViewAccount_js_1["default"] />}
                {showViewUser && <FormViewUser_js_1["default"] />}
                {showViewAccount3 && <FormViewAccount3_js_1["default"] />}

                
                <div className="container">
                    <button type="button" className="btn btn-primary btn-lg m-1" onClick={this.handleSaveFormData}>存檔</button>
                    <button type="button" className="btn btn-warning btn-lg m-1" onClick={this.handleLoadFormData}>載入</button>
                </div>

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
    AppForm.prototype.handleSaveFormData = function () {
        var _this = this;
        var formData = this.props.formData;
        console.log('handleSaveFormData', { formData: formData });
        this.props.setBlocking(true);
        apiClient_js_1["default"].SaveFormData(formData).then(function (resp) {
            console.log('SaveFormData success', { resp: resp });
            swal.fire('SaveFormData success', 'success');
        })["catch"](function (xhr) {
            console.log('SaveFormData fail!', { xhr: xhr });
            swal.fire('SaveFormData fail!');
        })["finally"](function () {
            _this.props.setBlocking(false);
        });
    };
    AppForm.prototype.handleLoadFormData = function () {
        var _this = this;
        var name = this.props.formData.accountInfo.name;
        console.log('handleLoadFormData', { name: name });
        this.props.setBlocking(true);
        var args = { name: name };
        apiClient_js_1["default"].LoadFormData(args).then(function (resp) {
            var formData = resp.data;
            console.log('LoadFormData success', { formData: formData });
            _this.props.fillFormData(formData);
            swal.fire('LoadFormData success', 'success');
        })["catch"](function (xhr) {
            console.log('LoadFormData fail!', { xhr: xhr });
            swal.fire('LoadFormData fail!');
        })["finally"](function () {
            _this.props.setBlocking(false);
        });
    };
    return AppForm;
}(react_1["default"].Component));
// connect to Store
var mapStateToProps = function (state, ownProps) { return ({
    appInfo: state.appInfo,
    formData: {
        accountInfo: state.accountInfo,
        userInfo: state.userInfo
    }
}); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    dispatch: dispatch,
    setBlocking: function (flag) {
        dispatch({ type: actions_js_1.Ks.SET_BLOCKING, flag: flag });
    },
    fillFormData: function (formData) {
        dispatch({ type: actions_js_1.Ks.FILL_FORM_DATA, formData: formData });
    }
}); };
//export default AppForm;
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AppForm);

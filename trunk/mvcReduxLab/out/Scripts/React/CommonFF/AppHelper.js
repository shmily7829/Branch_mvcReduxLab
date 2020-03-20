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
var prop_types_1 = require("prop-types");
var react_ui_blocker_1 = require("react-ui-blocker");
var actions_js_1 = require("./actions.js");
var AppHelper = /** @class */ (function (_super) {
    __extends(AppHelper, _super);
    function AppHelper(props) {
        var _this = _super.call(this, props) || this;
        //console.log('AppHelper', {props})
        //const appInfo = {
        //    functionId: props.functionId,
        //    appTitle: props.appTitle,
        //    antiForgeryToken: props.antiForgeryToken,
        //    loginUserInfo: props.loginUserInfo,
        //    entryFormNo: props.entryFormNo,
        //    entryMode: props.entryMode
        //}
        _this.props.setupAppInfo(props.appInfo);
        // 禁止初始模式
        if (!props.noInitFormMode) {
            _this.funcSetupFormMode(props.appInfo);
        }
        return _this;
    }
    AppHelper.prototype.funcSetupFormMode = function (appInfo) {
        //console.log('AppHelper.funcSetupFormMode', {appInfo})
        //## 依 entryMode, entryFormNo 判斷執行模式
        if (appInfo.entryMode === 'INIT') {
            // 查詢模式
            this.props.setupFormMode({ form_no: '', form_mode: 'QUERY' });
        }
        else if (appInfo.entryMode === 'APPLY' && appInfo.entryFormNo !== '') {
            // 申請模式，來自草稿匣
            this.props.setupFormMode({ form_no: appInfo.entryFormNo, form_mode: 'APPLY' });
        }
        else if (appInfo.entryMode === 'REVIEW' && appInfo.entryFormNo !== '') {
            // 審查模式，來自收件匣
            this.props.setupFormMode({ form_no: appInfo.entryFormNo, form_mode: 'REVIEW' });
        }
        else if (appInfo.entryMode === 'REJECT' && appInfo.entryFormNo !== '') {
            // 公文核准模式，來自收件匣
            this.props.setupFormMode({ form_no: appInfo.entryFormNo, form_mode: 'REJECT' });
        }
        else if (appInfo.entryMode === 'REVIEWODP' && appInfo.entryFormNo !== '') {
            // 公文核准模式，來自收件匣
            this.props.setupFormMode({ form_no: appInfo.entryFormNo, form_mode: 'REVIEWODP' });
        }
        //else if (appInfo.entryMode === 'APPLY' && appInfo.entryFormNo === '') {
        //    // 申請模式，新申請
        //    this.setState({ f_FirstMound: true })
        //    this.props.handleNewApplyForm()
        //}
        //else {
        //    alert('網址格式錯誤！')
        //}
    };
    AppHelper.prototype.render = function () {
        return (<div>
                <react_ui_blocker_1["default"] theme="foldingCube" isVisible={this.props.blocking} message="Loading..."/>
            </div>);
    };
    return AppHelper;
}(react_1.Component));
AppHelper.propTypes = {
    noInitFormMode: prop_types_1["default"].bool
};
AppHelper.defaultProps = {
    noInitFormMode: false
};
var mapStateToProps = function (state, ownProps) {
    return {
        blocking: state.appInfo.blocking
    };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        setupAppInfo: function (appInfo) {
            dispatch(actions_js_1["default"].setupAppInfo(appInfo));
        },
        setupFormMode: function (formAttrs, initValuse) {
            dispatch(actions_js_1["default"].setupFormMode(formAttrs, initValuse));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AppHelper);

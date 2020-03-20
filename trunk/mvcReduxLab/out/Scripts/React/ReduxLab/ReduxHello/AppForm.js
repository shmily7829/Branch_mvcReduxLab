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
var Hello2_js_1 = require("./Hello2.js");
var InputMirror_js_1 = require("./InputMirror.js");
var AppForm = /** @class */ (function (_super) {
    __extends(AppForm, _super);
    function AppForm(props) {
        return _super.call(this, props) || this;
    }
    AppForm.prototype.render = function () {
        return (<div>
                <AppHelper_js_1["default"] appInfo={globalappinfo} noInitFormMode/>
                <TitleWidget_js_1["default"] appTitle={globalappinfo.appTitle}/> 

                <Hello2_js_1["default"] />
                <hr />
                <InputMirror_js_1["default"] />

            </div>);
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

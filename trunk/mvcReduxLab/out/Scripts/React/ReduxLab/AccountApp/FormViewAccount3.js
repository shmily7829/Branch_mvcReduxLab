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
var FormViewAccount3 = /** @class */ (function (_super) {
    __extends(FormViewAccount3, _super);
    function FormViewAccount3(props) {
        return _super.call(this, props) || this;
    }
    return FormViewAccount3;
}(react_1.Component));
<div></div>;
render();
{
    var _a = this.props, accountInfo = _a.accountInfo, dispatch = _a.dispatch, handleValueChange = _a.handleValueChange;
    return (<reactstrap_1.Container className="mt-2 bg-secondary text-white rounded">

            <div style={{ border: 'thick solid #0000FF', borderRadius: '20px' }}>
                <p>"我是識別字元"</p>
                <div style={{ marginTop: '10px' }}>霓霞羽戰火連天，</div>
                <div>墨影神誓護千年，</div>
                <div>寄語孤鴻誅邪滅，</div>
                <div>止戈劍印蕩魔淵。</div>


            </div>

            <h2>§ 帳號基本資料</h2>
            <reactstrap_1.Row>
                <reactstrap_1.Col md={6}>
                    <TextField_js_1["default"] label="名稱" name="name" type="name" value={accountInfo.name || ''} onChange={handleValueChange}/>
                </reactstrap_1.Col>
                <reactstrap_1.Col md={6}>
                    <TextField_js_1["default"] label="帳號" name="account" value={accountInfo.account || ''} onChange={handleValueChange}/>
                </reactstrap_1.Col>
                <reactstrap_1.Col md={6}>
                    <TextField_js_1["default"] label="Email" name="email" type="email" value={accountInfo.email || ''} onChange={handleValueChange}/>
                </reactstrap_1.Col>
                <reactstrap_1.Col md={6}>
                    <TextField_js_1["default"] label="手機" name="mobilePhone" type="tel" value={accountInfo.mobilePhone || ''} onChange={handleValueChange}/>
                </reactstrap_1.Col>
            </reactstrap_1.Row>
        </reactstrap_1.Container>);
}
// connect to Store
var mapStateToProps = function (state, ownProps) {
    return {
        accountInfo: state.accountInfo
    };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    var targetReducer = 'accountReducer';
    return {
        dispatch: dispatch,
        handleValueChange: function (name, value) {
            dispatch({
                type: actions_js_1.Ks.ASSIGN_VALUE,
                name: name,
                value: value,
                targetReducer: targetReducer
            });
        },
        assignStateProps: function (properties) {
            dispatch({
                type: actions_js_1.Ks.ASSIGN_STATE_PROPS,
                properties: properties,
                targetReducer: targetReducer
            });
        }
    };
};
//export default FormViewAccount;
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FormViewAccount3);

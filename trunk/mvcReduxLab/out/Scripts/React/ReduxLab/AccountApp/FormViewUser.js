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
var TextField_js_1 = require("CommonMA/FormInputFields/TextField.js");
var FormViewUser = /** @class */ (function (_super) {
    __extends(FormViewUser, _super);
    function FormViewUser(props) {
        return _super.call(this, props) || this;
        //this.state = {}
        //this.handleValueChange = this.handleValueChange.bind(this)
    }
    FormViewUser.prototype.render = function () {
        var _a = this.props, userInfo = _a.userInfo, dispatch = _a.dispatch, handleValueChange = _a.handleValueChange;
        return (<reactstrap_1.Container className="mt-2 bg-secondary text-white rounded">
                <h2>§ 使用者資料</h2>
                <reactstrap_1.Row>
                    <reactstrap_1.Col md={6}>
                        <TextField_js_1["default"] label="生日" name="birthday" type="date" value={userInfo.birthday || ''} onChange={handleValueChange}/>
                    </reactstrap_1.Col>
                    <reactstrap_1.Col md={6}>
                        <TextField_js_1["default"] label="聯絡時間" name="contactTime" type="time" value={userInfo.contactTime || ''} onChange={handleValueChange}/>
                    </reactstrap_1.Col>
                    <reactstrap_1.Col md={12}>
                        <TextField_js_1["default"] label="自我介紹" name="remark" type="text" value={userInfo.remark || ''} onChange={handleValueChange}/>
                    </reactstrap_1.Col>
                </reactstrap_1.Row>
            </reactstrap_1.Container>);
    };
    return FormViewUser;
}(react_1.Component));
// connect to Store
var mapStateToProps = function (state, ownProps) {
    return {
        userInfo: state.userInfo
    };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    var targetReducer = 'userReducer';
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
//export default FormViewUser;
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FormViewUser);

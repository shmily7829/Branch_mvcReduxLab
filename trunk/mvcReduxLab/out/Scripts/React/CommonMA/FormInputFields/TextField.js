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
var prop_types_1 = require("prop-types");
var reactstrap_1 = require("reactstrap");
var CommonUtilities_js_1 = require("Common/CommonUtilities.js");
///＃ 應用範例
//<Form>
//    <FormBlock subTitle="Caption">
//        <Row form>
//            <Col sm={6}>
//                <TextField type="password" label="密碼1" name="password"
//                    placeholder="請輸入密碼"
//                    note="註：密碼需６碼以上。"
//                    validMessage="密碼格式正確。"
//                    invalidMessage="密碼過短或易猜。"
//                    value={this.state.password}
//                    readOnly={false}
//                    disabled={false}
//                    plaintext={false}
//                    onValidate={(name, value) => (value.length > 6)}
//                    onChange={this.handleValueChange}
//                />
//            </Col>
//            <Col sm={6}>
//                <TextField label="Address" name="address"
//                    value={this.state.address}
//                    onChange={this.handleValueChange}
//                />
//            </Col>
//        </Row>
//    </FormBlock>
//</Form>
var TextField = /** @class */ (function (_super) {
    __extends(TextField, _super);
    function TextField(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            inputStatus: {
                valid: false,
                invalid: false
            }
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }
    TextField.prototype.componentDidMount = function () {
        var _a = this.props, name = _a.name, value = _a.value, onValidate = _a.onValidate;
        if (typeof onValidate === "function") {
            var isValid = onValidate(name, value);
            var inputStatus = {
                valid: isValid,
                invalid: !isValid
            };
            this.setState({ inputStatus: inputStatus });
        }
    };
    TextField.prototype.render = function () {
        var _a = this.props, label = _a.label, type = _a.type, name = _a.name, value = _a.value, placeholder = _a.placeholder, note = _a.note, validMessage = _a.validMessage, invalidMessage = _a.invalidMessage, readOnly = _a.readOnly, disabled = _a.disabled, plaintext = _a.plaintext, className = _a.className;
        var inputStatus = this.state.inputStatus;
        return (<reactstrap_1.FormGroup className={className}>
                <reactstrap_1.Label hidden={CommonUtilities_js_1.cuIsEmpty(label)}>{label}</reactstrap_1.Label>
                <reactstrap_1.Input {...inputStatus} type={type} name={name} value={value || ''} placeholder={placeholder} onChange={this.handleInputChange} readOnly={readOnly} disabled={disabled} plaintext={plaintext}/>
                <reactstrap_1.FormFeedback>{invalidMessage}</reactstrap_1.FormFeedback>
                <reactstrap_1.FormFeedback valid>{validMessage}</reactstrap_1.FormFeedback>
                <reactstrap_1.FormText>{note}</reactstrap_1.FormText>
            </reactstrap_1.FormGroup>);
    };
    TextField.prototype.handleInputChange = function (e) {
        var target = e.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        var _a = this.props, onChange = _a.onChange, onValidate = _a.onValidate;
        if (typeof onChange === "function")
            onChange(name, value);
        if (typeof onValidate === "function") {
            var isValid = onValidate(name, value);
            var inputStatus = {
                valid: isValid,
                invalid: !isValid
            };
            this.setState({ inputStatus: inputStatus });
        }
    };
    return TextField;
}(react_1.Component));
TextField.propTypes = {
    type: prop_types_1["default"].string.isRequired,
    name: prop_types_1["default"].string,
    value: prop_types_1["default"].string,
    label: prop_types_1["default"].string,
    placeholder: prop_types_1["default"].string,
    note: prop_types_1["default"].string,
    validMessage: prop_types_1["default"].string,
    invalidMessage: prop_types_1["default"].string,
    readOnly: prop_types_1["default"].bool,
    disabled: prop_types_1["default"].bool,
    plaintext: prop_types_1["default"].bool,
    className: prop_types_1["default"].string,
    onValidate: prop_types_1["default"].func,
    onChange: prop_types_1["default"].func
};
TextField.defaultProps = {
    type: 'text' // text,password
};
exports["default"] = TextField;

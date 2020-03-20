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
require("./CheckWidget2-1.css");
//const CheckWidget2 = ({name, checked, desc, onChange }) => (
//    <label>
//        <input type='checkbox' name={name} className='checkbox' checked={checked}
//            onChange={onChange} />
//        <span className='checkboxInput'></span>{desc}
//    </label>
//)
/// <summary>
/// CheckWidget的改版，增加對"refs"應用的支援。
/// html sample code:
///   <CheckWidget2 ref='inputCheck' desc='描述說明' />
/// 取值 samle code:
///   this.refs.inputCheck.stack.checked
///
/// § CheckWidget2-1
///   將獨立css拆分出來
/// </summary>
var CheckWidget2 = /** @class */ (function (_super) {
    __extends(CheckWidget2, _super);
    function CheckWidget2(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: props.defaultChecked ? true : props.checked ? true : false
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    CheckWidget2.prototype.componentDidUpdate = function (prevProps, prevState) {
        //console.log('componentDidUpdate propsChanged', prevProps === this.props, 'stateChanged', prevState === this.state)
        if (prevProps !== this.props && prevState === this.state) {
            //# Props 已變化需連動觸發state異動
            //console.info('componentDidUpdate: ', this.state, this.props)
            if (this.props.checked !== undefined)
                this.setState({ checked: this.props.checked });
        }
    };
    CheckWidget2.prototype.handleChange = function (e) {
        var _this = this;
        this.setState({ checked: e.target.checked }, function () { if (_this.props.onChange)
            _this.props.onChange(_this.props.name, _this.state.checked); });
    };
    CheckWidget2.prototype.render = function () {
        /* 備份
        <label>
            <input type='checkbox' name={this.props.name} className='checkbox' checked={this.state.checked}
                onChange={this.handleChange} disabled={this.props.disabled} />
            <span className='checkboxInput'></span>{this.props.desc}
        </label>*/
        return (<label className="checkboxContainer">
                <input type="checkbox" name={this.props.name} checked={this.state.checked} disabled={this.props.disabled} onChange={this.handleChange}/>
                <span className="checkmark"></span>{this.props.desc}
            </label>);
    };
    return CheckWidget2;
}(react_1.Component));
CheckWidget2.defaultProps = {
    desc: '',
    disabled: false
};
CheckWidget2.propTypes = {
    name: prop_types_1["default"].string,
    defaultChecked: prop_types_1["default"].bool,
    checked: prop_types_1["default"].bool,
    desc: prop_types_1["default"].string,
    disabled: prop_types_1["default"].bool,
    onChange: prop_types_1["default"].func // (name,value)=>
};
exports["default"] = CheckWidget2;

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
var MyInput = /** @class */ (function (_super) {
    __extends(MyInput, _super);
    function MyInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            textValue: ''
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }
    MyInput.prototype.componentDidMount = function () {
        this.setState({ textValue: 'foo' });
    };
    MyInput.prototype.render = function () {
        return (<div className="container" style={{ backgroundColor: 'yellowgreen' }}>
                <p>說明：展示最簡單的元件運轉機制。</p>
                <input type="text" name="textValue" value={this.state.textValue} onChange={this.handleInputChange}/>
                <p>
                    <label>textValue:</label>&nbsp;{this.state.textValue}
                </p>
            </div>);
    };
    MyInput.prototype.handleInputChange = function (e) {
        var _a;
        var target = e.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        this.setState((_a = {},
            _a[name] = value,
            _a));
    };
    return MyInput;
}(react_1.Component));
exports["default"] = MyInput;

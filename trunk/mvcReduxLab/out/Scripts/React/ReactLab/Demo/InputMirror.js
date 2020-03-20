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
var InputMirror = /** @class */ (function (_super) {
    __extends(InputMirror, _super);
    function InputMirror(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: '今天天氣真好'
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleValueChange = _this.handleValueChange.bind(_this);
        return _this;
    }
    InputMirror.prototype.render = function () {
        return (<div className="container">
                <h2>§ InputMirror</h2>

                <p>
                    <input name="value" value={this.state.value} onChange={this.handleInputChange}/>
                </p>

                <p>
                    <label>鏡像１</label>
                    <input readOnly={true} value={this.state.value}/>
                </p>

                <p>
                    <label>鏡像２</label>
                    {this.state.value}
                </p>

                <hr />
            </div>);
    };
    InputMirror.prototype.handleInputChange = function (e) {
        var _a;
        var target = e.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        this.setState((_a = {},
            _a[name] = value,
            _a));
    };
    InputMirror.prototype.handleValueChange = function (name, value) {
        var _a;
        this.setState((_a = {},
            _a[name] = value,
            _a));
    };
    return InputMirror;
}(react_1.Component));
exports["default"] = InputMirror;

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
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            count: 0,
            num: 3
        };
        _this.handleIncrement = _this.handleIncrement.bind(_this);
        _this.handleDecrement = _this.handleDecrement.bind(_this);
        _this.handleAdd = _this.handleAdd.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleValueChange = _this.handleValueChange.bind(_this);
        return _this;
    }
    Counter.prototype.componentDidMount = function () {
        this.setState({ count: 99 });
    };
    Counter.prototype.render = function () {
        return (<div className="container">
                <h2>§ Counter</h2>
                <p>Count: {this.state.count}</p>
                <p>Num: {this.state.num}</p>
                <button onClick={this.handleIncrement}>加１</button>
                <button onClick={this.handleDecrement}>減１</button>
                <br /><br />
                <input type="number" name="num" value={this.state.num} onChange={this.handleInputChange}/>
                <button onClick={this.handleAdd}>加我</button>

                <hr />
            </div>);
    };
    Counter.prototype.handleInputChange = function (e) {
        var _a;
        var target = e.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        this.setState((_a = {},
            _a[name] = value,
            _a));
    };
    Counter.prototype.handleValueChange = function (name, value) {
        var _a;
        this.setState((_a = {},
            _a[name] = value,
            _a));
    };
    Counter.prototype.handleIncrement = function (e) {
        // 取環境參數
        var count = this.state.count;
        // To proceed
        this.setState({ count: count + 1 });
    };
    Counter.prototype.handleDecrement = function (e) {
        // 取環境參數
        var count = this.state.count;
        // To proceed
        this.setState({ count: count - 1 });
    };
    Counter.prototype.handleAdd = function (e) {
        // 取環境參數
        var _a = this.state, count = _a.count, num = _a.num;
        console.log('handleAdd', { count: count, num: num });
        // To proceed
        this.setState({ count: count + Number(num) });
    };
    return Counter;
}(react_1.Component));
exports["default"] = Counter;

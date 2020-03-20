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
require("babel-polyfill");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        /// 注意：state 必需是物件
        _this.state = {
            hello: ''
        };
        return _this;
    }
    /// 官方建議初始化地點
    App.prototype.componentDidMount = function () {
        this.setState({ hello: 'Hi, I am React.' });
    };
    App.prototype.render = function () {
        return (<div>
                {this.state.hello}
            </div>);
    };
    return App;
}(react_1["default"].Component));
react_dom_1["default"].render(<App />, document.getElementById('app'));

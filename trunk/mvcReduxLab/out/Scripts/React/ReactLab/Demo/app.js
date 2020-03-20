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
var TitleWidget_js_1 = require("./widgets/TitleWidget.js");
var Counter_js_1 = require("./Counter.js");
var InputMirror_js_1 = require("./InputMirror.js");
var Lister_js_1 = require("./Lister.js");
var RepoSearch_js_1 = require("./RepoSearch.js");
var MyInput_js_1 = require("./MyInput.js");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        /// 注意：state 必需是物件
        _this.state = {
            showMyInput: true,
            showCounter: false,
            showInputMirror: false,
            showLister: false,
            showRepoSearch: false
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }
    App.prototype.render = function () {
        var _a = this.state, showMyInput = _a.showMyInput, showCounter = _a.showCounter, showInputMirror = _a.showInputMirror, showLister = _a.showLister, showRepoSearch = _a.showRepoSearch;
        return (<div>
                <TitleWidget_js_1["default"] appTitle={globalappinfo.appTitle}/> 
                <div className="container">
                    <label>勾選展示項目：</label>
                    <label><input type="checkbox" name="showMyInput" checked={showMyInput} onChange={this.handleInputChange}/> 展示最簡單的元件運轉機制</label>&nbsp;
                    <label><input type="checkbox" name="showCounter" checked={showCounter} onChange={this.handleInputChange}/> Counter</label>&nbsp;
                    <label><input type="checkbox" name="showInputMirror" checked={showInputMirror} onChange={this.handleInputChange}/> InputMirror</label>&nbsp;
                    <label><input type="checkbox" name="showLister" checked={showLister} onChange={this.handleInputChange}/> Lister</label>&nbsp;
                    <label><input type="checkbox" name="showRepoSearch" checked={showRepoSearch} onChange={this.handleInputChange}/> RepoSearch</label>&nbsp;
                </div>

                {showMyInput && <MyInput_js_1["default"] />}

                {showCounter && <Counter_js_1["default"] />}

                {showInputMirror && <InputMirror_js_1["default"] />}

                {showLister && <Lister_js_1["default"] />}

                {showRepoSearch && <RepoSearch_js_1["default"] />}

            </div>);
    };
    App.prototype.handleInputChange = function (e) {
        var _a;
        var target = e.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        this.setState((_a = {},
            _a[name] = value,
            _a));
    };
    return App;
}(react_1["default"].Component));
react_dom_1["default"].render(<App />, document.getElementById('app'));

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
var react_redux_1 = require("react-redux");
var store_js_1 = require("./reducers/store.js");
var AppForm_js_1 = require("./AppForm.js");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (<react_redux_1.Provider store={store_js_1["default"]}>
                <AppForm_js_1["default"] />
            </react_redux_1.Provider>);
    };
    return App;
}(react_1.Component));
react_dom_1["default"].render(<App />, document.getElementById('app'));

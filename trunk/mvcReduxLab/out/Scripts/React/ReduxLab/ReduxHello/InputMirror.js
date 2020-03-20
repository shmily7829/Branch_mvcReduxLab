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
var InputMirror = /** @class */ (function (_super) {
    __extends(InputMirror, _super);
    function InputMirror(props) {
        var _this = _super.call(this, props) || this;
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }
    InputMirror.prototype.render = function () {
        var hello = this.props.hello;
        return (<div className="container">
                <input name="hello" value={hello} onChange={this.handleInputChange}/>
            </div>);
    };
    InputMirror.prototype.handleInputChange = function (e) {
        var target = e.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        // 法1:
        var action = { type: actions_js_1.Ks.ASSIGN_VALUE, name: name, value: value };
        this.props.dispatch(action);
        // 法2:
        this.props.dispatch(actions_js_1["default"].assignValue(name, value));
        // 法3: --- 過度包裝，除非有 高度共用性
        this.props.handleValueChange(name, value);
        // 法4: *** 回歸最原生的方法，反而是綜合考量後的最佳解 
        this.props.dispatch({ type: actions_js_1.Ks.ASSIGN_VALUE, name: name, value: value });
        //this.setState({
        //    [name]: value
        //})
    };
    return InputMirror;
}(react_1.Component));
// connect to Store
var mapStateToProps = function (state, ownProps) { return ({
    hello: state.helloInfo.hello
}); };
var targetReducer = 'helloReducer';
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    dispatch: dispatch,
    handleValueChange: function (name, value) { return dispatch({ type: actions_js_1.Ks.ASSIGN_VALUE, name: name, value: value, targetReducer: targetReducer }); }
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(InputMirror);

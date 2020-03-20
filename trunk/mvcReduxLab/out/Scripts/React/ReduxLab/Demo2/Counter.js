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
// 環境參數
var targetReducer = 'counterReducer';
//-----------------------------------------------------------------------------
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter(props) {
        var _this = _super.call(this, props) || this;
        _this.handleAdd = _this.handleAdd.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }
    Counter.prototype.render = function () {
        var _a = this.props, countInfo = _a.countInfo, dispatch = _a.dispatch;
        return (<div className="container">
                <h2>§ Redux Counter</h2>
                <p>Count: {countInfo.count}</p>
                <p>Num: {countInfo.num}</p>
                <button onClick={function () { return dispatch({ type: 'INCREASE_COUNT' }); }}>加１</button>
                <button onClick={function () { return dispatch({ type: 'DECREASE_COUNT' }); }}>減１</button>
                <br /><br />
                <input type="number" name="num" value={countInfo.num} onChange={this.handleInputChange}/>
                <button onClick={this.handleAdd}>加我</button>

                <hr />
            </div>);
    };
    Counter.prototype.handleInputChange = function (e) {
        console.log('handleInputChange');
        var target = e.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        //# dispatch(action) 二種方法
        this.props.dispatch(actions_js_1["default"].assignValue(name, value, targetReducer));
        //this.props.dispatch({ type: Ks.ASSIGN_VALUE, name, value, targetReducer })
    };
    Counter.prototype.handleAdd = function (e) {
        var _a = this.props, countInfo = _a.countInfo, dispatch = _a.dispatch;
        console.log('handleAdd', { countInfo: countInfo, dispatch: dispatch });
        var properties = { count: countInfo.count + Number(countInfo.num) };
        //# dispatch(action) 二種方法
        //dispatch(actions.assignProps(properties, targetReducer))
        dispatch({ type: actions_js_1.Ks.ASSIGN_PROPS, properties: properties, targetReducer: targetReducer });
    };
    return Counter;
}(react_1.Component));
// connect to Store
var mapStateToProps = function (state, ownProps) {
    return {
        countInfo: state.countInfo
    };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        dispatch: dispatch
    };
};
//export default Counter;
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Counter);

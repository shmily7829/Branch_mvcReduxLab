"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
/// Stateless Component --- 一般用於單向展示資料
var Hello2 = function (props) { return (<div className="container">
        {props.hello}
    </div>); };
// connect to Store
var mapStateToProps = function (state, ownProps) { return ({
    hello: state.helloInfo.hello
}); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    dispatch: dispatch
}); };
// export default Hello2
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Hello2);

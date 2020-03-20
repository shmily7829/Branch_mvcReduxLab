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
var Lister = /** @class */ (function (_super) {
    __extends(Lister, _super);
    function Lister(props) {
        var _this = _super.call(this, props) || this;
        _this.removeItem = _this.removeItem.bind(_this);
        _this.addItem = _this.addItem.bind(_this);
        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        return _this;
    }
    Lister.prototype.render = function () {
        var _this = this;
        var itemList = this.props.itemList;
        console.log('Lister.render', { itemList: itemList });
        return (<div className="container">
                <h2>§ Lister</h2>

                
                <p>
                    <input type="text" onKeyUp={this.handleKeyUp}/>
                    <span>&nbsp;按Enter新增</span>
                </p>

                <ul className="list-group">
                    {itemList.map(function (item, index) {
            return <li className="list-group-item" key={index}>
                            {index} {item.name}&nbsp;
                            <span className="badge badge-primary badge-pill">{item.count}</span>
                            <div class="btn-group float-right">
                                <button className="btn btn-primary" onClick={function (e) { return _this.updateItem(item, index); }}>讚</button>
                                <button className="btn btn-danger" onClick={function (e) { return _this.removeItem(item, index); }}>移除</button>
                            </div>
                        </li>;
        })}
                </ul>

                

            </div>);
    };
    Lister.prototype.removeItem = function (item, index) {
        this.props.dispRemoveItem(index);
    };
    Lister.prototype.addItem = function (newItem) {
        this.props.dispInsertItem(newItem);
    };
    Lister.prototype.updateItem = function (item, index) {
        item.count = item.count + 1; // 設定新值
        this.props.dispUpdateItem(index, item);
    };
    Lister.prototype.handleKeyUp = function (e) {
        //## where press <Enter>
        if (e.keyCode === 13) {
            var target = e.target;
            console.log('handleKeyUp:Enter', target.value);
            var newItem = {
                name: target.value,
                count: 0
            };
            this.addItem(newItem);
            // reset the target Input
            target.value = '';
        }
    };
    return Lister;
}(react_1.Component));
// connect to Store
var mapStateToProps = function (state, ownProps) {
    return {
        itemList: state.itemList
    };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    var targetReducer = 'listerReducer';
    return {
        dispatch: dispatch,
        dispInsertItem: function (payload) {
            dispatch({ type: actions_js_1.Ks.INSERT_ITEM, payload: payload, targetReducer: targetReducer });
        },
        dispRemoveItem: function (index) {
            dispatch({ type: actions_js_1.Ks.REMOVE_ITEM, index: index, targetReducer: targetReducer });
        },
        dispUpdateItem: function (index, payload) {
            dispatch({ type: actions_js_1.Ks.UPDATE_ITEM, index: index, payload: payload, targetReducer: targetReducer });
        }
    };
};
//export default Lister;
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Lister);

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
var Lister = /** @class */ (function (_super) {
    __extends(Lister, _super);
    function Lister(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            itemList: []
        };
        _this.removeItem = _this.removeItem.bind(_this);
        _this.addItem = _this.addItem.bind(_this);
        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        return _this;
    }
    Lister.prototype.componentDidMount = function () {
        this.setState({
            itemList: ['Apple', 'Samsung', 'Sony', 'ASUS']
        });
    };
    Lister.prototype.render = function () {
        var _this = this;
        var itemList = this.state.itemList;
        return (<div className="container">
                <h2>§ Lister</h2>

                
                <p>
                    <input type="text" onKeyUp={this.handleKeyUp}/>
                    <span>&nbsp;按Enter新增</span>
                </p>

                <ul>
                    {itemList.map(function (item, index) {
            return <li key={index} onClick={function (e) { return _this.removeItem(item, index); }}>{index} {item}</li>;
        })}
                </ul>

                <h4>table版本</h4>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>項次</th>
                            <th>內容</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemList.map(function (item, index) {
            return <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={function (e) { return _this.removeItem(item, index); }}>移除</button>
                                </td>
                            </tr>;
        })}
                    </tbody>
                </table>

            </div>);
    };
    Lister.prototype.removeItem = function (item, index) {
        console.log('removeItem', { item: item, index: index });
        var itemList = this.state.itemList;
        itemList.splice(index, 1);
        // update & refresh UI
        this.setState({ itemList: itemList });
    };
    Lister.prototype.addItem = function (newItem) {
        console.log('addItem', { newItem: newItem });
        var itemList = this.state.itemList;
        itemList.push(newItem);
        // update & refresh UI
        this.setState({ itemList: itemList });
    };
    Lister.prototype.handleKeyUp = function (e) {
        //## where press <Enter>
        if (e.keyCode === 13) {
            var target = e.target;
            console.log('handleKeyUp:Enter', target.value);
            var newItem = target.value;
            this.addItem(newItem);
            // reset the target Input
            target.value = '';
        }
    };
    return Lister;
}(react_1.Component));
exports["default"] = Lister;

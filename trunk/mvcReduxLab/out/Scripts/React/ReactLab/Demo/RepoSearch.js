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
var axios_1 = require("axios");
var RepoSearch = /** @class */ (function (_super) {
    __extends(RepoSearch, _super);
    function RepoSearch(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            queryParam: 'steak',
            repoList: [],
            f_UIBlock: false
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleSearch = _this.handleSearch.bind(_this);
        return _this;
    }
    RepoSearch.prototype.render = function () {
        var f_UIBlock = this.state.f_UIBlock;
        return (<div className="container">
                <h2>§ RepoSearch on GitHub</h2>

                <input type='text' name='queryParam' value={this.state.queryParam} onChange={this.handleInputChange}/>
                
                <button className="btn btn-primary" type="button" onClick={this.handleSearch} disabled={f_UIBlock}>
                    {f_UIBlock && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>}
                    {f_UIBlock ? 'Loading...' : 'Search'}
                </button>

                <div>
                    <label>count:</label> {this.state.repoList.length}
                    <ul>
                        {this.state.repoList.map(function (repo, index) {
            return <li key={index}><a href={repo.html_url}>{repo.name}</a></li>;
        })}
                    </ul>
                </div>

            </div>);
    };
    RepoSearch.prototype.handleInputChange = function (event) {
        var _a;
        var target = event.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        this.setState((_a = {},
            _a[name] = value,
            _a));
    };
    RepoSearch.prototype.handleSearch = function (e) {
        var _this = this;
        var queryParam = this.state.queryParam;
        console.log('handleSearch', { queryParam: queryParam });
        this.setState({ f_UIBlock: true });
        var url = 'https://api.github.com/search/repositories?q=' + queryParam;
        axios_1["default"].get(url).then(function (resp) {
            console.log('handleSearch success', resp.data);
            var repoList = resp.data.items;
            _this.setState({ repoList: repoList });
        })["catch"](function (xhr) {
            console.error('handleSearch FAIL!', { xhr: xhr });
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'handleSearch FAIL!'
            });
        })["finally"](function () {
            _this.setState({ f_UIBlock: false });
        });
    };
    return RepoSearch;
}(react_1.Component));
exports["default"] = RepoSearch;

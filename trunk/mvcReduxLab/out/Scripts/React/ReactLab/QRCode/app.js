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
var qrcode_react_1 = require("qrcode.react");
var reactstrap_1 = require("reactstrap");
var reactstrap_2 = require("reactstrap");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        /// 注意：state 必需是物件
        _this.state = {
            value: 'http://www.asiavista.com.tw/aaaaa/bbbbb/ccccc?ddddd=eeeee&fffff=ggggg/hhhhh/iiiii/jjjjj/kkkkk/lllll/mmmmm/nnnnn/ooooo/ppppp/qqqqq/rrrrr/sssss/ttttt/uuuuuu/vvvvv/wwwww/xxxxx/yyyyy/zzzz',
            includeMargin: false,
            level: 'L',
            size: 128,
            bgColor: '#FFFFFF',
            fgColor: '#000000'
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }
    /// 官方建議初始化地點
    App.prototype.componentDidMount = function () {
        this.setState({ hello: 'QR Code Lab' });
    };
    App.prototype.render = function () {
        return (<reactstrap_1.Container>
                <h2>QRCode練習</h2>
                <reactstrap_2.Form>
                    <reactstrap_2.FormGroup row>
                        <reactstrap_2.Label sm={2}>value</reactstrap_2.Label>
                        <reactstrap_1.Col sm={10}>
                            <reactstrap_2.Input type="text" name="value" value={this.state.value} onChange={this.handleInputChange}/>
                        </reactstrap_1.Col>
                    </reactstrap_2.FormGroup>
                    <reactstrap_2.FormGroup row>
                        <reactstrap_2.Label xs={4} sm={2}></reactstrap_2.Label>
                        <reactstrap_1.Col xs={8} sm={10}>
                            <reactstrap_2.FormGroup check>
                                <reactstrap_2.Label check>
                                    <reactstrap_2.Input type="checkbox" name="includeMargin" value={this.state.includeMargin} onChange={this.handleInputChange}/>&nbsp;
                                    includeMargin
                                </reactstrap_2.Label>
                            </reactstrap_2.FormGroup>
                        </reactstrap_1.Col>
                    </reactstrap_2.FormGroup>
                    <reactstrap_2.FormGroup row>
                        <reactstrap_2.Label xs={4} sm={2}>level</reactstrap_2.Label>
                        <reactstrap_1.Col xs={8} sm={10}>
                            <reactstrap_2.Input type="select" name="level" value={this.state.level} onChange={this.handleInputChange}>
                                <option>L</option>
                                <option>M</option>
                                <option>Q</option>
                                <option>H</option>
                            </reactstrap_2.Input>
                        </reactstrap_1.Col>
                    </reactstrap_2.FormGroup>
                    <reactstrap_2.FormGroup row>
                        <reactstrap_2.Label xs={4} sm={2}>size</reactstrap_2.Label>
                        <reactstrap_1.Col xs={8} sm={10}>
                            <reactstrap_2.Input type="number" name="size" value={this.state.size} onChange={this.handleInputChange}/>
                        </reactstrap_1.Col>
                    </reactstrap_2.FormGroup>
                    <reactstrap_2.FormGroup row>
                        <reactstrap_2.Label xs={4} sm={2}>bgColor</reactstrap_2.Label>
                        <reactstrap_1.Col xs={8} sm={10}>
                            <reactstrap_2.Input type="text" name="bgColor" value={this.state.bgColor} onChange={this.handleInputChange}/>
                        </reactstrap_1.Col>
                    </reactstrap_2.FormGroup>
                    <reactstrap_2.FormGroup row>
                        <reactstrap_2.Label xs={4} sm={2}>fgColor</reactstrap_2.Label>
                        <reactstrap_1.Col xs={8} sm={10}>
                            <reactstrap_2.Input type="text" name="fgColor" value={this.state.fgColor} onChange={this.handleInputChange}/>
                        </reactstrap_1.Col>
                    </reactstrap_2.FormGroup>
                </reactstrap_2.Form>

                <div style={{ border: '1px solid', width: 'fit-content', height: 'fit-content' }}>
                    <qrcode_react_1["default"] value={this.state.value} includeMargin={this.state.includeMargin} level={this.state.level} size={Number(this.state.size)} bgColor={this.state.bgColor} fgColor={this.state.fgColor}/>
                </div>

            </reactstrap_1.Container>);
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

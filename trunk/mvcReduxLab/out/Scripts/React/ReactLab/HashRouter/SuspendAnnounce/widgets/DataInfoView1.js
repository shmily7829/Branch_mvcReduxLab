"use strict";
exports.__esModule = true;
var react_1 = require("react");
var reactstrap_1 = require("reactstrap");
/// 動態總覽
var DataInfoView1 = function (_a) {
    var dataInfo = _a.dataInfo;
    return (<reactstrap_1.Table bordered hover>
        <tbody>
            <tr>
                <th className="table-active">預定進港</th>
                <td><span className="text-danger">2019/03/20 08:00</span></td>
            </tr>
            <tr>
                <th className="table-active">實際進港</th>
                <td>2019/03/20 07:09</td>
            </tr>
            <tr>
                <th className="table-active">預定出港</th>
                <td><span className="text-danger">2019/03/20 09:00</span></td>
            </tr>
            <tr>
                <th className="table-active">實際出港</th>
                <td>無</td>
            </tr>
            <tr>
                <th className="table-active">船舶種類</th>
                <td>B41．雜貨船</td>
            </tr>
            <tr>
                <th className="table-active">靠泊碼頭</th>
                <td>台中港04A碼頭</td>
            </tr>
        </tbody>
    </reactstrap_1.Table>);
};
exports["default"] = DataInfoView1;

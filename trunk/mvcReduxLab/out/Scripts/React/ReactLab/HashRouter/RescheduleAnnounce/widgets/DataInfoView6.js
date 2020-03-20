"use strict";
exports.__esModule = true;
var react_1 = require("react");
var reactstrap_1 = require("reactstrap");
/// 實際出港
var DataInfoView6 = function (_a) {
    var dataInfo = _a.dataInfo;
    return (<reactstrap_1.Table bordered hover>
        <tbody>
            <tr>
                <th className="table-active">簽證編號</th>
                <td>ATXG108001726</td>
            </tr>
            <tr>
                <th className="table-active">實際離港日期</th>
                <td>無</td>
            </tr>
            <tr>
                <th className="table-active">解纜日期</th>
                <td>無</td>
            </tr>
            <tr>
                <th className="table-active">離泊碼頭</th>
                <td>無</td>
            </tr>
        </tbody>
    </reactstrap_1.Table>);
};
exports["default"] = DataInfoView6;

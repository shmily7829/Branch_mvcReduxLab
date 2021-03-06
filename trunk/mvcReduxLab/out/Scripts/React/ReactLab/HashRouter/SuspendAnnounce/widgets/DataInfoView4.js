"use strict";
exports.__esModule = true;
var react_1 = require("react");
var reactstrap_1 = require("reactstrap");
/// 實際進港
var DataInfoView4 = function (_a) {
    var dataInfo = _a.dataInfo;
    return (<reactstrap_1.Table bordered hover>
        <tbody>
            <tr>
                <th className="table-active">簽證編號</th>
                <td>ATXG108001726</td>
            </tr>
            <tr>
                <th className="table-active">船舶號數</th>
                <td>V17094</td>
            </tr>
            <tr>
                <th className="table-active">實際進港時間</th>
                <td>2019/03/20 07:09</td>
            </tr>
            <tr>
                <th className="table-active">繫纜時間</th>
                <td>2019/03/20 07:20</td>
            </tr>
            <tr>
                <th className="table-active">靠泊碼頭</th>
                <td>臺中港09碼頭</td>
            </tr>
            <tr>
                <th className="table-active">結案時間</th>
                <td>無</td>
            </tr>
            <tr>
                <th className="table-active">進港港口</th>
                <td>臺中港</td>
            </tr>
            <tr>
                <th className="table-active">結案原因</th>
                <td>無</td>
            </tr>
        </tbody>
    </reactstrap_1.Table>);
};
exports["default"] = DataInfoView4;

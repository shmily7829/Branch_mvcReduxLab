"use strict";
exports.__esModule = true;
var react_1 = require("react");
var reactstrap_1 = require("reactstrap");
var nowDate = new Date();
var getNowDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
    nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate();
/// 動態總覽
var DataInfoView1 = function (_a) {
    var dataInfo = _a.dataInfo;
    return (<reactstrap_1.Table bordered hover>
        <tbody>
            <tr>
                <th className="table-active mb-0">航班狀態</th>
                <td><span>準點</span></td>
            </tr>
            <tr>
                <th className="table-active mb-0">出發港口</th>
                <td>福建福州</td>
            </tr>
            <tr>
                <th className="table-active mb-0">開航時間</th>
                <td><span>{"2019/04/02 14:30"}</span></td>
            </tr>
            <tr>
                <th className="table-active mb-0">目的港口</th>
                <td>台北港</td>
            </tr>
            <tr>
                <th className="table-active mb-0">抵達時間</th>
                <td>{"2019/04/02 17:30"}</td>
            </tr>
            <tr>
                <th className="table-active mb-0">行經港口</th>
                <td>請參閱航線時刻表</td>
            </tr>
            <tr>
                <th className="table-active mb-0">營運公司</th>
                <td>東聯航運股份有限公司 </td>
            </tr>
            <tr>
                <th className="table-active mb-0">聯絡方式</th>
                <td>02-25046111</td>
            </tr>
        </tbody>
    </reactstrap_1.Table>);
};
exports["default"] = DataInfoView1;

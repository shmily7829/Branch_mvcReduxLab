"use strict";
exports.__esModule = true;
var react_1 = require("react");
var reactstrap_1 = require("reactstrap");
var reactstrap_2 = require("reactstrap");
/// 航線時刻表
var DataInfoView2 = function (_a) {
    var dataInfo = _a.dataInfo;
    return (<div>
        <reactstrap_1.ListGroup>
            <reactstrap_1.ListGroupItem>
                <reactstrap_2.Row noGutters>
                    <reactstrap_2.Col xs={4}>行經港口</reactstrap_2.Col>
                    <reactstrap_2.Col xs={4}>實際抵達時間</reactstrap_2.Col>
                    <reactstrap_2.Col xs={4}>實際開航時間</reactstrap_2.Col>
                </reactstrap_2.Row>
            </reactstrap_1.ListGroupItem>
            {dataInfo.itemList.map(function (item, index) {
        return <reactstrap_1.ListGroupItem key={index}>
                    <reactstrap_2.Row noGutters>
                        <reactstrap_2.Col xs={4}>{item.value1}</reactstrap_2.Col>
                        <reactstrap_2.Col xs={4}>{item.value2}</reactstrap_2.Col>
                        <reactstrap_2.Col xs={4}>{item.value3}</reactstrap_2.Col>
                        <reactstrap_2.Col xd={12}>
                            {item.value4 === '準點' && <span className="lead font-weight-bold text-primary">準點</span>}
                            {item.value4 !== '準點' && <span className="lead font-weight-bold text-danger">誤點</span>}
                        </reactstrap_2.Col>
                    </reactstrap_2.Row>
                </reactstrap_1.ListGroupItem>;
    })}
        </reactstrap_1.ListGroup>
    </div>);
};
exports["default"] = DataInfoView2;

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
var actions_js_1 = require("./actions.js");
var apiClient_js_1 = require("./apiClient.js");
/// 受理單位
var FormView1 = /** @class */ (function (_super) {
    __extends(FormView1, _super);
    function FormView1(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            adminAreaList: [] // 受理單位
        };
        return _this;
    }
    FormView1.prototype.componentWillMount = function () {
        var _this = this;
        //## init UI common data
        apiClient_js_1["default"].getAdminAreaListPromise().then(function (resp) {
            var adminAreaList = resp.data;
            _this.setState({
                adminAreaList: adminAreaList
            });
        });
    };
    //componentDidMount() {
    //    // 取環境參數
    //    const { appInfo, commandBar, applicantInfo } = this.props;
    //    console.log('FormView1.componentDidMount', { appInfo, commandBar, applicantInfo })
    //
    //    // 取 from_mode, form_no
    //    let form_mode = 'INIT'
    //    let form_no = ''
    //    if (commandBar) {
    //        form_mode = commandBar.form_mode
    //        form_no = commandBar.form_no
    //    } else if (appInfo) {
    //        form_mode = appInfo.entryMode
    //        form_no = appInfo.entryFormNo
    //    }
    //
    //    //## first to fill UI 
    //    // 當 為申請模式 且 未初始化，才取申請人的資料下來
    //    if (['APPLY', 'NEW'].includes(form_mode) && cuIsEmpty(form_no) && cuIsEmpty(this.props.recUnit)) {
    //        //## first to fill UI 
    //        const args = { invoiceNo: applicantInfo.applicantId }
    //        apiClient.getCompanyAdminAreaPromise(args).then((resp) => {
    //            const recUnit = resp.data
    //            this.props.handleValueChange('recUnit', recUnit)
    //        })
    //    }
    //}
    FormView1.prototype.render = function () {
        //// 受理單位
        //const adminArea = [
        //    { areaCode: 'KEL', areaName: '北部航務中心' },
        //    { areaCode: 'TPE', areaName: '北部航務中心(𦤼北)' },
        //    { areaCode: 'SUO', areaName: '北部航務中心(蘇澳)' },
        //    { areaCode: 'TXG', areaName: '中部航務中心' },
        //    { areaCode: 'KHH', areaName: '南部航務中心' },
        //    { areaCode: 'HUN', areaName: '東部航務中心' }
        //];
        var _this = this;
        return (<div className='block'>
                <table className='tb_style' width='100%' cellSpacing='0' cellPadding='0' border='0'>
                    <tbody>
                        <tr className='bg'>
                            <th width='15%'>表單編號</th>
                            <td>
                                {this.props.form_no}
                            </td>
                        </tr>
                        <tr className='bg'>
                            <th width='15%'>受理單位</th>
                            <td>
                                
                                <div className="selectbox">
                                    <select value={this.props.recUnit} onChange={function (e) { return _this.props.handleValueChange('recUnit', e.target.value); }}>
                                        <option value='' hidden>請選擇</option>
                                        {this.state.adminAreaList.map(function (item, index) {
            return <option key={index} value={item.areaCode}>{item.areaName}</option>;
        })}
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>);
    };
    return FormView1;
}(react_1.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        appInfo: state.appInfo,
        commandBar: state.commandBar,
        applicantInfo: state.formData2,
        form_no: state.commandBar.form_no,
        recUnit: state.formData1.recUnit
    };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleValueChange: function (name, value) {
            dispatch(actions_js_1["default"].assignValue(name, value, 'formView1Reducer'));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FormView1);

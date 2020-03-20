"use strict";
/// 
/// common utilities
/// 共通的核心與最常用的高階基本函式。
/// 以"cu"為命名開頭。
/// 
exports.__esModule = true;
var moment_1 = require("moment");
/// 是空白字串： check IS empty / isNullOrWhitespace
function cuIsEmpty(input) {
    return !input || !input.trim();
}
exports.cuIsEmpty = cuIsEmpty;
/// 非空白字串： check NOT empty
function cuNotEmpty(input) {
    return !(!input || !input.trim());
}
exports.cuNotEmpty = cuNotEmpty;
/// when null as empty string.
function cuNull2Empty(input) {
    if (!input || !input.trim())
        return '';
    return input; // otherwise be self.
}
exports.cuNull2Empty = cuNull2Empty;
/// 檢查物件是否存在實體 --- 為物件或陣列且有內容物。
function cuIsExists(obj) {
    if (Array.isArray(obj) && obj.length > 0)
        return true;
    if (typeof obj !== 'object')
        return false;
    if (obj == null)
        return false;
    return (Object.keys(obj).length > 0);
}
exports.cuIsExists = cuIsExists;
/// 檢查 obj === {} ?
function cuIsEmptyObj(obj) {
    return (obj instanceof Object) && Object.keys(obj).length === 0 && obj.constructor === Object;
}
exports.cuIsEmptyObj = cuIsEmptyObj;
/// helper function: 格式化數字成有千分位字串
function cuFmtNum(num) {
    var parts;
    // 判断是否为数字
    if (!isNaN(parseFloat(num)) && isFinite(num)) {
        // 把类似 .5, 5. 之类的数据转化成0.5, 5, 为数据精度处理做准, 至于为什么
        // 不在判断中直接写 if (!isNaN(num = parseFloat(num)) && isFinite(num))
        // 是因为parseFloat有一个奇怪的精度问题, 比如 parseFloat(12312312.1234567119)
        // 的值变成了 12312312.123456713
        num = Number(num);
        // 处理小数点位数
        num = num.toString();
        // 分离数字的小数部分和整数部分
        parts = num.split('.');
        // 整数部分加[separator]分隔, 借用一个著名的正则表达式
        parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (','));
        return parts.join('.');
    }
    return num;
}
exports.cuFmtNum = cuFmtNum;
/// helper function: 再包裝 str.substring(indexStart[, indexEnd])
function cuSubstring(str, indexStart, indexEnd) {
    return cuIsEmpty(str) ? '' : str.substring(indexStart, indexEnd);
}
exports.cuSubstring = cuSubstring;
/// helper function: 再包裝 str.substr(start[, length])
function cuSubstr(str, start, length) {
    return cuIsEmpty(str) ? '' : str.substr(start, length);
}
exports.cuSubstr = cuSubstr;
//-----------------------------------------------
/// 日期格式 YYYYMMDD → YYYY/MM/DD
function cuYmd8ToYmd10(strDate) {
    return cuIsEmpty(strDate) ? '' : moment_1["default"](strDate, 'YYYYMMDD').format('YYYY/MM/DD');
}
exports.cuYmd8ToYmd10 = cuYmd8ToYmd10;
/// 日期格式 YYYY/MM/DD → YYYYMMDD
function cuYmd10ToYmd8(strDate) {
    return cuIsEmpty(strDate) ? '' : moment_1["default"](strDate, 'YYYY/MM/DD').format('YYYYMMDD');
}
exports.cuYmd10ToYmd8 = cuYmd10ToYmd8;
/// 12碼日期時間格式互轉 YYYYMMDDHHmm → YYYY/MM/DD HH:mm
function cuYmdHm12ToYmdHm16(strDatetime) {
    return cuIsEmpty(strDatetime) ? '' : moment_1["default"](strDatetime, 'YYYYMMDDHHmm').format('YYYY/MM/DD HH:mm');
}
exports.cuYmdHm12ToYmdHm16 = cuYmdHm12ToYmdHm16;
/// 12碼日期時間格式互轉 YYYY/MM/DD HH:mm → YYYYMMDDHHmm
function cuYmdHm16ToYmdHm12(strDatetime) {
    return cuIsEmpty(strDatetime) ? '' : moment_1["default"](strDatetime, 'YYYY/MM/DD HH:mm').format('YYYYMMDDHHmm');
}
exports.cuYmdHm16ToYmdHm12 = cuYmdHm16ToYmdHm12;
/// 今天 10碼
function cuToday() {
    return moment_1["default"]().format('YYYY/MM/DD');
}
exports.cuToday = cuToday;
/// 現在 16碼
function cuNow() {
    return moment_1["default"]().format('YYYY/MM/DD HH:mm');
}
exports.cuNow = cuNow;
///// 現在幾點幾分 5碼 --- 暫時保留不用
//export function cuTime() {
//    return moment().format('HH:mm');
//}
//--------------------------------------------------
// 錯誤處理轉助函式 : BEGIN
/// 解析RCode錯誤訊息
/// RCode := { MessageCode, Message, Note }
function castRCodePromise(originalPromise) {
    return Promise.resolve(originalPromise).then(function (resp) {
        //console.log('castRCodePromise then', resp)
        var rCode = resp.data;
        if (typeof rCode === 'object' && typeof rCode.MessageCode === 'string') { // is rCode?
            if (rCode.MessageCode === '11000')
                return resp; // truly success
            var xhr = Object.assign({}, resp, { rCode: rCode });
            throw xhr; // throw xhr
        }
        // success
        return resp;
    });
}
exports.castRCodePromise = castRCodePromise;
/// 解析RCode錯誤訊息並alert
function castRCodeAlertPromise(originalPromise) {
    return Promise.resolve(originalPromise).then(function (resp) {
        //console.log('castRCodeAlertPromise then', resp)
        var rCode = resp.data;
        if (typeof rCode === 'object' && typeof rCode.MessageCode === 'string') { // is rCode?
            if (rCode.MessageCode === '11000')
                return resp; // truly success
            var xhr = Object.assign({}, resp, { rCode: rCode });
            throw xhr; // throw xhr
        }
        // success
        return resp;
    })["catch"](function (xhr) {
        //console.log('castRCodeAlertPromise catch', xhr)
        if (xhr.rCode) {
            // 邏輯錯誤
            console.error('錯誤訊息', xhr.rCode.MessageCode + ' ' + xhr.rCode.Message, xhr.rCode.Note);
            alert('錯誤訊息：\n' + xhr.rCode.MessageCode + ' ' + xhr.rCode.Message + '\n' + xhr.rCode.Note);
        }
        else {
            // 系統錯誤
            console.exception('系統錯誤！', xhr.response.status + '.' + xhr.response.statusText, xhr);
            alert('系統錯誤！\n' + xhr.response.status + '.' + xhr.response.statusText);
        }
        throw xhr; // throw xhr
    });
}
exports.castRCodeAlertPromise = castRCodeAlertPromise;
// 錯誤處理轉助函式 : END
//--------------------------------------------------
// 共用的商業邏輯判斷 ： BEGIN
/// 判斷登入者是否為代辦
function cuIsAssignee(loginUserInfo) {
    //console.log('ON: isAssignee', loginUserInfo)
    // 若登入者來自航務中心(北航、南航…etc)，則是代辦
    if (loginUserInfo.cpId === 'A00000011203')
        return true;
    return false;
}
exports.cuIsAssignee = cuIsAssignee;
/// 判斷登入者是否為代理商
function cuIsAgent(loginUserInfo) {
    //console.log('ON: isAgent', loginUserInfo)
    // 無代理資料
    if (!Array.isArray(loginUserInfo.identityList))
        return false;
    // 若有[02.船務代理業]，則是代理人
    if (loginUserInfo.identityList.findIndex(function (c) { return c.identityCd == '02'; }) > -1)
        return true;
    // othrewise
    return false;
}
exports.cuIsAgent = cuIsAgent;
/// 檢查是否有必要的許可證
function cuCheckRequiredIdentity(loginUserInfo, requiredIdentityList) {
    //console.log('cuCheckRequiredIdentity', {loginUserInfo, requiredIdentityList})
    //01.船舶運送業 =>1
    //02.船務代理業 =>3
    //03.海運承攬業 =>4
    //04.貨櫃業     =>5
    return loginUserInfo.identityList.some(function (identity) {
        return requiredIdentityList.some(function (reqId) {
            //console.log('identityCd', identity.identityCd, reqId)
            return identity.identityCd === reqId;
        });
    });
}
exports.cuCheckRequiredIdentity = cuCheckRequiredIdentity;
/// 取得可選取業別清單
function cuGetRadioBtnList(identityList, requiredIdentityList) {
    var item = [];
    identityList.forEach(function (identity) {
        requiredIdentityList.forEach(function (reqId) {
            if (identity.identityCd === reqId) {
                var value = '';
                switch (identity.identityCd) {
                    case '01':
                        value = '1';
                        break;
                    case '02':
                        value = '3';
                        break;
                    case '03':
                        value = '4';
                        break;
                    case '04':
                        value = '5';
                        break;
                    case '06':
                        value = '8';
                        break;
                    case '07':
                        value = '9';
                        break;
                    case '09':
                        value = 'A';
                        break;
                    default:
                        break;
                }
                item.push({ value: value, label: identity.identityName, licenseNo: identity.licenseNo });
            }
        });
    });
    return item;
}
exports.cuGetRadioBtnList = cuGetRadioBtnList;
/// 判斷targetReducer是否match
function matchTargetReducer(action, targetReducer) {
    var match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === targetReducer;
    //console.log('matchTargetReducer', {action, targetReducer, match})
    return match;
}
exports.matchTargetReducer = matchTargetReducer;
// 共用的商業邏輯判斷 ： END
//--------------------------------------------------

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_select_1 = require("react-select");
var customStyles = undefined;
//const customStyles = {
//    option: (base, state) => {
//        //console.log('customStyles option', base, state)
//        return Object.assign({}, base, {
//            padding:'4px 12px',
//            textAlign: 'left'
//        })
//    },
//    control: (base, state) => {
//        //console.log('customStyles control', base, state)
//        //console.log('isDisabled', state.isDisabled, 'readOnly', state.selectProps.readOnly)        
//        const backgroundColor = state.selectProps.readOnly ? '#e9f0f5' : state.isDisabled ? '#ddd' : '#fff'
//        return Object.assign({}, base, {
//            height: 30,
//            minHeight: 'unset',
//            backgroundColor: backgroundColor, //'#fff',
//        })
//    },
//    singleValue : (base, state) => {
//        //console.log('customStyles singleValue', base, state)
//        const color = state.selectProps.readOnly ? '#64abe1' : 'unset';
//        return Object.assign({}, base, {
//            color: color,
//        })
//    },
//    valueContainer: (base, state) => {
//        return Object.assign({}, base, {
//            marginTop: -6
//        })
//    },
//    indicatorsContainer: (base, state) => {
//        return Object.assign({}, base, {
//            marginTop: -6
//        })
//    },
//    indicatorSeparator: (base, state) => {
//        return Object.assign({}, base, {
//            marginTop: 6
//        })
//    }
//}
/// 過濾選取𠾖
var FilterSelect = function (_a) {
    var options = _a.options, name = _a.name, value = _a.value, labelKey = _a.labelKey, valueKey = _a.valueKey, placeholder = _a.placeholder, disabled = _a.disabled, readOnly = _a.readOnly, onChange = _a.onChange;
    var currentItem = options.find(function (x) { return x[valueKey] === value; });
    return (<react_select_1["default"] classNamePrefix='react-select' options={options} value={currentItem} styles={customStyles} placeholder={placeholder} onChange={function (item) { return onChange(name, Array.isArray(item) ? null : item); }} readOnly={readOnly} isDisabled={readOnly ? true : disabled} isClearable={true} isSearchable={true} getOptionLabel={function (item) { return item[labelKey]; }} getOptionValue={function (item) { return item[valueKey]; }}/>);
};
FilterSelect.propTypes = {
    name: prop_types_1["default"].string,
    value: prop_types_1["default"].string,
    labelKey: prop_types_1["default"].string,
    valueKey: prop_types_1["default"].string,
    options: prop_types_1["default"].array.isRequired,
    placeholder: prop_types_1["default"].string,
    disabled: prop_types_1["default"].bool,
    readOnly: prop_types_1["default"].bool,
    onChange: prop_types_1["default"].func
};
FilterSelect.defaultProps = {
    name: '',
    labelKey: 'label',
    valueKey: 'value',
    placeholder: '請選擇',
    disabled: false,
    readOnly: false
};
exports["default"] = FilterSelect;

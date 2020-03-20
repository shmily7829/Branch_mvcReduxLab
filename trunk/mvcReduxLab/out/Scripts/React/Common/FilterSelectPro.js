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
var prop_types_1 = require("prop-types");
var react_select_1 = require("react-select");
var axios_1 = require("axios");
var customStyles = undefined;
//const customStyles = {
//    option: (base, state) => {
//        //console.log('customStyles option', base, state)
//        return Object.assign({}, base, {
//            padding: '4px 12px',
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
var FilterSelectPro = /** @class */ (function (_super) {
    __extends(FilterSelectPro, _super);
    function FilterSelectPro(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            codeList: []
        };
        return _this;
    }
    FilterSelectPro.prototype.componentWillMount = function () {
        var _this = this;
        axios_1["default"].post(this.props.dataUrl, this.props.dataArgs)
            .then(function (resp) {
            var codeList = Array.isArray(resp.data) ? resp.data : [];
            _this.setState({ codeList: codeList });
        })["catch"](function (xhr) {
            console.error('FilterSelectPro componentWillMount', xhr);
        });
    };
    FilterSelectPro.prototype.componentWillUpdate = function (nextProps, nextState) {
        var _this = this;
        if (this.state === nextState && this.props !== nextProps && nextProps['dataArgs']) {
            axios_1["default"].post(this.props.dataUrl, nextProps['dataArgs'])
                .then(function (resp) {
                var codeList = Array.isArray(resp.data) ? resp.data : [];
                _this.setState({ codeList: codeList });
            })["catch"](function (xhr) {
                console.error('FilterSelectPro componentWillUpdate', xhr);
            });
        }
    };
    // dispatching an action based on state change
    FilterSelectPro.prototype.componentDidUpdate = function (nextProps, nextState) {
        //if (this.state === nextState && this.props !== nextProps) {
        //    console.info('componentDidUpdate dataArgs', this.props['dataArgs'], nextProps['dataArgs'])
        //}
    };
    FilterSelectPro.prototype.render = function () {
        var _this = this;
        //const currentItem = this.state.codeList.find(x => x[this.props.valueKey] === this.props.value) ||''
        var currentItem = this.state.codeList.find(function (x) { return x[_this.props.valueKey] === _this.props.value; }) || '';
        return (<react_select_1["default"] classNamePrefix='react-select' options={this.state.codeList} value={currentItem} styles={customStyles} placeholder={this.props.placeholder} onChange={function (item) { return _this.props.onChange(_this.props.name, Array.isArray(item) ? null : item); }} isClearable={true} isSearchable={true} readOnly={this.props.readOnly} isDisabled={this.props.readOnly ? true : this.props.disabled} getOptionLabel={function (item) { return item[_this.props.labelKey]; }} getOptionValue={function (item) { return item[_this.props.valueKey]; }}/>);
    };
    return FilterSelectPro;
}(react_1.Component));
FilterSelectPro.propTypes = {
    name: prop_types_1["default"].string,
    value: prop_types_1["default"].string,
    labelKey: prop_types_1["default"].string,
    valueKey: prop_types_1["default"].string,
    dataUrl: prop_types_1["default"].string.isRequired,
    dataArgs: prop_types_1["default"].object,
    placeholder: prop_types_1["default"].string,
    disabled: prop_types_1["default"].bool,
    readOnly: prop_types_1["default"].bool,
    onChange: prop_types_1["default"].func
};
FilterSelectPro.defaultProps = {
    name: '',
    labelKey: 'label',
    valueKey: 'value',
    placeholder: '請選擇',
    disabled: false,
    readOnly: false
};
exports["default"] = FilterSelectPro;

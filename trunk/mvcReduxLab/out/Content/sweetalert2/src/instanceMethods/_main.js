"use strict";
exports.__esModule = true;
var params_js_1 = require("../utils/params.js");
var dom = require("../utils/dom/index.js");
var classes_js_1 = require("../utils/classes.js");
var Timer_js_1 = require("../utils/Timer.js");
var utils_js_1 = require("../utils/utils.js");
var setParameters_js_1 = require("../utils/setParameters.js");
var globalState_js_1 = require("../globalState.js");
var openPopup_js_1 = require("../utils/openPopup.js");
var privateProps_js_1 = require("../privateProps.js");
var privateMethods_js_1 = require("../privateMethods.js");
function _main(userParams) {
    var _this = this;
    params_js_1.showWarningsForParams(userParams);
    var innerParams = Object.assign({}, params_js_1["default"], userParams);
    setParameters_js_1["default"](innerParams);
    Object.freeze(innerParams);
    privateProps_js_1["default"].innerParams.set(this, innerParams);
    // clear the previous timer
    if (globalState_js_1["default"].timeout) {
        globalState_js_1["default"].timeout.stop();
        delete globalState_js_1["default"].timeout;
    }
    // clear the restore focus timeout
    clearTimeout(globalState_js_1["default"].restoreFocusTimeout);
    var domCache = {
        popup: dom.getPopup(),
        container: dom.getContainer(),
        content: dom.getContent(),
        actions: dom.getActions(),
        confirmButton: dom.getConfirmButton(),
        cancelButton: dom.getCancelButton(),
        closeButton: dom.getCloseButton(),
        validationMessage: dom.getValidationMessage(),
        progressSteps: dom.getProgressSteps()
    };
    privateProps_js_1["default"].domCache.set(this, domCache);
    var constructor = this.constructor;
    return new Promise(function (resolve) {
        // functions to handle all closings/dismissals
        var succeedWith = function (value) {
            _this.closePopup({ value: value });
        };
        var dismissWith = function (dismiss) {
            _this.closePopup({ dismiss: dismiss });
        };
        privateMethods_js_1["default"].swalPromiseResolve.set(_this, resolve);
        // Close on timer
        if (innerParams.timer) {
            globalState_js_1["default"].timeout = new Timer_js_1["default"](function () {
                dismissWith('timer');
                delete globalState_js_1["default"].timeout;
            }, innerParams.timer);
        }
        // Get the value of the popup input
        var getInputValue = function () {
            var input = _this.getInput();
            if (!input) {
                return null;
            }
            switch (innerParams.input) {
                case 'checkbox':
                    return input.checked ? 1 : 0;
                case 'radio':
                    return input.checked ? input.value : null;
                case 'file':
                    return input.files.length ? input.files[0] : null;
                default:
                    return innerParams.inputAutoTrim ? input.value.trim() : input.value;
            }
        };
        // input autofocus
        if (innerParams.input) {
            setTimeout(function () {
                var input = _this.getInput();
                if (input) {
                    dom.focusInput(input);
                }
            }, 0);
        }
        var confirm = function (value) {
            if (innerParams.showLoaderOnConfirm) {
                constructor.showLoading(); // TODO: make showLoading an *instance* method
            }
            if (innerParams.preConfirm) {
                _this.resetValidationMessage();
                var preConfirmPromise = Promise.resolve().then(function () { return innerParams.preConfirm(value, innerParams.validationMessage); });
                preConfirmPromise.then(function (preConfirmValue) {
                    if (dom.isVisible(domCache.validationMessage) || preConfirmValue === false) {
                        _this.hideLoading();
                    }
                    else {
                        succeedWith(typeof (preConfirmValue) === 'undefined' ? value : preConfirmValue);
                    }
                });
            }
            else {
                succeedWith(value);
            }
        };
        // Mouse interactions
        var onButtonEvent = function (e) {
            var target = e.target;
            var confirmButton = domCache.confirmButton, cancelButton = domCache.cancelButton;
            var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
            var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));
            switch (e.type) {
                case 'click':
                    // Clicked 'confirm'
                    if (targetedConfirm && constructor.isVisible()) {
                        _this.disableButtons();
                        if (innerParams.input) {
                            var inputValue_1 = getInputValue();
                            if (innerParams.inputValidator) {
                                _this.disableInput();
                                var validationPromise = Promise.resolve().then(function () { return innerParams.inputValidator(inputValue_1, innerParams.validationMessage); });
                                validationPromise.then(function (validationMessage) {
                                    _this.enableButtons();
                                    _this.enableInput();
                                    if (validationMessage) {
                                        _this.showValidationMessage(validationMessage);
                                    }
                                    else {
                                        confirm(inputValue_1);
                                    }
                                });
                            }
                            else if (!_this.getInput().checkValidity()) {
                                _this.enableButtons();
                                _this.showValidationMessage(innerParams.validationMessage);
                            }
                            else {
                                confirm(inputValue_1);
                            }
                        }
                        else {
                            confirm(true);
                        }
                        // Clicked 'cancel'
                    }
                    else if (targetedCancel && constructor.isVisible()) {
                        _this.disableButtons();
                        dismissWith(constructor.DismissReason.cancel);
                    }
                    break;
                default:
            }
        };
        var buttons = domCache.popup.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].onclick = onButtonEvent;
            buttons[i].onmouseover = onButtonEvent;
            buttons[i].onmouseout = onButtonEvent;
            buttons[i].onmousedown = onButtonEvent;
        }
        // Closing popup by close button
        domCache.closeButton.onclick = function () {
            dismissWith(constructor.DismissReason.close);
        };
        if (innerParams.toast) {
            // Closing popup by internal click
            domCache.popup.onclick = function () {
                if (innerParams.showConfirmButton ||
                    innerParams.showCancelButton ||
                    innerParams.showCloseButton ||
                    innerParams.input) {
                    return;
                }
                dismissWith(constructor.DismissReason.close);
            };
        }
        else {
            var ignoreOutsideClick_1 = false;
            // Ignore click events that had mousedown on the popup but mouseup on the container
            // This can happen when the user drags a slider
            domCache.popup.onmousedown = function () {
                domCache.container.onmouseup = function (e) {
                    domCache.container.onmouseup = undefined;
                    // We only check if the mouseup target is the container because usually it doesn't
                    // have any other direct children aside of the popup
                    if (e.target === domCache.container) {
                        ignoreOutsideClick_1 = true;
                    }
                };
            };
            // Ignore click events that had mousedown on the container but mouseup on the popup
            domCache.container.onmousedown = function () {
                domCache.popup.onmouseup = function (e) {
                    domCache.popup.onmouseup = undefined;
                    // We also need to check if the mouseup target is a child of the popup
                    if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
                        ignoreOutsideClick_1 = true;
                    }
                };
            };
            domCache.container.onclick = function (e) {
                if (ignoreOutsideClick_1) {
                    ignoreOutsideClick_1 = false;
                    return;
                }
                if (e.target !== domCache.container) {
                    return;
                }
                if (utils_js_1.callIfFunction(innerParams.allowOutsideClick)) {
                    dismissWith(constructor.DismissReason.backdrop);
                }
            };
        }
        // Reverse buttons (Confirm on the right side)
        if (innerParams.reverseButtons) {
            domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
        }
        else {
            domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
        }
        // Focus handling
        var setFocus = function (index, increment) {
            var focusableElements = dom.getFocusableElements(innerParams.focusCancel);
            // search for visible elements and select the next possible match
            for (var i = 0; i < focusableElements.length; i++) {
                index = index + increment;
                // rollover to first item
                if (index === focusableElements.length) {
                    index = 0;
                    // go to last item
                }
                else if (index === -1) {
                    index = focusableElements.length - 1;
                }
                return focusableElements[index].focus();
            }
            // no visible focusable elements, focus the popup
            domCache.popup.focus();
        };
        var keydownHandler = function (e, innerParams) {
            if (innerParams.stopKeydownPropagation) {
                e.stopPropagation();
            }
            var arrowKeys = [
                'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
                'Left', 'Right', 'Up', 'Down' // IE11
            ];
            if (e.key === 'Enter' && !e.isComposing) {
                if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
                    if (['textarea', 'file'].includes(innerParams.input)) {
                        return; // do not submit
                    }
                    constructor.clickConfirm();
                    e.preventDefault();
                }
                // TAB
            }
            else if (e.key === 'Tab') {
                var targetElement = e.target;
                var focusableElements = dom.getFocusableElements(innerParams.focusCancel);
                var btnIndex = -1;
                for (var i = 0; i < focusableElements.length; i++) {
                    if (targetElement === focusableElements[i]) {
                        btnIndex = i;
                        break;
                    }
                }
                if (!e.shiftKey) {
                    // Cycle to the next button
                    setFocus(btnIndex, 1);
                }
                else {
                    // Cycle to the prev button
                    setFocus(btnIndex, -1);
                }
                e.stopPropagation();
                e.preventDefault();
                // ARROWS - switch focus between buttons
            }
            else if (arrowKeys.includes(e.key)) {
                // focus Cancel button if Confirm button is currently focused
                if (document.activeElement === domCache.confirmButton && dom.isVisible(domCache.cancelButton)) {
                    domCache.cancelButton.focus();
                    // and vice versa
                }
                else if (document.activeElement === domCache.cancelButton && dom.isVisible(domCache.confirmButton)) {
                    domCache.confirmButton.focus();
                }
                // ESC
            }
            else if ((e.key === 'Escape' || e.key === 'Esc') && utils_js_1.callIfFunction(innerParams.allowEscapeKey) === true) {
                e.preventDefault();
                dismissWith(constructor.DismissReason.esc);
            }
        };
        if (globalState_js_1["default"].keydownHandlerAdded) {
            globalState_js_1["default"].keydownTarget.removeEventListener('keydown', globalState_js_1["default"].keydownHandler, { capture: globalState_js_1["default"].keydownListenerCapture });
            globalState_js_1["default"].keydownHandlerAdded = false;
        }
        if (!innerParams.toast) {
            globalState_js_1["default"].keydownHandler = function (e) { return keydownHandler(e, innerParams); };
            globalState_js_1["default"].keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
            globalState_js_1["default"].keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState_js_1["default"].keydownTarget.addEventListener('keydown', globalState_js_1["default"].keydownHandler, { capture: globalState_js_1["default"].keydownListenerCapture });
            globalState_js_1["default"].keydownHandlerAdded = true;
        }
        _this.enableButtons();
        _this.hideLoading();
        _this.resetValidationMessage();
        if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
            dom.addClass(document.body, classes_js_1.swalClasses['toast-column']);
        }
        else {
            dom.removeClass(document.body, classes_js_1.swalClasses['toast-column']);
        }
        // inputs
        var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
        var setInputPlaceholder = function (input) {
            if (!input.placeholder || innerParams.inputPlaceholder) {
                input.placeholder = innerParams.inputPlaceholder;
            }
        };
        var input;
        for (var i = 0; i < inputTypes.length; i++) {
            var inputClass = classes_js_1.swalClasses[inputTypes[i]];
            var inputContainer = dom.getChildByClass(domCache.content, inputClass);
            input = _this.getInput(inputTypes[i]);
            // set attributes
            if (input) {
                for (var j in input.attributes) {
                    if (input.attributes.hasOwnProperty(j)) {
                        var attrName = input.attributes[j].name;
                        if (attrName !== 'type' && attrName !== 'value') {
                            input.removeAttribute(attrName);
                        }
                    }
                }
                for (var attr in innerParams.inputAttributes) {
                    // Do not set a placeholder for <input type="range">
                    // it'll crash Edge, #1298
                    if (inputTypes[i] === 'range' && attr === 'placeholder') {
                        continue;
                    }
                    input.setAttribute(attr, innerParams.inputAttributes[attr]);
                }
            }
            // set class
            inputContainer.className = inputClass;
            if (innerParams.inputClass) {
                dom.addClass(inputContainer, innerParams.inputClass);
            }
            dom.hide(inputContainer);
        }
        var populateInputOptions;
        switch (innerParams.input) {
            case 'text':
            case 'email':
            case 'password':
            case 'number':
            case 'tel':
            case 'url': {
                input = dom.getChildByClass(domCache.content, classes_js_1.swalClasses.input);
                if (typeof innerParams.inputValue === 'string' || typeof innerParams.inputValue === 'number') {
                    input.value = innerParams.inputValue;
                }
                else if (!utils_js_1.isPromise(innerParams.inputValue)) {
                    utils_js_1.warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"" + typeof innerParams.inputValue + "\"");
                }
                setInputPlaceholder(input);
                input.type = innerParams.input;
                dom.show(input);
                break;
            }
            case 'file': {
                input = dom.getChildByClass(domCache.content, classes_js_1.swalClasses.file);
                setInputPlaceholder(input);
                input.type = innerParams.input;
                dom.show(input);
                break;
            }
            case 'range': {
                var range = dom.getChildByClass(domCache.content, classes_js_1.swalClasses.range);
                var rangeInput = range.querySelector('input');
                var rangeOutput = range.querySelector('output');
                rangeInput.value = innerParams.inputValue;
                rangeInput.type = innerParams.input;
                rangeOutput.value = innerParams.inputValue;
                dom.show(range);
                break;
            }
            case 'select': {
                var select_1 = dom.getChildByClass(domCache.content, classes_js_1.swalClasses.select);
                select_1.innerHTML = '';
                if (innerParams.inputPlaceholder) {
                    var placeholder = document.createElement('option');
                    placeholder.innerHTML = innerParams.inputPlaceholder;
                    placeholder.value = '';
                    placeholder.disabled = true;
                    placeholder.selected = true;
                    select_1.appendChild(placeholder);
                }
                populateInputOptions = function (inputOptions) {
                    inputOptions.forEach(function (inputOption) {
                        var optionValue = inputOption[0];
                        var optionLabel = inputOption[1];
                        var option = document.createElement('option');
                        option.value = optionValue;
                        option.innerHTML = optionLabel;
                        if (innerParams.inputValue.toString() === optionValue.toString()) {
                            option.selected = true;
                        }
                        select_1.appendChild(option);
                    });
                    dom.show(select_1);
                    select_1.focus();
                };
                break;
            }
            case 'radio': {
                var radio_1 = dom.getChildByClass(domCache.content, classes_js_1.swalClasses.radio);
                radio_1.innerHTML = '';
                populateInputOptions = function (inputOptions) {
                    inputOptions.forEach(function (inputOption) {
                        var radioValue = inputOption[0];
                        var radioLabel = inputOption[1];
                        var radioInput = document.createElement('input');
                        var radioLabelElement = document.createElement('label');
                        radioInput.type = 'radio';
                        radioInput.name = classes_js_1.swalClasses.radio;
                        radioInput.value = radioValue;
                        if (innerParams.inputValue.toString() === radioValue.toString()) {
                            radioInput.checked = true;
                        }
                        var label = document.createElement('span');
                        label.innerHTML = radioLabel;
                        label.className = classes_js_1.swalClasses.label;
                        radioLabelElement.appendChild(radioInput);
                        radioLabelElement.appendChild(label);
                        radio_1.appendChild(radioLabelElement);
                    });
                    dom.show(radio_1);
                    var radios = radio_1.querySelectorAll('input');
                    if (radios.length) {
                        radios[0].focus();
                    }
                };
                break;
            }
            case 'checkbox': {
                var checkbox = dom.getChildByClass(domCache.content, classes_js_1.swalClasses.checkbox);
                var checkboxInput = _this.getInput('checkbox');
                checkboxInput.type = 'checkbox';
                checkboxInput.value = 1;
                checkboxInput.id = classes_js_1.swalClasses.checkbox;
                checkboxInput.checked = Boolean(innerParams.inputValue);
                var label = checkbox.querySelector('span');
                label.innerHTML = innerParams.inputPlaceholder;
                dom.show(checkbox);
                break;
            }
            case 'textarea': {
                var textarea = dom.getChildByClass(domCache.content, classes_js_1.swalClasses.textarea);
                textarea.value = innerParams.inputValue;
                setInputPlaceholder(textarea);
                dom.show(textarea);
                break;
            }
            case null: {
                break;
            }
            default:
                utils_js_1.error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"" + innerParams.input + "\"");
                break;
        }
        if (innerParams.input === 'select' || innerParams.input === 'radio') {
            var processInputOptions_1 = function (inputOptions) { return populateInputOptions(utils_js_1.formatInputOptions(inputOptions)); };
            if (utils_js_1.isPromise(innerParams.inputOptions)) {
                constructor.showLoading();
                innerParams.inputOptions.then(function (inputOptions) {
                    _this.hideLoading();
                    processInputOptions_1(inputOptions);
                });
            }
            else if (typeof innerParams.inputOptions === 'object') {
                processInputOptions_1(innerParams.inputOptions);
            }
            else {
                utils_js_1.error("Unexpected type of inputOptions! Expected object, Map or Promise, got " + typeof innerParams.inputOptions);
            }
        }
        else if (['text', 'email', 'number', 'tel', 'textarea'].includes(innerParams.input) && utils_js_1.isPromise(innerParams.inputValue)) {
            constructor.showLoading();
            dom.hide(input);
            innerParams.inputValue.then(function (inputValue) {
                input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
                dom.show(input);
                input.focus();
                _this.hideLoading();
            })["catch"](function (err) {
                utils_js_1.error('Error in inputValue promise: ' + err);
                input.value = '';
                dom.show(input);
                input.focus();
                _this.hideLoading();
            });
        }
        openPopup_js_1.openPopup(innerParams);
        if (!innerParams.toast) {
            if (!utils_js_1.callIfFunction(innerParams.allowEnterKey)) {
                if (document.activeElement && typeof document.activeElement.blur === 'function') {
                    document.activeElement.blur();
                }
            }
            else if (innerParams.focusCancel && dom.isVisible(domCache.cancelButton)) {
                domCache.cancelButton.focus();
            }
            else if (innerParams.focusConfirm && dom.isVisible(domCache.confirmButton)) {
                domCache.confirmButton.focus();
            }
            else {
                setFocus(-1, 1);
            }
        }
        // fix scroll
        domCache.container.scrollTop = 0;
    });
}
exports._main = _main;

"use strict";
exports.__esModule = true;
//== constants - string ==========================================
// 常數字串。用以避免打錯字的冏狀。
exports.Ks = {
    ASSIGN_VALUE: 'ASSIGN_VALUE',
    ASSIGN_PROPS: 'ASSIGN_STATE_PROPS',
    ASSIGN_STATE_PROPS: 'ASSIGN_STATE_PROPS',
    SET_BLOCKING: 'SET_BLOCKING',
    SETUP_APP_INFO: 'SETUP_APP_INFO',
    SETUP_FROM_MODE: 'SETUP_FROM_MODE',
    FILL_FORM_DATA: 'FILL_FORM_DATA',
    ASSIGN_FROM_DATA_1: 'ASSIGN_FROM_DATA_1',
    ASSIGN_FROM_DATA_2: 'ASSIGN_FROM_DATA_2',
    ASSIGN_FROM_DATA_3: 'ASSIGN_FROM_DATA_3',
    ASSIGN_FROM_DATA_4: 'ASSIGN_FROM_DATA_4',
    ASSIGN_FROM_DATA_5: 'ASSIGN_FROM_DATA_5',
    ASSIGN_FROM_DATA_6: 'ASSIGN_FROM_DATA_6',
    ASSIGN_FROM_DATA_7: 'ASSIGN_FROM_DATA_7',
    ASSIGN_FROM_DATA_8: 'ASSIGN_FROM_DATA_8',
    ASSIGN_FROM_DATA_9: 'ASSIGN_FROM_DATA_9',
    ASSIGN_FROM_DATA_A: 'ASSIGN_FROM_DATA_A',
    ASSIGN_FROM_DATA_B: 'ASSIGN_FROM_DATA_B',
    ASSIGN_FROM_DATA_C: 'ASSIGN_FROM_DATA_C',
    ASSIGN_FROM_DATA_D: 'ASSIGN_FROM_DATA_D',
    TOGGLE_ITEM: 'TOGGLE_ITEM',
    CHECK_ALL_ITEM: 'CHECK_ALL_ITEM',
    REMOVE_CHECKED_ITEM: 'REMOVE_CHECKED_ITEM',
    INSERT_ITEM: 'INSERT_ITEM',
    UPDATE_ITEM: 'UPDATE_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    SWITCH_ITEM_MODE: 'SWITCH_ITEM_MODE',
    UPDATE_ITEM_BY_INDEX: 'UPDATE_ITEM_BY_INDEX',
    UPDATE_ITEM_BY_SN: 'UPDATE_ITEM_BY_SN',
    UPDATE_ITEM_BY_KEY: 'UPDATE_ITEM_BY_KEY',
    REMOVE_ITEM_BY_INDEX: 'REMOVE_ITEM_BY_INDEX',
    REMOVE_ITEM_BY_SN: 'REMOVE_ITEM_BY_SN',
    REMOVE_ITEM_BY_KEY: 'REMOVE_ITEM_BY_KEY',
    UPDATE_DETAIL_BY_INDEX: 'UPDATE_DETAIL_BY_INDEX',
    UPDATE_DETAIL_BY_SN: 'UPDATE_DETAIL_BY_SN',
    UPDATE_DETAIL_BY_KEY: 'UPDATE_DETAIL_BY_KEY',
    ASSIGN_GROUP_PROPS: 'ASSIGN_GROUP_PROPS',
    INSERT_ATTACHMENT: 'INSERT_ATTACHMENT',
    REMOVE_ATTACHMENT: 'REMOVE_ATTACHMENT',
    FILL_FORM_ATTACHMENT: 'FILL_FORM_ATTACHMENT',
    ADD_PHRASE: 'ADD_PHRASE',
    ADD_ERROR_MESSAGE: 'ADD_ERROR_MESSAGE',
    CLEAR_ERROR_MESSAGE: 'CLEAR_ERROR_MESSAGE'
};
////== constants - Enum ============================================
//export const VisibleFiltersEnum = {
//    SHOW_ALL: 'SHOW_ALL',
//    SHOW_COMPLETED: 'SHOW_COMPLETED',
//    SHOW_ACTIVE: 'SHOW_ACTIVE',
//}
//== actions =====================================================
////# internal variable for actions
//let nextTodoId = 0; // for action [addToDo] only
exports["default"] = {
    //addTodo: (text) => {
    //    return {
    //        type: 'ADD_TODO',
    //        id: nextTodoId++,
    //        text: text
    //    }
    //},
    assignValue: function (name, value, targetReducer) {
        return {
            type: exports.Ks.ASSIGN_VALUE,
            name: name,
            value: value,
            targetReducer: targetReducer
        };
    },
    setBlocking: function (flag) {
        return {
            type: exports.Ks.SET_BLOCKING,
            flag: flag
        };
    },
    setupAppInfo: function (appInfo) {
        return {
            type: exports.Ks.SETUP_APP_INFO,
            appInfo: appInfo
        };
    },
    setupFormMode: function (formAttrs, initValues) {
        return {
            type: exports.Ks.SETUP_FROM_MODE,
            formAttrs: formAttrs,
            initValues: initValues // initial values: object
        };
    },
    assignProps: function (properties, targetReducer) {
        return {
            type: exports.Ks.ASSIGN_PROPS,
            properties: properties,
            targetReducer: targetReducer
        };
    },
    assignStateProps: function (properties, targetReducer) {
        return {
            type: exports.Ks.ASSIGN_STATE_PROPS,
            properties: properties,
            targetReducer: targetReducer
        };
    },
    fillFormData: function (formData) {
        return {
            type: exports.Ks.FILL_FORM_DATA,
            formData: formData
        };
    },
    assignFormData1: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_1,
            formData1: formData.formData1
        };
    },
    assignFormData2: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_2,
            formData2: formData.formData2
        };
    },
    assignFormData3: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_3,
            formData3: formData.formData3
        };
    },
    assignFormData4: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_4,
            formData4: formData.formData4
        };
    },
    assignFormData5: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_5,
            formData5: formData.formData5
        };
    },
    assignFormData6: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_6,
            formData6: formData.formData6
        };
    },
    assignFormData7: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_7,
            formData7: formData.formData7
        };
    },
    assignFormData8: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_8,
            formData8: formData.formData8
        };
    },
    assignFormData9: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_9,
            formData9: formData.formData9
        };
    },
    assignFormDataA: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_A,
            formDataA: formData.formDataA
        };
    },
    assignFormDataB: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_B,
            formDataB: formData.formDataB
        };
    },
    assignFormDataC: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_C,
            formDataC: formData.formDataC
        };
    },
    assignFormDataD: function (formData) {
        return {
            type: exports.Ks.ASSIGN_FROM_DATA_D,
            formDataD: formData.formDataD
        };
    },
    toggleItem: function (item, targetReducer) {
        return {
            type: exports.Ks.TOGGLE_ITEM,
            item: item,
            targetReducer: targetReducer
        };
    },
    checkAllItem: function (checkFlag, targetReducer) {
        return {
            type: exports.Ks.CHECK_ALL_ITEM,
            checkFlag: checkFlag,
            targetReducer: targetReducer
        };
    },
    removeCheckedItem: function (targetReducer) {
        return {
            type: exports.Ks.REMOVE_CHECKED_ITEM,
            targetReducer: targetReducer
        };
    },
    insertItem: function (itemValues, detailList, targetReducer) {
        return {
            type: exports.Ks.INSERT_ITEM,
            itemValues: itemValues,
            detailList: detailList,
            targetReducer: targetReducer
        };
    },
    updateItem: function (itemValues, detailList, targetReducer) {
        return {
            type: exports.Ks.UPDATE_ITEM,
            itemValues: itemValues,
            detailList: detailList,
            targetReducer: targetReducer
        };
    },
    switchItemMode: function (item, flag, targetReducer) {
        return {
            type: exports.Ks.SWITCH_ITEM_MODE,
            item: item,
            flag: flag,
            targetReducer: targetReducer
        };
    },
    updateItemByIndex: function (index, newItemInfo, targetReducer) {
        return {
            type: exports.Ks.UPDATE_ITEM_BY_INDEX,
            index: index,
            newItemInfo: newItemInfo,
            targetReducer: targetReducer
        };
    },
    updateItemBySn: function (itemSn, newItemInfo, targetReducer) {
        return {
            type: exports.Ks.UPDATE_ITEM_BY_SN,
            itemSn: itemSn,
            newItemInfo: newItemInfo,
            targetReducer: targetReducer
        };
    },
    updateItemByKey: function (itemKey, newItemInfo, targetReducer) {
        return {
            type: exports.Ks.UPDATE_ITEM_BY_KEY,
            itemKey: itemKey,
            newItemInfo: newItemInfo,
            targetReducer: targetReducer
        };
    },
    removeItemByIndex: function (index, targetReducer) {
        return {
            type: exports.Ks.REMOVE_ITEM_BY_INDEX,
            index: index,
            targetReducer: targetReducer
        };
    },
    removeItemBySn: function (itemSn, targetReducer) {
        return {
            type: exports.Ks.REMOVE_ITEM_BY_SN,
            itemSn: itemSn,
            targetReducer: targetReducer
        };
    },
    removeItemByKey: function (itemKey, targetReducer) {
        return {
            type: exports.Ks.REMOVE_ITEM_BY_KEY,
            itemKey: itemKey,
            targetReducer: targetReducer
        };
    },
    updateDetailByIndex: function (index, newDetailInfo, targetReducer) {
        return {
            type: exports.Ks.UPDATE_DETAIL_BY_INDEX,
            index: index,
            newDetailInfo: newDetailInfo,
            targetReducer: targetReducer
        };
    },
    updateDetailBySn: function (detailSn, newDetailInfo, targetReducer) {
        return {
            type: exports.Ks.UPDATE_DETAIL_BY_SN,
            detailSn: detailSn,
            newDetailInfo: newDetailInfo,
            targetReducer: targetReducer
        };
    },
    updateDetailByKey: function (detailKey, newDetailInfo, targetReducer) {
        return {
            type: exports.Ks.UPDATE_DETAIL_BY_KEY,
            detailKey: detailKey,
            newDetailInfo: newDetailInfo,
            targetReducer: targetReducer
        };
    },
    assignGroupProps: function (groupName, groupProperties, targetReducer) {
        return {
            type: exports.Ks.ASSIGN_GROUP_PROPS,
            groupName: groupName,
            groupProperties: groupProperties,
            targetReducer: targetReducer
        };
    },
    insertAttachment: function (item, targetReducer) {
        return {
            type: exports.Ks.INSERT_ATTACHMENT,
            item: item,
            targetReducer: targetReducer
        };
    },
    removeAttachment: function (item, index, targetReducer) {
        return {
            type: exports.Ks.REMOVE_ATTACHMENT,
            item: item,
            index: index,
            targetReducer: targetReducer
        };
    },
    fillFormAttach: function (attachList, targetReducer) {
        return {
            type: exports.Ks.FILL_FORM_ATTACHMENT,
            attachList: attachList,
            targetReducer: targetReducer
        };
    },
    addPhrase: function (name, value, targetReducer) {
        return {
            type: exports.Ks.ADD_PHRASE,
            name: name,
            value: value,
            targetReducer: targetReducer
        };
    },
    addErrorMessage: function (caption, message) {
        return {
            type: exports.Ks.ADD_ERROR_MESSAGE,
            payload: { caption: caption, message: message }
        };
    },
    clearErrorMessage: function () {
        return {
            type: exports.Ks.CLEAR_ERROR_MESSAGE
        };
    }
};

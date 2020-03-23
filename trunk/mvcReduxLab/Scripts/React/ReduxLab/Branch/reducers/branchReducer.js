import { Ks } from 'CommonFF/actions.js'
//import { getDate } from 'date-fns/esm';

const initialState = {
    //用一個空陣列來存放branch的資料
    dataList: [],
    Branch_ID: '',
    Branch_Type: '',
    Branch_Name: '',
    Supervisor: '',
    Contact: '',
    Phone: '',
    Fax: '',
    Address_City: '',
    Address_Dist: '',
    Address_ZIP_code: '',
    Address: '',
    Email: ''
    //ModifiedDate: getDate()
}

export default function branchReducer(state = initialState, action) {
    //console.log('helloReducer', state, action)
    const match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'branchReducer';

    if (!match) return state;

    switch (action.type) {
        case Ks.ASSIGN_VALUE:
            return { ...state, [action.name]: action.value }
        case Ks.ASSIGN_PROPS:
        case Ks.ASSIGN_STATE_PROPS:
            return { ...state, ...(action.properties) }
        default:
            return state;
    }
}

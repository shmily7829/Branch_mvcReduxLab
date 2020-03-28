import { Ks } from 'CommonFF/actions.js'
//import { getDate } from 'date-fns/esm';

const initialState = {
    file: null,  
    type: '電子檔',
    //itemId: 'DXXXX',
    //note: '',
    //pageCount: '',
    //uriInfo: null,
    //uploader: '登入者'
}

export default function fileReducer(state = initialState, action) {
    //console.log('helloReducer', state, action)
    const match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'fileReducer';

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


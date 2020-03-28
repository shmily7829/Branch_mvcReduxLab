import { createStore, combineReducers } from 'redux'
import appInfo from 'CommonFF/appHelperReducer.js'
import branchInfo from './branchReducer.js'
import fileInfo from './fileReducer.js'



const rootReducer = combineReducers({
    appInfo,
    branchInfo, //儲存的資料取名為branchInfo
    fileInfo
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

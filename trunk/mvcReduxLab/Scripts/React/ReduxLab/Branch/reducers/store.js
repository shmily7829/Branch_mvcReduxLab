import { createStore, combineReducers } from 'redux'
import appInfo from 'CommonFF/appHelperReducer.js'
import helloInfo from './helloReducer.js'
import branchInfo from './branchReducer.js'


const rootReducer = combineReducers({
    appInfo,
    helloInfo,
    branchInfo //儲存的資料取名為branchInfo
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

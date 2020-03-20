import React from 'react'
import { connect } from 'react-redux'
import AppHelper from 'CommonFF/AppHelper.js'
import TitleWidget from 'Common/TitleWidget.js'
//import Hello2 from './Hello2.js'
//import InputMirror from './InputMirror.js'
import Query from './Query.js'
import List from './List.js'

class AppForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <AppHelper appInfo={globalappinfo} noInitFormMode />
                <TitleWidget appTitle={globalappinfo.appTitle} /> 
                {/*<Hello2 />*/}
                {/*<InputMirror />*/}
                <Query />
                <List />
            </div>
        )
    }
}

// connect to Store
const mapStateToProps = (state, ownProps) => ({
    appInfo: state.appInfo,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch
})

//export default AppForm;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppForm);

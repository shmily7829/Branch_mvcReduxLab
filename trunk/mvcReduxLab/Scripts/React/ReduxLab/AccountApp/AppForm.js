import React from 'react'
import { connect } from 'react-redux'
import AppHelper from 'CommonFF/AppHelper.js'
import TitleWidget from 'Common/TitleWidget.js'
import FormViewAccount from './FormViewAccount.js'
import FormViewUser from './FormViewUser.js'
import actions, { Ks } from 'CommonFF/actions.js'
import apiClient from './apiClient.js'
import FormViewAccount3 from './FormViewAccount3.js'

class AppForm extends React.Component {
    constructor(props) {
        super(props)

        /// 注意：state 必需是物件
        this.state = {
            showViewAccount: false,
            showViewUser: false,
            showViewAccount3: true,
        }   

        this.handleSaveFormData = this.handleSaveFormData.bind(this)
        this.handleLoadFormData = this.handleLoadFormData.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    render() {   
        //取得狀態
        const { showViewAccount, showViewUser, showViewAccount3 } = this.state

        return (
            <div>
                <AppHelper appInfo={globalappinfo} noInitFormMode />
                <TitleWidget appTitle={globalappinfo.appTitle} />
                
                <div className="container">
                    <label>勾選展示項目：</label>
                    <label><input type="checkbox" name="showViewAccount" checked={showViewAccount} onChange={this.handleInputChange} /> FormViewAccount</label>&nbsp;
                    <label><input type="checkbox" name="showViewUser" checked={showViewUser} onChange={this.handleInputChange} /> FormViewUser</label>&nbsp;
                    <label><input type="checkbox" name="showViewAccount3" checked={showViewAccount3} onChange={this.handleInputChange} /> FormViewAccount3</label>&nbsp;
                </div>

                {showViewAccount && <FormViewAccount />}
                {showViewUser && <FormViewUser />}
                {showViewAccount3 && <FormViewAccount3 />}

                {/*<Commandbar />*/}
                <div className="container">
                    <button type="button" className="btn btn-primary btn-lg m-1" onClick={this.handleSaveFormData}>存檔</button>
                    <button type="button" className="btn btn-warning btn-lg m-1" onClick={this.handleLoadFormData}>載入</button>
                </div>

            </div>
        )
    }

    handleInputChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSaveFormData() {
        const { formData } = this.props
        console.log('handleSaveFormData', { formData })

        this.props.setBlocking(true)
        apiClient.SaveFormData(formData).then((resp) => {
            console.log('SaveFormData success', { resp })
            swal.fire('SaveFormData success', 'success')
        }).catch((xhr) => {
            console.log('SaveFormData fail!', { xhr })
            swal.fire('SaveFormData fail!')
        }).finally(() => {
            this.props.setBlocking(false)
        })
    }

    handleLoadFormData() {
        const name = this.props.formData.accountInfo.name
        console.log('handleLoadFormData', { name })

        this.props.setBlocking(true)
        const args = { name }
        apiClient.LoadFormData(args).then((resp) => {
            const formData = resp.data
            console.log('LoadFormData success', { formData })
            this.props.fillFormData(formData)
            swal.fire('LoadFormData success', 'success')
        }).catch((xhr) => {
            console.log('LoadFormData fail!', { xhr })
            swal.fire('LoadFormData fail!')
        }).finally(() => {
            this.props.setBlocking(false)
        })
    }
}

// connect to Store
const mapStateToProps = (state, ownProps) => ({
    appInfo: state.appInfo,
    formData: {
        accountInfo: state.accountInfo,
        userInfo: state.userInfo
    }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch,
    setBlocking: (flag) => {
        dispatch({ type: Ks.SET_BLOCKING, flag })
    },
    fillFormData: (formData) => {
        dispatch({ type: Ks.FILL_FORM_DATA, formData })
    }
})

//export default AppForm;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppForm);

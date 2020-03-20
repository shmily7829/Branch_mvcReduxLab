import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import actions, { Ks } from 'CommonFF/actions.js'
import TextField from 'CommonMA/FormInputFields/TextField.js'
import apiClient from './apiClient.js'


class Query extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }   
        //this.handleInputChange = this.handleInputChange.bind(this)
        this.handleLoadFormData = this.handleLoadFormData.bind(this)
    }

    render() {
        const { helloInfo, handleValueChange } = this.props
        return (

            <Container className="mt-2 bg-secondary text-white rounded">
                <h2>§ 帳號基本資料</h2>
                <Row>
                    <Col md={6}>
                        <TextField label="帳號" name="name"
                            value={helloInfo.name || ''}
                            onChange={handleValueChange}
                        />
                    </Col>
                    <Col md={6}>
                        <TextField label="Email" name="email" type="email"
                            value={helloInfo.email || ''}
                            onChange={handleValueChange}
                        />
                    </Col>
                    <Col md={6}>
                        <TextField label="手機" name="mobilePhone" type="tel"
                            value={helloInfo.mobilePhone || ''}
                            onChange={handleValueChange}
                        />
                    </Col>
                </Row>

                {/*<Commandbar />*/}
                <div className="container">
                    <button type="button" className="btn btn-primary btn-lg m-1" onClick={this.handleSaveFormData}>存檔</button>
                    <button type="button" className="btn btn-warning btn-lg m-1" onClick={this.handleLoadFormData}>載入</button>
                </div>
            </Container>
        )
    }

    //handleInputChange(e) {
    //    const target = e.target
    //    const value = target.type === 'checkbox' ? target.checked : target.value
    //    const name = target.name

    //    // 法1:
    //    const action = { type: Ks.ASSIGN_VALUE, name, value }
    //    this.props.dispatch(action)

    //    // 法2:
    //    this.props.dispatch(actions.assignValue(name, value))

    //    // 法3: --- 過度包裝，除非有 高度共用性
    //    this.props.handleValueChange(name, value)

    //    // 法4: *** 回歸最原生的方法，反而是綜合考量後的最佳解 
    //    this.props.dispatch({ type: Ks.ASSIGN_VALUE, name, value })

    //    //this.setState({
    //    //    [name]: value
    //    //})
    //}
    //handleSaveFormData() {
    //    const { formData } = this.props
    //    console.log('handleSaveFormData', { formData })

    //    this.props.setBlocking(true)
    //    apiClient.SaveFormData(formData).then((resp) => {
    //        console.log('SaveFormData success', { resp })
    //        swal.fire('SaveFormData success', 'success')
    //    }).catch((xhr) => {
    //        console.log('SaveFormData fail!', { xhr })
    //        swal.fire('SaveFormData fail!')
    //    }).finally(() => {
    //        this.props.setBlocking(false)
    //    })
    //}

    handleLoadFormData() {

        const args = {title: 'ACB', isDone: true }
        apiClient.QryDataList(args).then((resp) => {
            const dataList = resp.data
            console.log('LoadFormData success', { dataList })
            //傳送到store
            //const { dispatch } = this.props // get resource

            this.props.dispatch(actions.assignProps({ dataList }, 'branchReducer'))
        }).catch((xhr) => {
            console.log('LoadFormData fail!', { xhr })    
        })
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        helloInfo: state.helloInfo

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const targetReducer = 'helloReducer'
    return {
        dispatch,
        handleValueChange: (name, value) => {
            dispatch({
                type: Ks.ASSIGN_VALUE,
                name,
                value,
                targetReducer,

            })
        },
        assignStateProps: (properties) => {
            dispatch({
                type: Ks.ASSIGN_STATE_PROPS,
                properties,
                targetReducer
            })
        }
    }
}

//export default FormViewAccount;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Query);

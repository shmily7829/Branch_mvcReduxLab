import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Ks } from 'CommonFF/actions.js'
import { Container, Row, Col } from 'reactstrap'
import TextField from 'CommonMA/FormInputFields/TextField.js'

class FormViewAccount3 extends Component {
    constructor(props) {
        super(props);


    }

render() {
    const { accountInfo, dispatch, handleValueChange } = this.props
    return (
        <Container className="mt-2 bg-secondary text-white rounded">

            <div style={{ backgroundColor: '#28a745', margin: '10px', padding: '10px', textAlign: 'center' }}>
                <h3>§ 唐太宗</h3>
                <div style={{ display: "block", letterSpacing: '5px' }}>以銅為鏡，可以正衣冠。</div>
                <div style={{ display: "block", letterSpacing: '5px' }}>以妳為鏡，可以得吾心。</div>
                <div style={{ display: "inline" }}>1234567890測測看display-inline效果</div>
                <div style={{ display: "inline" }}>1234567890</div>
            </div>

            <h2>§ 帳號基本資料</h2>
            <Row>
                <Col md={6}>
                    <TextField label="名稱" name="name" type="name"
                        value={accountInfo.name || ''}
                        onChange={handleValueChange}
                    />
                </Col>
                <Col md={6}>
                    <TextField label="帳號" name="account"
                        value={accountInfo.account || ''}
                        onChange={handleValueChange}
                    />
                </Col>
                <Col md={6}>
                    <TextField label="Email" name="email" type="email"
                        value={accountInfo.email || ''}
                        onChange={handleValueChange}
                    />
                </Col>
                <Col md={6}>
                    <TextField label="手機" name="mobilePhone" type="tel"
                        value={accountInfo.mobilePhone || ''}
                        onChange={handleValueChange}
                    />
                </Col>
            </Row>
        </Container>
    )
}


}

// connect to Store
const mapStateToProps = (state, ownProps) => {
    return {
        accountInfo: state.accountInfo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const targetReducer = 'accountReducer'
    return {
        dispatch,
        handleValueChange: (name, value) => {
            dispatch({
                type: Ks.ASSIGN_VALUE,
                name,
                value,
                targetReducer
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
)(FormViewAccount3);

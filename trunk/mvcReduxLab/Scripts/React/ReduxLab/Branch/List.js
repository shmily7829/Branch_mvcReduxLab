import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import actions, { Ks } from 'CommonFF/actions.js' //default , 其他元件


class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }   
    }

    render() {
        const { branchInfo } = this.props
        console.log("branchInfo", { branchInfo })
        return (
            <Container >
                <h2>§ 資料清單</h2>    
                <ul >
                    {branchInfo.dataList.map((item, index) =>
                        <li key={index}>
                            {index} {item.Branch_ID}&nbsp;
                        </li>
                        )}
                </ul>
            </Container>
        )
    }
}

//從store取資料回來
const mapStateToProps = (state, ownProps) => {
    return {

        branchInfo: state.branchInfo
    }
}

//把資料存到store
const mapDispatchToProps = (dispatch, ownProps) => {
    const targetReducer = 'branchReducer'
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
)(List);

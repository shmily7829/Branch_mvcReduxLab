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
                <table>
                    <thead className="mt-2 bg-secondary text-white rounded">
                        <tr>
                            <th>Branch_ID</th>
                            <th>Branch_Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {branchInfo.dataList.map((item, index) =>
                            <tr key={`${item}`} style={{ border: '1px solid #000000', padding: '10px' }}>
                                <td>{item.Branch_ID}</td>
                                <td>{item.Branch_Name}</td>
                                <td>{item.Address}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
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

import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

/// Stateless Component --- 一般用於單向展示資料
const Hello2 = (props) => (
    <div className="container">
        {props.hello}
        <h2>{moment().format('YYYY-MM-DDTHH:mm:ssZ')}</h2>
    </div>
)


// connect to Store
const mapStateToProps = (state, ownProps) => ({
    hello: state.helloInfo.hello
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch
})

// export default Hello2
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello2);

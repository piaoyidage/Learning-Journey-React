/*
* @Author: maoying.hu
* @Date:   2018-09-17 15:33:29
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-17 15:52:33
*/

// import React from 'react'
import { connect } from 'react-redux'

import Time from '../components/Time.js'
import { getTime } from '../actions'

const mapStateToProps = state => ({
    time: state.time,
})

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(getTime()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Time)

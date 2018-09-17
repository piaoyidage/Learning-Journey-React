/*
* @Author: maoying.hu
* @Date:   2018-09-11 16:23:21
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-17 15:52:46
*/

import { connect } from 'react-redux'

import Link from '../components/Link.js'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    active: state.visibilityFilter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link)

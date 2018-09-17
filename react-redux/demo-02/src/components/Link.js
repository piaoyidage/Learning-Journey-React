/*
* @Author: maoying.hu
* @Date:   2018-09-11 16:14:49
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-11 16:22:44
*/

import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
    <button
        disabled={active}
        onClick={onClick}
    >
        {children}
    </button>
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Link

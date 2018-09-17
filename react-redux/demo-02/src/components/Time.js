/*
* @Author: maoying.hu
* @Date:   2018-09-17 15:44:43
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-17 15:52:13
*/

import React from 'react'
import PropTypes from 'prop-types'

const Time = ({ onClick, time }) => (
    <div>
        <button onClick={onClick}>get time</button>
        <span>{time}</span>
    </div>
)

Time.propTypes = {
    onClick: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
}

export default Time

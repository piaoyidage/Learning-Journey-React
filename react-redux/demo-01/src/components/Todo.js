/*
* @Author: maoying.hu
* @Date:   2018-09-11 14:16:47
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-11 16:47:37
*/

import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none',
        }}
    >
        {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}

export default Todo

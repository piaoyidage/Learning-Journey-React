/*
* @Author: maoying.hu
* @Date:   2018-09-11 14:26:00
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-11 14:51:55
*/

import React from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo.js'

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(todo => (
            <Todo
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                {...todo}
            />
        ))}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
    toggleTodo: PropTypes.func.isRequired,
}

export default TodoList

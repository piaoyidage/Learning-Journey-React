/*
* @Author: maoying.hu
* @Date:   2018-09-11 15:29:19
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-11 16:10:27
*/

import { connect } from 'react-redux'

import { VisibilityFilters, toggleTodo } from '../actions'
import TodoList from '../components/TodoList.js'

const getVisibleTodoList = (todos, filter) => {
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodoList(state.todos, state.visibilityFilter),
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)

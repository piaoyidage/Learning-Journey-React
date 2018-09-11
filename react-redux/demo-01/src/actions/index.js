/*
* @Author: maoying.hu
* @Date:   2018-09-11 14:55:07
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-11 16:50:53
*/

let nextTodoId = 1

export const addTodo = text => ({
    id: nextTodoId++,
    type: 'ADD_TODO',
    completed: false,
    text,
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id,
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
})


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}

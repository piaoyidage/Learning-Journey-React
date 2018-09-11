/*
* @Author: maoying.hu
* @Date:   2018-09-11 15:24:34
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-11 16:43:42
*/

const Todo = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: action.id,
                completed: action.completed,
                text: action.text,
            }]
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id === action.id ?  { ...todo, completed: !todo.completed } : todo)
        default:
            return state
    }
}

export default Todo

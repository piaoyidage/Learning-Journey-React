/*
* @Author: maoying.hu
* @Date:   2018-09-11 16:32:33
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-11 16:33:33
*/

import { combineReducers } from 'redux'

import todos from './todo.js'
import visibilityFilter from './visibilityFilter.js'

export default combineReducers({
    todos,
    visibilityFilter,
})

/*
* @Author: maoying.hu
* @Date:   2018-09-11 16:32:33
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-17 15:49:39
*/

import { combineReducers } from 'redux'

import todos from './todo.js'
import visibilityFilter from './visibilityFilter.js'
import time from './time.js'

export default combineReducers({
    todos,
    visibilityFilter,
    time,
})

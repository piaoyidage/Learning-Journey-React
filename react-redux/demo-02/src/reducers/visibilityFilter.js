/*
* @Author: maoying.hu
* @Date:   2018-09-11 15:39:16
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-11 16:42:47
*/

import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter

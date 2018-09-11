/*
* @Author: maoying.hu
* @Date:   2018-09-11 16:28:40
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-11 16:49:27
*/

import React from 'react'

import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
    <div>
        <span>show:</span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>COMPLETED</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>
    </div>
)

export default Footer

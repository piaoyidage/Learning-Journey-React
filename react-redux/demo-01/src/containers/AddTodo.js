/*
* @Author: maoying.hu
* @Date:   2018-09-11 14:52:34
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-11 16:49:48
*/

import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/index'

const AddTodo = ({ dispatch }) => {
    let input
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input ref={node => input = node} />
                <button type='submit'>Add Todo</button>
            </form> 
        </div>
    )
}

export default connect()(AddTodo)

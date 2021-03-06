import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'

import AddTodo from './containers/AddTodo'
import VisibilityTodoList from './containers/VisiblityTodoList.js'
import Footer from './components/Footer'

const App = () =>  (
    <div>
        <AddTodo />
        <VisibilityTodoList />
        <Footer />
    </div>
)

const store = createStore(reducers)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

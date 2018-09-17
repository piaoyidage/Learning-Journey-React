import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'

import AddTodo from './containers/AddTodo'
import VisibilityTodoList from './containers/VisiblityTodoList.js'
import Footer from './components/Footer'
import Time from './containers/Time'

const App = () =>  (
    <div>
        <AddTodo />
        <VisibilityTodoList />
        <Footer />
        <Time />
    </div>
)

const store = createStore(reducers)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

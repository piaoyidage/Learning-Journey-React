import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)

    }

    handleClickBind(a, b, e) {
        console.log('a =', a)
        console.log('e =', e)
    }

    handleClickArrow = e => {
        console.log('e =', e)
        console.log('dataset', e.target.dataset)
    }

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={this.handleClickBind.bind(this, 'hello', 'welcome')}>
                        Bind
                    </button>
                    <button onClick={this.handleClickArrow} data-hello='hello' data-welcome='welcome'>
                        Arrow
                    </button>
                </div>
            </div>
        )
    }
}

export default App;

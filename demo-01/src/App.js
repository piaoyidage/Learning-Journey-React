import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * callback 执行时机
 */
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            score: 0,
        }
    }

    handleClick = e => {
        this.setState(preState => {
          return { score: preState.score + 1, }
        }, () => {
            console.log('callback:', this.state.score)
        })
    }

    shouldComponentUpdate() {
        return true
    }

    componentDidUpdate() {
        console.log('update')
    }


    render() {
        const { score } = this.state
        console.log('render component')
        return (
            <div className="App">
                <p>{score}</p>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default App;

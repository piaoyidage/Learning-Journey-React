import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }

    onClick = () => {
        this.setState({
            count: this.state.count + 1,
        })
        console.log('# this.state', this.state)
    }

    onClickLater = () => (
        setTimeout(() => {
            this.onClick()
        })
    )

    componentDidMount() {
        document.querySelector('#btn-raw').addEventListener('click', this.onClick)
    }

    render() {
        console.log('#enter render')
        return (
            <div className="App">
                <div>
                    {this.state.count}
                    <button onClick = {this.onClick} > Increment </button>
                    <button id = "btn-raw" > Increment Raw </button>
                    <button onClick = {this.onClickLater}> Increment Later </button>
                </div>
            </div>
        )
    }
}

export default App;

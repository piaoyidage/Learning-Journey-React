import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: props.value,
        }

        this.shouldUpdate = true
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.value !== nextProps.value || this.props.title !== nextProps.title) {
            this.setState({
                value: nextProps.value,
            })
            this.shouldUpdate = true
        } else {
            this.shouldUpdate = false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.shouldUpdate
    }

    handleClick = () => {
        this.setState({
            value: Date.now()
        }, () => this.props.plus(this.state.value))
    }

    render() {
        const { value } = this.state
        const { title } = this.props

        console.log('child render')

        return (
            <div className='child'>
                <span>title: {title}</span>
                <span>value: {value}</span>
                <button onClick={this.handleClick}>改变value</button>
            </div>
        )
    }
}


class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: Date.now(),
            value: 0,
            count: 0,
        }
    }

    handleChangeTitle = () => {
        this.setState({
            title: Date.now(),
        })
    }

    plus = value => {
        this.setState(preState => {
            return {
                count: preState.count + 1,
                value,
            }
        })
    }

    render() {
        const { title, count, value } = this.state

        console.log('parent render')

        return (
            <div className="parent">
                <Child value={value} title={title} plus={this.plus} />
                <button onClick={this.handleChangeTitle} style={{ margin: 10 }}>改变title</button>
                <div>共改变 value {count} 次</div>
            </div>
        )
    }
}


export default Parent;

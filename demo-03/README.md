# shouldComponentUpdate 的一种使用场景

看如下源码，当子组件点击`改变value`，控制台会输出什么？


```jsx
class Child extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: props.value,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
        })
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
```

控制台的输出：

```
child render
parent render
child render
```

子组件更新 state 后，在回调函数里面调用父组件的函数，父组件的函数执行更新父组件的 state，父组件会被渲染，从而子组件又被渲染一次。

出于对性能的考虑，希望子组件只渲染一次，其一种解决方法是在 componentWillReceiveProps 判断是否需要更新，然后在 shouldComponentUpdate 里控制是否更新，详细代码如下。（当然也可以直接在 shouldComponentUpdate 编写判断逻辑）

```jsx
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
```


控制台的输出：

```
child render
parent render
```

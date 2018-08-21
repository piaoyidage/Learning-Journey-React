# 异步和同步

## 异步

```js
setState(updater, [callback]);
setState(stateChange, [callback]);
```


> Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.

> setState() does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling setState() a potential pitfall. 

React **可能** 会出于性能考虑将多个 setState() 调用合并成一个批处理更新操作，第一个参数 可以是 object，也可以是 function，两种形式都是异步的，当下一个 state 依赖上一个 state, 应该使用 function

## 同步

上面说的异步是在 React 框架内的，如果绕过 React 使用 addEventListener 直接添加的事件处理函数，还有通过 setTimeout/setInterval 产生的异步调用，会同步

```jsx
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
```

**个人观点尽量不使用同步更新，更新过程频繁，会导致性能问题**

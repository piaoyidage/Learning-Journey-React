## callback 的执行时机

> The second parameter to setState() is an optional callback function that will be executed once setState is completed and the component is
re-rendered. Generally we recommend using componentDidUpdate() for such logic instead.

callback 会在 state 更新完成后和 component 重新渲染之后执行

如果 shouldComponentUpdate 中 return false，callback 会不会执行？

```jsx

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
        return false
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
};

```

### 当 shouldComponentUpdate 返回 true

```bash
render component
update
callback: 1
render component
update
callback: 2
render component
update
callback: 3
render component
update
callback: 4
render component
update
callback: 5
```

### 当 shouldComponentUpdate 返回 false

执行结果

```bash
callback: 1
callback: 2
callback: 3
callback: 4
callback: 5
```

**从上面的结果来看 callback 一直会执行，state 的值一直会改变！**

### 参考
1. [React setState](https://reactjs.org/docs/react-component.html#setstate)



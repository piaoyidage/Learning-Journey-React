# bind函数传参和箭头函数传参

```jsx
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
```


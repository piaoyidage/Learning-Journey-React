# redux 源码阅读

## 源码版本

**4.0.0**

## 阅读

redux 的核心功能是创建一个 store来 管理 state。

**阅读详见每个文件的注释批注 reading...**

index 文件暴露五个函数

1. createStore
2. combineReducers
3. bindActionCreators
4. applyMiddleware
5. compose

### createStore

createStore 函数向外面暴露五个函数

1. dispatch: 触发一个 action, 是改变 state 的唯一方式。
2. subscribe: 注册监听函数
3. getState: 获取当前的 state
4. replaceReducer
5. [$$observable]

### combineReducers

combineReducers 的思路是合并所有子 reducer 为一个总的 reducer。

### bindActionCreators

把一个 value 为不同 action creator 的对象，转成拥有同名 key 的对象。同时使用 dispatch 对每个 action creator 进行包装，以便可以直接调用它们。

### applyMiddleware

从 middleware 中获取改造函数, 把所有改造函数 compose 成一个改造函数, 构造出 dispatch 方法。



## 参考

1. [redux真的不复杂——源码解读](https://juejin.im/post/5b9617835188255c781c9e2f)
2. [redux api](https://cn.redux.js.org/docs/api/)
# Redux 笔记

## 概览

应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。

惟一改变 state 的办法是触发 action，一个描述发生什么的对象。

为了描述 action 如何改变 state 树，你需要编写 reducers。

## 动机

**当系统变得复杂的时候，JavaScript 控制的 state 不容易控制，Redux 是用来处理 state 的，Redux 试图让 state 的变化变得可预测。**

## 核心

```
(state, action) => state
```

## 三大原则

1. 单一数据源
**整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中**

2. state 是只读的
**唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象**

3. 使用纯函数来执行修改
**为了描述 action 如何改变 state tree ，你需要编写 reducers**

## 基础

### Action

Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。

#### Action 创建函数
Action 创建函数 就是生成 action 的方法。“action” 和 “action 创建函数” 这两个概念很容易混在一起，使用时最好注意区分。

在 Redux 中的 action 创建函数只是简单的返回一个 action:

```js
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
// 使用
dispatch(addTodo('hello'));
```

### Reducer

Action 只是描述了有事情发生了这一事实，并没有指明应用如何更新 state。而这正是 reducer 要做的事情。

reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。

```js
(previousState, action) => newState
```

### Store

Store 就是把 Action 和 Reducer 联系到一起的对象

它的职责：
* 维持应用的 state
* 提供 getState() 方法获取 state
* 提供 dispatch(action) 方法更新 state
* 提供 subscribe(listener) 注册监听器
* 提供 subscribe(listener) 返回的函数注销监听器

### 单向数据流

严格的单向数据流是 Redux 架构的设计核心。

Redux 应用中数据的生命周期遵循下面 4 个步骤：

1. 调用 store.dispatch(action)
2. Redux store 调用传入的 reducer 函数
3. 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树
4. Redux store 保存了根 reducer 返回的完整 state 树


## TODO

高级及以下内容待看


## 参考
1. [Redux 中文文档](http://www.redux.org.cn/)






### Records

1. `useRef` **跨渲染周期存储数据**，而且对它修改也不会引起组件渲染
   参考文章(没怎么看懂): https://blog.csdn.net/hjc256/article/details/102587037

2. `useRef` 与 `createRef` 的区别?
   reateRef 每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用。

3. `e.preventDefault()` 有什么用?
   阻止浏览器的墨认事件，例如: form 表单，里面有 button，不想 button 触发，不阻止，则会触什么效果？ 会出现【？】吗

4. 使用 useReducer()，如何合并多个 reduer?
   useReducer() 参考文章: https://www.robinwieruch.de/react-usereducer-hook

5. 如何开发 react 组件或者插件?

6. createContext，useReducer 使用  场景

7. 高阶组件的使用

**合并多个 reducer**

```js
import React, { createContext, useReducer } from 'react'

export const hooksContext = createContext('context')

const Provider = hooksContext.Provider

function combineReducers(reducers) {
    return function (state = {}, action) {
        return Object.keys(reducers).reduce((newState, key) => {
            newState[key] = reducers[key](state[key], action)
            return newState
        }, {})
    }
}

export const withContext = (reducer, initialState) => {
    let stateKeysLength = Object.keys(initialState).length
    let reducerKeysLength = typeof reducer === 'function' ? 1 : Object.keys(reducer).length

    if (stateKeysLength !== reducerKeysLength) {
        throw Error('The length of reducer is not equal the length of initialState')
    }

    let combinedReducer = combineReducers(reducer)

    return InnerComp => {
        return () => {
            const [state, dispatch] = useReducer(combinedReducer, initialState)
            return (
                <Provider value={{ state, dispatch }}>
                    <InnerComp />
                </Provider>
            )
        }
    }
}
```

```js
<form onSubmit={handleSubmit}>
    <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
    <input type="submit" value="Submit" />
</form>
```

### Cords

```js

```

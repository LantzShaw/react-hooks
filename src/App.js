/**
 * About using useReducer hook
 */

import { useReducer } from 'react'

const initialState = {
    count: 0,
}

const countReducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return {
                count: state.count + 1,
            }
        case 'decrease':
            return {
                count: state.count - 1,
            }
        default:
            break
    }
}

const App = () => {
    // const [count, dispatch] = useReducer((state, action) => {
    //     switch (action.type) {
    //         case 'increase':
    //             return [
    //                 ...state,
    //                 {
    //                     id: state.length,
    //                     name: action.name,
    //                 },
    //             ]
    //         default:
    //             break
    //     }
    // }, [])

    const [state, dispatch] = useReducer(countReducer, initialState)

    const increaseHandler = e => {
        // e.preventDefault()

        dispatch({
            type: 'increase',
            payload: 'increase',
        })

        console.log(state.count) // 这里打印的不是最新的
    }

    const decreaseHandler = () => {
        dispatch({
            type: 'decrease',
            payload: 'decrease',
        })
    }

    return (
        <>
            <button onClick={increaseHandler}>increase</button>
            count:{state.count}
            <button onClick={decreaseHandler}>decrease</button>
        </>
    )
}

export default App

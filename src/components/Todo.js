import { useState, useRef, useEffect } from 'react'

const Todo = () => {
    const [count, setCount] = useState(0)

    const countRef = useRef()

    const clickHandler = () => {
        // setCount(count + 1)

        // countRef.current = count

        console.log(countRef.current)
        // countRef.current++
    }

    useEffect(() => {
        countRef.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        // return () => clearInterval(countRef.current) // 组件卸载时调用
    }, [])

    useEffect(() => {
        if (count > 10) {
            clearInterval(countRef.current)
        }
    })

    console.log('---step1---', countRef.current)

    return (
        <div>
            <button onClick={clickHandler} ref={countRef}>
                count
            </button>
            <p>
                <span>{countRef.current}</span>
            </p>
        </div>
    )
}

export default Todo

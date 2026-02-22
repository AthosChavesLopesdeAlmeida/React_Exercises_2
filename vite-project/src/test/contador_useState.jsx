import { useState } from "react";
import './test.css'

function Counter_State () {
  const [count, setCount] = useState(0)

  const plusCount = () => {
    setCount(count + 1)
    console.log('RENDER')
  }

  const minusCount = () => {
    if (count === 0) {
      return
    } else {
      setCount(count - 1)
    }
    console.log('RENDER')
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      
      <div className="btn_container">
        <button onClick={plusCount}>+</button>
        <button onClick={minusCount}>-</button>
      </div>
    </div>
  )
}

export default Counter_State
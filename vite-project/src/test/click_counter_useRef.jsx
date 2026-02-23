import { useState, useRef } from "react";
import './test.css'

function Click_Counter_Ref () {
  const [clicks, setClicks] = useState(0)
  const clicksRef = useRef(clicks)

  const increment = () => {
    setClicks(prev => prev + 1)
    clicksRef.current = clicks
  }

  const show = () => {
    alert(clicksRef.current)
  }

  return (
    <div className="container">
      <div className="btn_container">
        <button onClick={increment}>Click</button>
        <button onClick={show}>Show</button>
      </div>
    </div>
  )
}

export default Click_Counter_Ref
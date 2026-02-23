import { useRef, useState } from "react";
import './test.css'

function Crono_Ref () {
  const [time, setTime] = useState(0)
  const intervalRef = useRef(null)

  const seconds = String(Math.floor(time / 1000)).padStart(2, '0')
  const ms = String(time % 1000).padStart(3, '0')

  return (
    <div className="container">
      <h3>{seconds}:{ms}</h3>
      <div className="btn_container">
        <button onClick={() => {
          intervalRef.current = setInterval(() => {
            setTime(prev => prev + 10)
          }, 10)
        }}>Start</button>
        
        <button onClick={() => {
          clearInterval(intervalRef.current)
        }}>Pause</button>
        
        <button onClick={() => {
          clearInterval(intervalRef.current)
          setTime(0)
        }}>Reset</button>
      </div>
    </div>
  )
}

export default Crono_Ref
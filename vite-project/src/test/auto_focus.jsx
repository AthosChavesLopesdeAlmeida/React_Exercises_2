import { useRef, useState, useEffect } from "react";
import React from "react";
import './test.css'

function Auto_Focus () {
  const [display, setDisplay] = useState(false)
  const inputRef = useRef(null)

  const handleFocus = () => {
    setDisplay(!display)
  }

  useEffect(() => {
    if (display) inputRef.current.focus()
  }, [display])

  return (
    <div className="container">
      <div className="horizontal_div">
        <button onClick={handleFocus}>
          Focus
        </button>
        <input type="text" ref={inputRef} className={display ? '' : 'invisible'}/>
      </div>
    </div>
  )
}

export default Auto_Focus
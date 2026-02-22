import { useState, useRef, useEffect } from "react";
import React from "react";
import './test.css'

function Prev_Number () {
  const prevNumber = useRef(null)
  const [currentNumber, setCurrentNumber] = useState(null)
  const [render, setRender] = useState(null)

  const handleChange = (e) => {
      setCurrentNumber(e.target.value)
  }

  useEffect(() => {
    setRender(prevNumber.current)
    prevNumber.current = currentNumber
  }, [currentNumber])

  return (
    <div className="container">
      <input type="number" name="number_input" id="number_input" onChange={handleChange}/>
      <p>Previous Number: {render}</p>
    </div>
  )
}

export default Prev_Number
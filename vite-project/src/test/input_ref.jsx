import { useRef, useState } from "react";
import './test.css'

function Input_Ref () {
  const [text, setText] = useState('')
  const [current, setCurrent] = useState(0)
  const inputRef = useRef(0)

  const handleChange = (e) => {
    setText(e.target.value)
    inputRef.current += 1
    setCurrent(inputRef.current)
  }

  return (
    <div className="container">
      <div className="input_div">
        <input type="text" onChange={handleChange}/>
        <h5>{text}</h5>
      </div>

      <p>Renderizado {current} vezes</p>
    </div>
  )
}

export default Input_Ref
import { useRef, useState } from "react"
import './test.css'

function Input_Save () {
  const [show, setShow] = useState(false)
  const [list, setList] = useState([])
  const inputRef = useRef([])
  const textRef = useRef(null)


  const saveString = (e) => {
    e.preventDefault()
    inputRef.current = [...inputRef.current, String(textRef.current.value)]
    
    textRef.current.value = ''
  }

  const view = () => {
    setList(inputRef.current)
    setShow(!show)
  }

  return (
    <>
    <div className="container first_container">
      <h1>Form</h1>

      <form onSubmit={saveString}>
        <input type="text" ref={textRef}/>

        <div className="btn_container">
          <button type="submit">Submit</button>
          <button onClick={view}>Show Strings</button>
        </div>

      </form>
    </div>


    <div className="container">
      <h1>Strings</h1>
      {show === false ? 
      <ul></ul> : 
      <ul className="list">
        {list.map((item) => {
          return (
            <li>{item}</li>
          )
        })}
      </ul> }
    </div>
    </>
  )
}

export default Input_Save
import { useState, useEffect } from "react";
import './test.css'

function Delay_Effect () {
  const [text, setText] = useState('')
  const [searchText, setSearchText] = useState('')
  
  const handleChange = (e) => {
    setText(e.target.value)
  }

useEffect(() => {
  const id = setTimeout(() => {
    setSearchText(text)
  }, 1000)
  return () => clearTimeout(id)
}, [text])

  return (
    <div className="container">
      <input type="text" onChange={handleChange}/>
      {searchText && <h4>Buscando por: {searchText}</h4>}
    </div>
  )
}

export default Delay_Effect
import { useEffect, useState } from "react";
import React from "react";
import './test.css'

function Save_Effect () {
  const [field, setField] = useState(() => {
    return localStorage.getItem('text') || ''
  })

  const handleChange = (e) => {
    setField(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('text', field)
  }, [field])

  const handleClear = () => {
    setField('')
    localStorage.removeItem('text')
  }

  return (
    <div className="container">
      <textarea onChange={handleChange} value={field}>
      </textarea>
      <button onClick={handleClear}>Clean</button>
    </div>
  )
}

export default Save_Effect
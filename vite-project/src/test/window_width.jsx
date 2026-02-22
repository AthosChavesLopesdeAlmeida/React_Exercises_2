import React from 'react'
import { useState, useEffect } from 'react'
import './test.css'

function Window_Width () {
  const [width, setWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='container'>
      <h2>Window Width: {width}</h2>
    </div>
  )
}

export default Window_Width
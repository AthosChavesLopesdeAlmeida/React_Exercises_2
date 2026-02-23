import { useRef } from "react";
import './test.css'

function Scroll_Ref () {
  const homeRef = useRef(null)
  const contactRef = useRef(null)
  const aboutRef = useRef(null)

  return (
    <>
    <div className="btn_container">
      <button onClick={() => {
        homeRef.current.scrollIntoView({ behavior: 'smooth' })
      }}>Home</button>
      
      <button onClick={() => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
      }}>About</button>
      
      <button onClick={() => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' })
      }}>Contact</button>
    </div>
    <div className="container" ref={homeRef}>
      <h2>Home</h2>
    </div>
    <div className="container" ref={aboutRef}>
      <h2>About</h2>
    </div>
    <div className="container" ref={contactRef}>
      <h2>Contact</h2>
    </div>
    </>
  )
}

export default Scroll_Ref
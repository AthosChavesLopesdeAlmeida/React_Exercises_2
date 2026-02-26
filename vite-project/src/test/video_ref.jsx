import { useRef } from "react"
import './test.css'

function Video_Ref () {
  const videoRef = useRef(null)

  const sound = () => {
    if (videoRef.current.muted === true) {
      videoRef.current.muted = false
    } else {
      videoRef.current.muted = true
    }
  }

  return (
    <div className="container first_container">
      <video src="https://www.w3schools.com/html/movie.mp4" ref={videoRef} width={300} height={200}></video>
      <section className="btn_container">
        <button onClick={() => videoRef.current.play()}>Play</button>
        <button onClick={() => videoRef.current.pause()}>Pause</button>
        <button onClick={sound}>Mute</button>
      </section>
    </div>
  )
}

export default Video_Ref
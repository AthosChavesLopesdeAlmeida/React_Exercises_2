import { useEffect, useRef, useState } from "react"

const PHASES = {
  work : {label: 'Foco', duration: 25 * 60},
  break : {label: 'Descanso', duration: 5 * 60}
}

function formatTime (seconds) {
  const m = String(Math.floor(seconds / 60).padStart(2, '0')) // Calcula os minutos completos (arredonda com Math.floor)
  const s = String(seconds % 60).padStart(2, 0) // Calcula os minutos incompletos (Aí faz os segundos)
  return `${m}:${s}`
}

function getTodayKey () {
  return new Date().toISOString().split('T')[0] // Objeto com a data atual usado como chave do histórico 
}

const Pomodoro = () => {
  const [phase, setPhase] = useState('work')
  const [timeLeft, setTimeLeft] = useState(PHASES.work.duration)
  const [isRunning, setIsRunning] = useState(false)
  const [history, setHistory] = useState(() => {
    // Inicialização lazy: só roda uma vez, evita ler localStorage a cada render
    const saved = localStorage.getItem('pomodoro_history')
    return saved ? JSON.parse(saved) : {}
  })

  const intervalRef = useRef(null)


  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current)
            handlePhaseComplete()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isRunning])


  useEffect(() => {
    localStorage.setItem('pomodoro_history', JSON.stringify(history))
  }, [history])



  function handlePhaseComplete () {
    setIsRunning(false)

    setPhase((currentPhase) => {
      if (currentPhase === 'work') {
      const today = getTodayKey()
      setHistory((prev) => {
        ...prev,
        [today] : (prev[today] || 0) + 1
      })
      } else {
        
      }
    })
  }


  return (
    <div>Pomodoro</div>
  )
}

export default Pomodoro
import { useEffect, useRef, useState } from "react"
import './pomodoro.css'

const PHASES = {
  work : {label: 'Foco', duration: 25 * 60},
  break : {label: 'Descanso', duration: 5 * 60}
}

function formatTime (seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0') // Calcula os minutos completos (arredonda com Math.floor)
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


  function handlePhaseComplete() {
    setIsRunning(false);

    setPhase((currentPhase) => {
      if (currentPhase === "work") {
        // Registra sessão de foco completada
        const today = getTodayKey();
        setHistory((prev) => ({
          ...prev,
          [today]: (prev[today] || 0) + 1,
        }));
        // Vai para descanso
        setTimeLeft(PHASES.break.duration);
        return "break";
      } else {
        // Volta para foco
        setTimeLeft(PHASES.work.duration);
        return "work";
      }
    });
  }


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
  

  function handleReset () {
    clearInterval(intervalRef.current)
    setIsRunning(false)
    setTimeLeft(PHASES[phase].duration)
  }

  const todaySessions = history[getTodayKey()] || 0
  const currentPhase = PHASES[phase] 


  return (
    <div className="pomodoro_container">
      <h1>Pomodoro</h1>

      <div className="div1">
        <div className="div2">
          <h3>
            {currentPhase.label}
          </h3> 
      </div>

      <div>
        {formatTime(timeLeft)}
      </div>

      <div className="div3">
        <button onClick={() => setIsRunning((v) => !v)}>
          {isRunning ? "⏸ Pausar" : "▶ Iniciar"}
        </button>
         <button onClick={handleReset}>↺ Resetar</button>
      </div>
      </div>

        <hr style={{width:'90%'}}/>

      <div className="div4">
        <h2>Hoje</h2>
        <p>{todaySessions}</p>

        <h3>Histórico</h3>
        {Object.entries(history).length === 0 ? (
          <p>Nenhuma sessão ainda</p>
        ) : (
          Object.entries(history)
            .sort((a , b) => b[0].localeCompare(a[0]))
            .map(([date, count]) => {
              <div key={date}>
                {date} : {"🍅".repeat(Math.min(count, 10))} {count > 10 ? `(${count})` : ''}
              </div>
            })
        )}
      </div>
    </div>
  )
}

export default Pomodoro
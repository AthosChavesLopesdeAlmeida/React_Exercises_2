import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pomodoro from './pomodoro_timer/Pomodoro'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Pomodoro/>
    </StrictMode>
)

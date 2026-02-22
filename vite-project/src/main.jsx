import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Delay_Effect from './test/delay_useEffect'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Delay_Effect/>
    </StrictMode>
)

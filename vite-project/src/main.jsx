import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Save_Effect from './test/local_effect_save'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Save_Effect/>
    </StrictMode>
)

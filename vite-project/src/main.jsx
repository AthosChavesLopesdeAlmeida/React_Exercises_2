import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Scroll_Ref from './test/scroll_ref'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Scroll_Ref/>
    </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Video_Ref from './test/video_ref'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Video_Ref/>
    </StrictMode>
)

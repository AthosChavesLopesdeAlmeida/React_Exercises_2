import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShopApp from './shop_cards/ShopApp.jsx'
import ShopProvider from './shop_cards/data_and_context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <ShopProvider>
    <StrictMode>
      <ShopApp />
    </StrictMode>
  </ShopProvider>
  
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// importamos el router
import { BrowserRouter } from 'react-router-dom'

// importamos el contexto
import { NavegacionProvider } from './context/NavegacionContexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavegacionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavegacionProvider>
  </StrictMode>,
)

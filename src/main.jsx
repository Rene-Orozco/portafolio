import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// importamos el router
import { BrowserRouter } from 'react-router-dom'

// importamos el contexto
import { NavegacionProvider } from './context/NavegacionContexto.jsx'

// importamos el otro contexto
import { HamburguesaProvider } from './context/HamburguesaContexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HamburguesaProvider>
      <NavegacionProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NavegacionProvider>
    </HamburguesaProvider>
  </StrictMode>,
)

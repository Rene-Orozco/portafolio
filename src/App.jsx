import React, { useContext, useEffect, Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// Páginas
import Home from './pages/Home/Home';
const Proyectos = lazy(() => import('./pages/Proyectos/Proyectos'));
const Habilidades = lazy(() => import('./pages/Habilidades/Habilidades'));
const Contactos = lazy(() => import('./pages/Contactos/Contactos'));

// Componentes
import Navegacion from './components/Navegacion/Navegacion';
import { BotonContexto } from './context/NavegacionContexto';

function App() {
  const { seleccion } = useContext(BotonContexto);

  useEffect(() => {
    const body = document.body;
    body.classList.remove('dark', 'light');
    body.classList.add(seleccion ? 'dark' : 'light');
  }, [seleccion]);

  return (
    <div className="padre">
      <div className="contenedorPrincipal">
        {/* Navegación (parte superior) */}
        <header className="zonaNavegacion" style={{ gridColumn: '1 / -1' }}>
          <Navegacion />
        </header>

        {/* Contenido dinámico (izquierda) */}
        <main className="zonaContenido">
          <Suspense fallback={<p>Cargando...</p>}>
            <Routes>
              <Route path="/" element={<Navigate to="/Proyectos" replace />} />
              <Route path="/Proyectos" element={<Proyectos />} />
              <Route path="/Habilidades" element={<Habilidades />} />
              <Route path="/Contactos" element={<Contactos />} />
            </Routes>
          </Suspense>
        </main>

        {/* Presentación personal (derecha) */}
        <aside className="zonaHome">
          <Home />
        </aside>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Todos los derechos reservados ©Renee {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;

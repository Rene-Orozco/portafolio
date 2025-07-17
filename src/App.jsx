import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'

// pages
import Home from './pages/Home/Home'
import Proyectos from './pages/Proyectos/Proyectos'
import Habilidades from './pages/Habilidades/Habilidades'
import Contactos from './pages/Contactos/Contactos'

// componente
import Navegacion from './components/Navegacion/Navegacion'
import { useContext, useEffect } from 'react';
import { BotonContexto } from './context/NavegacionContexto';


function App() {

  // llamamos el contexto
  const {seleccion} = useContext(BotonContexto);

  // aplicamos segin cambia
useEffect(() => {
  // Obtenemos el body
  const body = document.body;

  // Limpiamos primero cualquier clase anterior
  body.classList.remove('dark', 'light');

  // Agregamos la clase según el estado de seleccion
  if (seleccion) {
    body.classList.add('dark');
  } else {
    body.classList.add('light');
  }
}, [seleccion]);



  return (
    <div >
      <div className='contenedorPrincipal'>
        {/* menú de navegación */}
        <Navegacion />

        {/* renderiza el perfil */}
        <Home />

        <Routes>
          {/* Redirige automáticamente de "/" a "/Proyectos" */}
          <Route path="/" element={<Navigate to="/Proyectos" replace />} />

          {/* Ruta a Proyectos */}
          <Route path="/Proyectos" element={<Proyectos />} />

          {/* Ruta a Habilidades */}
          <Route path="/Habilidades" element={<Habilidades />} />

          {/* Ruta a Contactos */}
          <Route path="/Contactos" element={<Contactos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React from "react";

// importamos la navegacion
import { Link } from "react-router-dom";

// importamos estilos
import estilos from './PageError.module.css';

function PageError() {
  return (
    <>
    <div className={estilos.error404}>
      <h1>404</h1>
      <p>Oops... Página no encontrada 🌀</p>
      <Link to={'/'}>
        <button>
            Volver al inicio
        </button>
      </Link>
    </div>
    </>
  );
}

export default PageError;

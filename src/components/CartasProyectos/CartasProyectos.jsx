import React from 'react'

// importamos el obj
import objProyectos from './objProyectos.js';

// importamos estilos
import estilos from './CartasProyectos.module.css';

const mostrar = objProyectos.map((elemento, index) => (
  <div className={estilos.card} key={index}>
    <a href={elemento.url} target="_blank" rel="noopener noreferrer">
      <video
        src={elemento.video}
        width={150}
        muted
        loop
        onMouseEnter={(e) => e.target.play()}
        onMouseLeave={(e) => e.target.pause()}
        className={estilos.videos}
      />
      <p className={estilos.secondText}>{elemento.name}</p>
    </a>
  </div>
));




function CartasProyectos() {
    return (
        <>
            <h2>Mis primeros pasos como desarrollador</h2>
            <div className={estilos.cards}>
                {mostrar}
            </div>
        </>
    );
}


export default CartasProyectos

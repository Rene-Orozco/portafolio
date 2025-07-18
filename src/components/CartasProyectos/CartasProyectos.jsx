import React from 'react'

// importamos el obj
import objProyectos from './objProyectos.js';

// importamos estilos
import estilos from './CartasProyectos.module.css';

const mostrar = objProyectos.map((elemento, index) => (
    <div key={index} className={estilos.cartas}>
        <span>{elemento.name}</span>
        <video
            src={elemento.video}
            width={300}
            autoPlay
            loop
            muted
            playsInline
            className={estilos.videos}
        />
        <a href={elemento.url} target="_blank" rel="noopener noreferrer">
            <button>Ir al proyecto</button>
        </a>
    </div>
));


function CartasProyectos() {
    return (
        <>
            <div className={estilos.acomodar}>
                {mostrar && mostrar}
            </div>
        </>
    )
}

export default CartasProyectos

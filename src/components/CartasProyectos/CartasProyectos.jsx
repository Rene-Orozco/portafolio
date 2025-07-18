import React from 'react'

// importamos el obj
import objProyectos from './objProyectos.js';

// importamos estilos
import estilos from './CartasProyectos.module.css';

const mostrar = objProyectos.map((elemento, index) => (
    <div key={index} className={estilos.cartas}>
        <span>{elemento.name}</span>
        <a href={elemento.url} target="_blank" rel="noopener noreferrer">
            <video
                src={elemento.video}
                width={300}
                muted
                loop
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
                className={estilos.videos}
            />
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

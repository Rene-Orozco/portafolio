import React from 'react';
import estilos from './CartasHabilidades.module.css';

// Importamos imágenes
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import ts from '../../assets/ts.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import mongo from '../../assets/mongo.png';
import react from '../../assets/react.png';
import nexst from '../../assets/nexst.png';

// import angular from '../../assets/angular.png';
// import vue from '../../assets/vue.png';
// import postgres from '../../assets/postgres.png';

const tecnologiasConocidas = [
  { nombre: 'HTML', img: html },
  { nombre: 'CSS', img: css },
  { nombre: 'JavaScript', img: js },
  { nombre: 'TypeScript', img: ts },
  { nombre: 'Node.js', img: node },
  { nombre: 'Express', img: express },
  { nombre: 'MongoDB', img: mongo },
  { nombre: 'React', img: react },
  { nombre: 'Next.js', img: nexst }
];

// const tecnologiasPorAprender = [
//   { nombre: 'Angular', img: angular },
//   { nombre: 'Vue', img: vue },
//   { nombre: 'PostgreSQL', img: postgres }
// ];

function CartasHabilidades() {
  return (
    <div className={estilos.contenedorGeneral}>
      <h2 className={estilos.titulo}>Tecnologías que uso</h2>
      <div className={estilos.cards}>
        {tecnologiasConocidas.map((tech, index) => (
          <div className={estilos.card} key={index}>
            <img src={tech.img} alt={tech.nombre} width={50} />
            <p className={estilos.secondText}>{tech.nombre}</p>
          </div>
        ))}
      </div>

      {/* <h2 className={estilos.titulo}>Tecnologías que quiero aprender</h2>
      <div className={estilos.cards}>
        {tecnologiasPorAprender.map((tech, index) => (
          <div className={estilos.card} key={index}>
            <img src={tech.img} alt={tech.nombre} width={50} />
            <p className={estilos.secondText}>{tech.nombre}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default CartasHabilidades;

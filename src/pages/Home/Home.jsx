import React from 'react'

// importamos la imagen
import miImagen from '../../assets/mia.png';
import express from '../../assets/express.png';
import js from '../../assets/js.png';
import mongo from '../../assets/mongo.png';
import nexst from '../../assets/nexst.png';
import react from '../../assets/react.png';
import ts from '../../assets/ts.png';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import node from '../../assets/node.png';

// importamos estilos
import estilos from './Home.module.css';



function Home() {


  return (
    <>
      <div className={`${estilos.contenedorHome}`}>
        <h1>Renee Orozco</h1>
        <img src={miImagen} alt="Foto" width={100} className={estilos.miFoto} />
        <p className={estilos.miTexto}>
          Desarrollador Full Stack en formación, con enfoque en Frontend.<br />
          familiarizado con React y Next.js, <br />
          con interés en aprender Angular y Vue.<br />
          <br />
          Conocimientos en backend con Node.js y Express,<br />
          bases de datos con MongoDB,<br />
          Próximo a incorporar PostgreSQL.
        </p>
        <div className={estilos.tecnologias}>
          <img src={html} alt="html" width={50} className={estilos.flotar} />
          <img src={css} alt="css" width={50} className={estilos.flotar} />
          <img src={js} alt="js" width={50} className={estilos.flotar} />
          <img src={ts} alt="ts" width={50} className={estilos.flotar} />
          <img src={node} alt="node" width={50} className={estilos.flotar} />
          <img src={express} alt="express" width={50} className={estilos.flotar} />
          <img src={mongo} alt="mongo" width={50} className={estilos.flotar} />
          <img src={react} alt="react" width={50} className={estilos.flotar} />
          <img src={nexst} alt="nexst" width={50} className={estilos.flotar} />
        </div>
      </div>
    </>
  )
}

export default Home

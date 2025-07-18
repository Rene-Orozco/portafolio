import React, { useContext } from "react";
import { BotonContexto } from "../../context/NavegacionContexto";
import { Link, useLocation } from "react-router-dom";
import estilos from "./Navegacion.module.css";

function Navegacion() {
  const location = useLocation();

  const datos = [
    { rute: "/Proyectos", name: "Proyectos" },
    { rute: "/Habilidades", name: "Habilidades" },
    { rute: "/Contactos", name: "Contactos" },
  ];

  // llamamos el contexto
  const { seleccion, setSeleccion } = useContext(BotonContexto);

  // funcion que setea el nuevo valor
  function cambio() {
    setSeleccion(!seleccion);
  }

  return (
    <nav>
      <ul className={estilos.lista}>
        <div className={estilos.toggle}>
          <input type="checkbox" onClick={cambio}/>
          <label></label>
        </div>

        {datos.map((e, index) => (
          <li key={index}>
            <Link to={e.rute}>
              <input
                type="submit"
                value={e.name}
                className={location.pathname === e.rute ? estilos.activo : null}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navegacion;

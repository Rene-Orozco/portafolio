// usar contexto
import React, { useContext } from "react";
import { BotonContexto } from "../../context/NavegacionContexto";
import { HamburguesaContexto } from "../../context/HamburguesaContexto";

// navegacion
import { Link, useLocation } from "react-router-dom";

// estilos
import estilos from "./Navegacion.module.css";

// icono perfil
import perfil from '../../assets/perfil.png';


function Navegacion() {
  const location = useLocation();

  const datos = [
    { rute: "/Proyectos", name: "Proyectos" },
    { rute: "/Habilidades", name: "Habilidades" },
    { rute: "/Contactos", name: "Contactos" },
  ];

  // llamamos el contexto
  const { seleccion, setSeleccion } = useContext(BotonContexto);
  const {btnHambur, setBtnHambur} = useContext(HamburguesaContexto);

  // funcion que setea el nuevo valor
  function cambio() {
    setSeleccion(!seleccion);
  }

  // funcion seta el valor  nuevo en contexto hamburguesa
  function cambioMostrar() {
    setBtnHambur(!btnHambur);
  }

  return (
    <div>
      <nav>
        <ul className={estilos.lista}>
          <div className={estilos.toggle}>
            <input type="checkbox" onClick={cambio} />
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

          <div className={estilos.hamburguesa}>
            <img src={perfil} alt="perfil" width={35} height={30} onClick={cambioMostrar} />
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navegacion;

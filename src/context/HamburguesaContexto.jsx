import { createContext, useEffect, useState } from "react";

// Creamos el contexto
const HamburguesaContexto = createContext();

function HamburguesaProvider(props) {
  const [cambio, setCambio] = useState(window.innerWidth < 1000);
  const [ocultar, setocultar] = useState(false);

  useEffect(() => {
    function manejarResize() {
      setCambio(window.innerWidth < 1000);
    }

    // Ejecutar al montar
    manejarResize();

    // Escuchar cambios de tamaño
    window.addEventListener("resize", manejarResize);
    return () => window.removeEventListener("resize", manejarResize);
  }, []);

  return (
    <HamburguesaContexto.Provider value={{ cambio, setCambio, ocultar, setocultar }}>
      {props.children}
    </HamburguesaContexto.Provider>
  );
}

export { HamburguesaContexto, HamburguesaProvider };

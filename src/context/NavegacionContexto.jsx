// lo requerimos desde react
import { createContext, useState } from "react";

// creamos el contexto
const BotonContexto = createContext();


// creamos el provider
function NavegacionProvider(props){

    // estado que pasaremos
    const [seleccion, setSeleccion] = useState(false);


    return (

        <BotonContexto.Provider value={{seleccion, setSeleccion}}>
            {props.children}
        </BotonContexto.Provider>
    )
}


export {BotonContexto, NavegacionProvider}

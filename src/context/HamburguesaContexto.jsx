// lo requerimos desde react
import { createContext, useState } from "react";

// creamos el contexto
const HamburguesaContexto = createContext();


// creamos el provider
function HamburguesaProvider(props){

    // estado que pasaremos
    const [btnHambur, setBtnHambur] = useState(true);


    return (

        <HamburguesaContexto.Provider value={{btnHambur, setBtnHambur}}>
            {props.children}
        </HamburguesaContexto.Provider>
    )
}


export {HamburguesaContexto, HamburguesaProvider};

import React, { useState } from 'react';

// importamos estilos
import estilos from "./CartaContactos.module.css";

// importamos el icono del email
import email from '../../assets/mail.png';
import whatsapp from '../../assets/whatsapp.png';

function CartaContactos() {

    // estado de mostrar msj
    const [desicion, setDesicion] = useState(false);
    function cambiar() {
        setDesicion(!desicion)
    }

    return (
        <>
            <div className={estilos.padre}>
                {/* bloque de email */}
                <div className={`${estilos.acomodar}`}>
                    <div>
                        <h2>email</h2>
                        <img src={email} alt="email" width={300} />
                        <p>
                            Nuevo MSJ <button onClick={cambiar}>
                                <img src={whatsapp} alt="whatsapp" width={20} />
                            </button>
                        </p>
                    </div>

                    <div className={`${desicion ? estilos.mostrar : estilos.ocultar}`}>
                        <form action="https://formsubmit.co/03dbaa6d2c4d82cd78ee533125df473c" method="POST" className={estilos.formulario}>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="name" required />

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" required />

                            <label htmlFor="asunto">Asunto</label>
                            <input type="text" name="asunto" required />

                            <label htmlFor="mensaje">mensaje</label>
                            <textarea name="mensaje" id="mensaje"></textarea>

                            <input type="hidden" name="_captcha" value="false"></input>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>

                </div>
            </>
            )
}

            export default CartaContactos

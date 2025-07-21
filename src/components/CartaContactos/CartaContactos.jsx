import React, { useState } from 'react';

// importamos estilos
import estilos from "./CartaContactos.module.css";

// importamos el icono del email
import email from '../../assets/mail.png';
import whatsapp from '../../assets/whatsapp.png';

function CartaContactos() {

    // estado de mostrar msj
    const [desicion, setDesicion] = useState(true);
    function cambiar() {
        setDesicion(!desicion)
    }

    return (
        <>
            <div className={estilos.padre}>
                {/* bloque de email */}
                <div className={`${desicion ? estilos.mostrar : estilos.ocultar} ${estilos.acomodar}`}>
                    <div>
                        <h2>email</h2>
                        <img src={email} alt="email" width={300} />
                        <p>
                            usar <button onClick={cambiar}>
                                <img src={whatsapp} alt="whatsapp" width={20} />
                            </button>
                        </p>
                    </div>

                    <div>
                        <form action="https://formsubmit.co/03dbaa6d2c4d82cd78ee533125df473c" method="POST" className={estilos.formulario}>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="name" required />

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" required />

                            <label htmlFor="asunto">Asunto</label>
                            <input type="text" name="asunto" required />

                            <label htmlFor="mensaje">mensaje</label>
                            <textarea name="mensaje" id="mensaje"></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>




                    {/* bloque de whappsap */}
                    <div className={`${desicion ? estilos.ocultar : estilos.mostrar}`}>
                        <div>
                            <h2>whatsapp</h2>
                            <img src={whatsapp} alt="whatsapp" width={300} />
                            <p>
                                usar <button onClick={cambiar}>
                                    <img src={email} alt="email" width={20} />
                                </button>
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </>
            )
}

            export default CartaContactos

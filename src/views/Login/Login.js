import './Login.css'
import Boton from "../../components/Botones/Boton";
const Login = () => {
    /* States */

    /* Methods */
    const login = (e) => {
        e.preventDefault()
    }


    return (
        <div className="contenedor">
            <div className="contenedor__imagen">
                <h3>Imagen</h3>
            </div>
            <div className="contenedor__form">
                <div className="card">
                    <h3>Iniciar Sesión</h3>
                    <form className="card__form"
                          onSubmit={ (e) =>  login(e) }>
                        <input type="email"
                               placeholder="Usuario o Correo: "
                               className="card__input"
                        />
                        <input
                            type="password"
                            placeholder="Contraseña: "
                            className="card__input"
                        />

                        <div className="divBoton">
                            <Boton title="Acceder"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

import {Link, withRouter} from "react-router-dom"
import "./Navegacion.css"
const Navegacion=()=>{
    return(
        <div className="nav">
            <ul>
                <li><Link className="enlace" to="/Login">Iniciar Sesión</Link></li>
                <li><Link className="enlace" to="/">Inicio</Link> </li>
                <li>Registro </li>
            </ul>
        </div>
    )
}

export default withRouter(Navegacion)
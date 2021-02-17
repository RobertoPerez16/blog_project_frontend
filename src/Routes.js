import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./views/Login/Login";
import Inicio from "./views/Inicio/Inicio";
/* Rutas de la app */
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ App }/>
                <Route exact path="/login" component= { Login } />
                <Route exact path="/Inicio" component={ Inicio }/>
            </Switch>
        </Router>
    )
}
export default Routes;

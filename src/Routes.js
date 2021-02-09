import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./views/Login/Login";

/* Rutas de la app */
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ App }/>
                <Route exact path="/login" component= { Login } />
            </Switch>
        </Router>
    )
}
export default Routes;

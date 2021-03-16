import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthScreen } from '../components/Auth/AuthScreen';
import { ValidateScreen } from '../components/Auth/ValidateScreen';
import { Context } from '../context/Auth/AuthContext';

import DashboardRouter from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import Matricula from './../pages/MatriculaAcademica/Matricula';

export const AppRouter = () => {

    const { Authorization:{logged} } = useContext(Context);

    return (
        <Router>
            <div>


                <Switch>
                    <PublicRoute exact isAuthenticated={logged} path="/auth" component={AuthScreen} />
                    <PublicRoute exact isAuthenticated={logged} path="/auth/:token" component={ValidateScreen} />
                    <PrivateRoute isAuthenticated={logged} path="/" component={DashboardRouter} />
                </Switch>

                

                {/* <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/dashboard" component={DashboardLayout} />
                    <Redirect exact path="/" to="/login" />
                </Switch> */}
            </div>
        </Router>
    )
}

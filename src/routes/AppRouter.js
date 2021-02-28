import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { RouterPrivate } from './RouterPrivate';
import { RouterPublic } from './RouterPublic';
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    
                    <Route
                        path="/matricula"
                        component={RouterPrivate}
                    />

                    <Route
                        path="/auth"
                        component={AuthRouter}
                    />
                    <Route
                        path="/"
                        component={RouterPublic}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

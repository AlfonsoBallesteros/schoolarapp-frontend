import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { AuthRouter } from './AuthRouter';
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route
                        exact
                        path="/"
                        component={HomeScreen}
                    />

                    <Route
                        path="/auth"
                        component={AuthRouter}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

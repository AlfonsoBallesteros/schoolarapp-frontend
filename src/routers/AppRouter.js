import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route path="/dashboard" component={DashboardLayout}/>
                    <Redirect exact path="/" to="/login"/>
                </Switch>
            </div>
        </Router>
    )
}

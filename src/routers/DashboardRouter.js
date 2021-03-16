import React from 'react'
import {
    Redirect,
    Route,
    Switch
} from "react-router-dom";

// import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';
import { Prueba } from '../pages/MatriculaAcademica/prueba';
import DashboardLayout from './../layouts/DashboardLayout/DashboardLayout';


const DashboardRouter = () => {

    return (
        <>
            <DashboardLayout>
                <Switch>
                    <Route exact path="/dashboard" component={Prueba} />
                    <Redirect to="/dashboard" />
                </Switch>
            </DashboardLayout>

        </>
    )
}

export default DashboardRouter;
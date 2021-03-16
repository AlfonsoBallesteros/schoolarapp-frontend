import React from 'react'
import {
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';

import { NuevoEstudiante } from '../pages/MatriculaAcademica/NuevoEstudiante';



const DashboardRouter = () => {

    return (
        <>
            <DashboardLayout>
                <Switch>
                    <Route exact path="/dashboard" component={NuevoEstudiante} />
                    <Redirect to="/dashboard" />
                </Switch>
            </DashboardLayout>

        </>
    )
}

export default DashboardRouter;
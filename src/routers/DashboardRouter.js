import React from 'react'
import {
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import DatosMatricula from '../components/Form/DatosMatricula';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';

import { NuevoEstudiante } from '../pages/MatriculaAcademica/NuevoEstudiante';
import Matricula from './../pages/MatriculaAcademica/Matricula';



const DashboardRouter = () => {

    return (
        <>
            <DashboardLayout>
                <Switch>
                    <Route exact path="/dashboard" component={Matricula} />
                    <Route exact path="/dashboard/new" component={NuevoEstudiante} />
                    <Redirect to="/dashboard" />
                </Switch>
            </DashboardLayout>

        </>
    )
}

export default DashboardRouter;
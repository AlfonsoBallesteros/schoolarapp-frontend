import React from 'react'
import {
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import MatriculaContext from '../context/Matricula/MatriculaContext';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';

import { NuevoEstudiante } from '../pages/MatriculaAcademica/NuevoEstudiante';
import Matricula from './../pages/MatriculaAcademica/Matricula';
import EstadoProceso from './../pages/MatriculaAcademica/EstadoProceso';
import EstadoMatricula from './../pages/MatriculaAcademica/EstadoMatricula';


const DashboardRouter = () => {

    return (
        <>
            <DashboardLayout>
                <Switch>
                    <Route exact path="/dashboard" component={Matricula} />
                    <Route exact path="/dashboard/state" component={EstadoMatricula} />
                    <Route exact path="/dashboard/new" render={(props) => (
                        <MatriculaContext>
                            <NuevoEstudiante {...props} />
                        </MatriculaContext>
                    )} />
                    <Redirect to="/dashboard" />
                </Switch>

            </DashboardLayout>

        </>
    )
}

export default DashboardRouter;
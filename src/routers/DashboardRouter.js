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



const DashboardRouter = () => {

    return (
        <>
            <DashboardLayout>
                <Switch>
                    <Route exact path="/dashboard" component={Matricula} />
                    <Route exact path="/dashboard/new" render={(props) => (
                        <MatriculaContext>
                            <NuevoEstudiante {...props}/>
                        </MatriculaContext>
                    )} />
                    <Redirect to="/dashboard" />
                </Switch>
            </DashboardLayout>

        </>
    )
}

export default DashboardRouter;
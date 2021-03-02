import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
import { mainListItems } from '../constants/listItems';

const DashboardRouter = (props) => {

    return (
        <Router>
            <Switch>
            {
                mainListItems.map(item => {
                    const {component: Component, text, path} = item;
                    return <Route key={text} path={path} component={Component}/>
                })
            }
            </Switch>
        </Router>
    )
}

export default DashboardRouter;
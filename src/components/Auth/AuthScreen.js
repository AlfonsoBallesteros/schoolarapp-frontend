import React, { useState, useEffect } from 'react'

import { Tabs, Tab, AppBar } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { LoginScreen } from './LoginScreen'
import { RegisterScreen } from './RegisterScreen'
import { fetchSinToken } from '../../helpers/AuthFetch';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    background: {
        backgroundImage: `url(${"./assets/img/Square.png"})`,
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(0, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    img: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
    },
    logo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 150,
    }
}));

export const AuthScreen = () => {


    const [{ types }, setSelect] = useState({
        types: []
    })

    const handleSelect = async () => {
        try {
            const res = await fetchSinToken('references/6050191c3c492300152684b0');
            const resjson = await res.json();
            setSelect(resjson)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        handleSelect();
    }, [])


    const classes = useStyles();
    const [value, setValue] = useState(0)
    const handleTabs = (e, val) => {
        setValue(val);
    }

    return (
        <Grid container component="main" className={classes.root, classes.background}>
            <CssBaseline/>
            <Grid item xs={false} sm={6} md={8} className={classes.logo} >
                <img src="./assets/img/tecnico-logo.png" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square>
                <br></br><div className={classes.img}>
                    <img src="./assets/img/logo.png" /><br></br>
                </div>
                <AppBar position="static" style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                    <Tabs value={value} onChange={handleTabs} indicatorColor="primary" centered>
                        <Tab label="Ingreso" />
                        <Tab label="Registro" />
                    </Tabs>
                </AppBar>

                <div><br></br>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Modúlo de Matriculas
                         </Typography>
                         <p>Ingrese con su nombre de usuario.</p>

                    </div>
                    <div className={classes.paper}>
                        {
                            (value === 0)
                                ? <LoginScreen />
                                : <RegisterScreen types={types} />
                        }
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

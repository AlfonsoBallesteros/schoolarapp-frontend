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
    logo: {
        backgroundColor: URL("./assets/square.png")
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
    }
}));

export const AuthScreen = () => {

    
    const [{types}, setSelect] = useState({
        types: []
    })

    const handleSelect = async () => {
        try {
            const res = await fetchSinToken('references/6046f1729541a3474503e5f8');
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
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={6} md={8} className={classes.logo, classes.img} >
                <img  src="./assets/img/tecnico-logo.png" /><br></br>
            </Grid>
            <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square>
                <br></br><div className={classes.img}>
                    <img  src="./assets/img/logo.png" /><br></br>
                </div>
                <AppBar position="static" style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>
                    <Tabs value={value} onChange={handleTabs} indicatorColor="primary" centered>
                        <Tab label="Iniciar Sesion" />
                        <Tab label="Registrarse" />
                    </Tabs>
                </AppBar>

                <div><br></br>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Modúlo de Matriculas
                    </Typography>

                    </div>
                    <div className={classes.paper}>
                        {
                            (value === 0)
                                ? <LoginScreen />
                                : <RegisterScreen types={types}/>
                        }
                    </div>
                </div>


            </Grid>
        </Grid>
    )
}

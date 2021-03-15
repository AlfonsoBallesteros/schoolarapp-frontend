import React from 'react'



import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { LoginScreen } from './LoginScreen'





const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    logo: {
        backgroundColor: "#219653"
    },
    paper: {
        margin: theme.spacing(4, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
}));

export const AuthScreen = () => {

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={6} md={8} className={classes.logo} />
            <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square>



                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Modúlo de Matriculas
                    </Typography>

                </div>
                <div className={classes.paper}>
                    <LoginScreen />
                </div>

            </Grid>
        </Grid>
    )
}

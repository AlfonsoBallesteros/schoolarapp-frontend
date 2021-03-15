import React, { useState, useContext } from 'react'

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { fetchSinToken } from '../../helpers/AuthFetch';
import { Context } from '../../context/Auth/AuthContext';
import { AuthTypes } from '../../types/AuthTypes';


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
}));



export const LoginScreen = () => {

    const { dispatch } = useContext(Context);

    const classes = useStyles();

    const [value, setValue] = useState({
        username: '',
        password: '',
        showPassword: false
    })

    const handleChange = ({ target }) => {
        setValue({ ...value, [target.name]: target.value });
    };
    const handleShowPassword = () => {
        setValue({ ...value, showPassword: !value.showPassword })
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();

        fetchSinToken('authenticate', value, 'POST')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(resJson => {
                dispatch({
                    type: AuthTypes.login,
                    payload: resJson
                })
            })
            .catch(error => {
                
                console.error(error)
            });
    }


    return (
        <div>
            <form className={classes.form} noValidate onSubmit={hanldeSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    onChange={handleChange}
                    fullWidth
                    id="email"
                    label="Email"
                    name="username"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onChange={handleChange}
                    name="password"
                    label="Contraseña"
                    value={value.password}
                    type={value.showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                    edge="end"
                                >
                                    {value.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Recordarme"
                />
                <Grid container direction="row" justify="center" alignItems="center">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Iniciar Sesion
                            </Button>
                </Grid>

                <Grid container direction="row" justify="center" alignItems="center">
                    <Typography variant="body2">
                        ¿Olvidó su contraseña? <Link href="#" variant="body2">
                            Reestrablecer </Link>
                    </Typography>

                </Grid>
            </form>
        </div>
    )
}

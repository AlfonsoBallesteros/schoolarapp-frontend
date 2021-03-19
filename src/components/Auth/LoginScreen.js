import React, { useState, useContext } from 'react'

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { fetchSinToken } from '../../helpers/AuthFetch';
import { Context } from '../../context/Auth/AuthContext';
import { AuthTypes } from '../../types/AuthTypes';
import Swal from 'sweetalert2';
import CircularProgress from '@material-ui/core/CircularProgress';

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

    const [loading, setloading] = useState(false)
    const [errors, seterrors] = useState({})
    const [value, setValue] = useState({
        username: '',
        password: '',
        showPassword: false,
        loading: false
    })

    const validate = () => {
        let temp = {};
        temp.username = (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/).test(value.username) ? "" : "Email requerido";
        temp.password = value.password ? "" : "Contraseña requerida";

        seterrors({
            ...temp
        })
        return Object.values(temp).every(x => x == "")
    }

    const handleChange = ({ target }) => {
        setValue({ ...value, [target.name]: target.value });
    };
    const handleShowPassword = () => {
        setValue({ ...value, showPassword: !value.showPassword })
    }

    const hanldeSubmit = async (e) => {
        
        e.preventDefault();
        if (validate()) {
            setloading(true)
            try {
                let res = await fetchSinToken('authenticate', value, 'POST');
                let resJ = await res.json();
                if (res.status == 400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: resJ.message,
                        confirmButtonColor: "#219653"
                    })
                    
                }

                if(resJ.id_token){
                    dispatch({
                        type: AuthTypes.login,
                        payload: resJ
                    })
                }        
                setloading(false)
            } catch (error) {
                console.log(error)
            }
        }

    }


    return (
        <div>
            <form className={classes.form} noValidate onSubmit={hanldeSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    onChange={handleChange}
                    fullWidth
                    label="Email"
                    name="username"
                    autoFocus
                    {...(errors.username && { error: true, helperText: errors.username })}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onChange={handleChange}
                    {...(errors.password && { error: true, helperText: errors.password })}
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
                    {
                        (!loading)
                            ? <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Iniciar Sesion
                            </Button>
                            : <CircularProgress color="primary" />
                    }

                </Grid>

                {/* <Grid container direction="row" justify="center" alignItems="center">
                    <Typography variant="body2">
                        ¿Olvidó su contraseña? <Link href="#" variant="body2">
                            Reestrablecer </Link>
                    </Typography>

                </Grid> */}
            </form>
        </div>
    )
}

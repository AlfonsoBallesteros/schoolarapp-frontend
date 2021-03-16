import React, { useState } from 'react'

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

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { fetchSinToken } from '../../helpers/AuthFetch';


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        height: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
}));

export const RegisterScreen = ({ types }) => {




    const classes = useStyles();

    const [value, setValue] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        SelecDoc: '6050191c3c492300152684b3',
        NumDoc: ''
    })

    

    const handleChange = ({ target }) => {
        setValue({ ...value, [target.name]: target.value });
    };
    const handleShowPassword = () => {
        setValue({ ...value, showPassword: !value.showPassword })
    }

    const hanldeSubmit = async (e) => {
        e.preventDefault();

        //enviar person
        const {
            firstName: name,
            lastName: surname,
            SelecDoc: typeId,
            NumDoc: documentId
        } = value;

        

        try {
            const res = await fetchSinToken('people', {
                name,
                surname,
                typeId,
                documentId
            }, 'POST');
            const resJson = await res.json();
            const {_id} = resJson;
            console.log(_id)
            
            //user
            const {username:login, password, firstName, lastName} = value
            const data = {
                login,
                email: login,
                firstName,
                lastName,
                password,
                person: _id
            }
            console.log(data)
            const res2 = await fetchSinToken('register', data , 'POST');
            const resJs2 = await res2.json();
            console.log(resJs2)


        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
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
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        onChange={handleChange}
                        fullWidth
                        id="firstName"
                        label="Primer Nombre"
                        name="firstName"
                        autoComplete="firstName"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        onChange={handleChange}
                        fullWidth
                        id="lastName"
                        label="Primer Apellido"
                        name="lastName"
                        autoComplete="lastName"
                    />

                    <FormControl variant="outlined" fullWidth margin="normal">
                        <InputLabel>Tipo de Documento</InputLabel>
                        <Select
                            name="SelecDoc"
                            onChange={handleChange}
                            label="Documento de Identidad"
                            value={value.SelecDoc}
                        >
                            {
                                types.map(
                                    select => {
                                        return <MenuItem key={select._id} value={select._id}>{select.name}</MenuItem>
                                    }
                                )
                            }

                        </Select>
                    </FormControl>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        onChange={handleChange}
                        fullWidth
                        id="NumDoc"
                        label="Numero Documento"
                        name="NumDoc"
                        autoComplete="NumDoc"
                    />

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Acepto política de tratamiento de datos"
                    />
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Crear Cuenta
                            </Button>
                    </Grid>

                </form>
            </div>
        </div>
    )
}

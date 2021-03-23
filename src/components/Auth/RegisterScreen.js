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
import CircularProgress from '@material-ui/core/CircularProgress';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { fetchSinToken } from '../../helpers/AuthFetch';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';


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

    const history = useHistory()


    const classes = useStyles();
    const [errors, seterrors] = useState({})
    const [loading, setloading] = useState(false)

    const validate = () => {
        let temp = {};
        temp.username = (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/).test(value.username) ? "" : "Email requerido";
        temp.password = (/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{7,20}$/).test(value.password) ? "" : "La contraseña debe tener al menos entre 7 y 20 caracteres, un dígito numerico, una minúscula, una mayúscula y un caracter no alfanumérico";
        temp.firstName = (value.firstName).length > 2 ? "" : "Primer nombre requerido"
        temp.lastName = (value.lastName).length > 2 ? "" : "Primer apellido requerido"
        temp.NumDoc = (/^\d+\S{7,20}$/).test(value.NumDoc) ? "" : "Documento de identidad invalido";


        seterrors({
            ...temp
        })
        return Object.values(temp).every(x => x == "")
    }

    const [value, setValue] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        SelecDoc: '6050191c3c492300152684b3',
        NumDoc: ''
    })

    const [check, setcheck] = useState({
        value: false
    });

    const handleCheck = (e) => {
        setcheck({ ...check, [e.target.name]: e.target.checked });
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

            if (check.value) {
                setloading(true)

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
                    if (!res.ok) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: resJson.message,
                            confirmButtonColor: "#219653"
                        })
                    } else {
                        const { _id } = resJson;
                        console.log(_id)

                        //user
                        const { username: login, password, firstName, lastName } = value
                        const data = {
                            login,
                            email: login,
                            firstName,
                            lastName,
                            password,
                            person: _id
                        }
                        const res2 = await fetchSinToken('register', data, 'POST');
                        const resJs2 = await res2.json();

                        if (!res2.ok) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: resJs2.message,
                                confirmButtonColor: "#219653"
                            })
                        } else {
                            Swal.fire({
                                icon: 'success',
                                title: 'Estudiante Registrado',
                                text: "Porfavor verifique su correo para activar su cuenta ",
                                confirmButtonColor: "#219653"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    history.replace('/auth')
                                }
                            })
                        }
                    }
                    setloading(false)

                } catch (error) {
                    console.log(error)
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: "Por favor Acepto política de tratamiento de datos para crear un usuario",
                    confirmButtonColor: "#219653"
                })
            }


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
                        {...(errors.username && { error: true, helperText: errors.username })}
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
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        {...(errors.firstName && { error: true, helperText: errors.firstName })}
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
                        {...(errors.lastName && { error: true, helperText: errors.lastName })}
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
                        {...(errors.NumDoc && { error: true, helperText: errors.NumDoc })}
                        onChange={handleChange}
                        fullWidth
                        id="NumDoc"
                        label="Numero Documento"
                        name="NumDoc"
                        autoComplete="NumDoc"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={check.value}
                                onChange={handleCheck}
                                name="value"
                                color="primary"
                            />
                        }
                        label="Acepto política de tratamiento de datos"
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
                                    Crear Cuenta
                                </Button>
                                : <CircularProgress color="primary" />
                        }

                    </Grid>

                </form>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridInput: {
        marginRight: theme.spacing(2),

    },
}));

const DatosMatricula = () => {

    const [value, setInputValue] = useState({});
    const classes = useStyles();

    const handleChange = (event) => {
        const name = event.target.name;
        setInputValue({
            ...value, [name]: event.target.value,
        });
    };

    return (
        <Container fixed>
            <h1>PASO 2: Datos del la matrícula</h1>
            <p>Diligencie la información correspondiente a la matrícula en el período actual.</p>
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <p>Ingrese o actualice los datos personales correspondientes al estudiante</p>
                            <Grid className={classes.gridInput} item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Grado al que aspira cursar *</InputLabel>
                                    <Select
                                        onChange={handleChange}
                                        value={value.tipoIdentificacion}
                                        onChange="handleChange"
                                        label="Documento de Identidad"
                                    >
                                        <MenuItem value={10}>Primero</MenuItem>
                                        <MenuItem value={20}>Segundo</MenuItem>
                                        <MenuItem value={30}>Tercero</MenuItem>
                                        <MenuItem value={30}>Cuarto</MenuItem>
                                        <MenuItem value={30}>Quinto</MenuItem>
                                        <MenuItem value={30}>Sexto</MenuItem>
                                        <MenuItem value={30}>Séptimo</MenuItem>
                                        <MenuItem value={30}>Octavo</MenuItem>
                                        <MenuItem value={30}>Noveno</MenuItem>
                                        <MenuItem value={30}>Décimo</MenuItem>
                                        <MenuItem value={30}>Once</MenuItem>
                                    </Select><br></br>
                                </FormControl>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Jornada*</InputLabel>
                                    <Select
                                        onChange={handleChange}
                                        value={value.tipoIdentificacion}
                                        onChange="handleChange"
                                        label="Jornada *"
                                    >
                                        <MenuItem value={10}>Mañana</MenuItem>
                                        <MenuItem value={20}>Tarde</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid> <br></br>
                            <Grid className={classes.gridInput} item xs={12}>
                                <TextField disabled fullWidth
                                    id="outlined-basic"
                                    label="2021"
                                    variant="outlined"
                                    onChange="handleChange"
                                />
                            </Grid><br></br>
                        </Grid>
                        <Grid item xs={12} sm={5} className={classes.gridInput}>
                            <Grid className={classes.gridInput} item xs={12}>
                                <p>Bolentín del año académico inmediatamente anterior</p>
                                <Button
                                    variant="contained"
                                    color="default"
                                    className={classes.button}
                                    startIcon={<CloudUploadIcon />}
                                >
                                Subir
                                </Button>
                            </Grid><br></br>
                            <Grid className={classes.gridInput} item xs={12}>
                                <p>Documento de paz y salvo del año anterior</p>
                                <Button
                                    variant="contained"
                                    color="default"
                                    className={classes.button}
                                    startIcon={<CloudUploadIcon />}
                                >
                                Subir
                                </Button>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} sm={3} className={classes.gridInput}>
                        <img src="https://www.figma.com/file/LaFM8jpiLfBBZ6O7zZw1VP/SchoolarApp?node-id=1190%3A8815"/>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </Container>
    )
}

export default DatosMatricula

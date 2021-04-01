import React, { useState, useEffect } from 'react'
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
import { fetchSinToken } from '../../helpers/AuthFetch';
import { useMatriculaContext } from './../../context/Matricula/MatriculaContext';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridInput: {
        marginRight: theme.spacing(2),

    },
    input: {
        display: 'none',
    },
}));

export const DatosMatricula = () => {


    const [listGrades, setListGrades] = useState([]);
    const [listJornada, setListJornada] = useState([]);
    const classes = useStyles();
    const state = useMatriculaContext();
    const { secondStep, setSecondStep } = state;
    console.log(state);


    useEffect(() => {
        getListGrade();
        getListJornada();
    }, [])



    const getListGrade = async () => {
        try {
            const res = await fetchSinToken('references/6050191c3c492300152684e6');
            const resjson = await res.json();
            setListGrades(resjson.types)
            console(resjson.types)
        } catch (error) {
            console.log(error)
        }
    };

    const getListJornada = async () => {

        try {
            const res = await fetchSinToken('references/6050191d3c492300152684f9');
            const resjson = await res.json();
            console.log(resjson)
            setListJornada(resjson.types)
        } catch (error) {
            console.log(error)
        }
    };

    const handleChange = ({ target }) => {
        setSecondStep({ ...secondStep, [target.name]: target.value });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Container fixed>
            <h1>PASO 2: Datos del la matrícula</h1>
            <p>Diligencie la información correspondiente a la matrícula en el período actual.</p>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <p>Ingrese o actualice los datos personales correspondientes al estudiante</p>
                            <Grid className={classes.gridInput} item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Grado al que aspira cursar *</InputLabel>
                                    <Select
                                        name="grado"
                                        id="grado"
                                        label="grado"
                                        onChange={handleChange}
                                        value={secondStep.grado}
                                    >
                                        {listGrades.map((list) => (
                                            <MenuItem key="list" value={list._id} > {`${list.value} - ${list.name}`}</MenuItem>
                                        ))};

                                        </Select><br></br>
                                </FormControl>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Jornada*</InputLabel>
                                    <Select
                                        name="jornada"
                                        id="jornada"
                                        onChange={handleChange}
                                        label="Jornada *"
                                        value={secondStep.jornada}
                                    >
                                        {listJornada.map((jornada) => (
                                            <MenuItem key="jornada" value={jornada._id} > {`${jornada.name}`}</MenuItem>
                                        ))};
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
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="contained-button-file">
                                 <Button
                                        startIcon={<CloudUploadIcon />}
                                        fullwidth
                                        variant="contained"
                                        value={secondStep.documento}
                                        name="documento"
                                        onChange={handleChange}
                                        variant="contained"
                                        color="default"
                                        component="span">
                                        Subir
                                 </Button>
                                </label>
                            </Grid><br></br>
                            <Grid className={classes.gridInput} item xs={12}>
                                <p>Documento de paz y salvo del año anterior</p>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="contained-button-file">
                                    <Button
                                        startIcon={<CloudUploadIcon />}
                                        fullwidth
                                        variant="contained"
                                        value={secondStep.documento}
                                        name="documento"
                                        onChange={handleChange}
                                        variant="contained"
                                        color="default"
                                        component="span">
                                        Subir
                                    </Button>
                                </label>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </Container>
    )
}

export default DatosMatricula

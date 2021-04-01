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
import { useMatriculaContext } from '../../context/Matricula/MatriculaContext';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridInput: {
        marginRight: theme.spacing(2),

    },
}));

 export const DatosMatricula = () => {

    const state = useMatriculaContext();
    const { secondMatricula, setSecondMatricula } = state;
    const [listGrades, setListGrades] = useState({});
    const classes = useStyles();
    

    useEffect(() => {
        getListGrade()
    }, [])
    

    const getListGrade = async () => {
        try {
          const res = await fetchSinToken('references/6050191c3c492300152684e6');
          const resjson = await res.json();
          console.log(resjson)
          setListGrades(resjson.types)
        } catch (error) {
          console.log(error)
        }
      }

      const handleChange = (event) => {
        const name = event.target.name;
        setSecondMatricula({
            ...secondMatricula, [name]: event.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const {
            grado: Grado,
        } = value;
        
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
                                        label="grado"
                                        onChange={handleChange}
                                        value={value.grado}
                                    >
                                    {listGrades.map( (list) =>{
                                        <MenuItem key={list._id} value={list._id}>{`${list.value} - ${list.name}`}</MenuItem>
                                    })}
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
                        </Grid>
                    </Grid>
                </div>
            </form>
        </Container>
    )
}

export default DatosMatricula

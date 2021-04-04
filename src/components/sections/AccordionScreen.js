import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Label } from 'recharts';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import '../Form/form.css'



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    gridInput: {
        marginRight: theme.spacing(2),

    },
    select: {
        marginRight: theme.spacing(2),
    },
    check: {
        marginLeft: theme.spacing(3),
    }
}));

export const AccordionScreen = ({
    title,
    activate
}) => {

    const classes = useStyles();

    return (
        <Accordion disabled={activate}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Datos Personales: {title}</Typography>
            </AccordionSummary>
            <AccordionDetails>

                <form className="MuiGrid-grid-lg-9" noValidate autoComplete="off" >
                    <div className={classes.root}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={4}>
                                <h2>Datos Personales: {title}</h2>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Parentesco</InputLabel>
                                        <Select
                                            name="parentesco"
                                            id="parentesco"
                                            value={10}

                                            label="Parentesco"
                                        >

                                        </Select>
                                    </FormControl>
                                </Grid><br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <TextField
                                        disabled
                                        name="nombre"
                                        fullWidth
                                        id="nombre"
                                        label="Nombres completos *"
                                        variant="outlined"

                                    />
                                </Grid><br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <TextField
                                        disabled
                                        name="apellidos"
                                        fullWidth
                                        id="apellidos"
                                        label="Apellidos completos *"
                                        variant="outlined"
                                    />
                                </Grid><br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Tipo de Documento</InputLabel>
                                        <Select
                                            name="tipoIdentificacion"
                                            id="tipoIdentificacion"
                                            value={10}

                                            label="Documento de Identidad"
                                        >

                                        </Select>
                                    </FormControl>
                                </Grid><br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <TextField fullWidth
                                        disabled
                                        name="numIdentificación"
                                        id="numIdentificación"
                                        variant="outlined"
                                        label="Número de identificación *"
                                    />
                                </Grid><br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <TextField fullWidth
                                        name="fechaNacimiento"
                                        type="date"
                                        id="fechaNacimiento"
                                        label=""
                                        variant="outlined"
                                    />
                                </Grid><br></br>

                                <Grid className={classes.gridInput} item xs={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Estado Civil</InputLabel>
                                        <Select
                                            name="estadocivil"
                                            id="estadocivil"
                                            value={10}

                                            label="estadocivil"
                                        >

                                        </Select>
                                    </FormControl>
                                </Grid><br></br>

                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <TextField fullWidth
                                        type="text"
                                        id="numeroTelefono"
                                        label="Ciudad de nacimiento *"
                                        variant="outlined"

                                        name="numeroTelefono" />
                                </Grid><br></br>

                                <Grid className={classes.gridInput} item xs={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Género</InputLabel>
                                        <Select
                                            value={10}
                                            label="Genero"

                                            name="genero"
                                            id="genero"
                                        >


                                        </Select>
                                    </FormControl>
                                </Grid><br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <TextField fullWidth
                                        type="number"
                                        id="numeroTelefono"
                                        label="Número Telefónico *"
                                        variant="outlined"

                                        name="numeroTelefono" />
                                </Grid><br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <TextField fullWidth
                                        type="number"
                                        id="nuCelular"
                                        label="Número de Celular *"
                                        variant="outlined"

                                        name="nuCelular" />
                                </Grid><br></br>
                                <Grid className={classes.gridInput} container item xs={12}>
                                    <Grid className={classes.select} item xs={4}>
                                        <TextField fullWidth
                                            id="comuna"
                                            label="Comuna *"
                                            variant="outlined"
                                            type="number"
                                            name="comuna"
                                        /><br></br>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <TextField fullWidth
                                            id="barrio"
                                            name="barrio"
                                            label="Barrio *"
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                                <br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <TextField fullWidth
                                        type="number"
                                        id="estrato"
                                        name="estrato"
                                        label="Estrato *"
                                        variant="outlined"
                                    />
                                </Grid><br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <TextField fullWidth
                                        type="text"
                                        id="outlined-basic"
                                        name="dirección"
                                        label="dirección *"
                                        variant="outlined"
                                    />
                                </Grid><br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <TextField fullWidth
                                        type="text"
                                        id="outlined-basic"
                                        name="profesion"
                                        label="Profesión *"
                                        variant="outlined"
                                    />
                                </Grid><br></br>

                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <TextField fullWidth
                                        type="text"
                                        id="ciudadResidencia"
                                        label="Ciudad de Residencia *"
                                        name="ciudadResidencia"
                                        variant="outlined"
                                    />
                                </Grid><br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <TextField fullWidth
                                        id="nacionalidad"
                                        label="Nacionalidad *"
                                        name="nacionalidad"
                                        variant="outlined"
                                    />
                                </Grid><br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>RH *</InputLabel>
                                        <Select
                                            value={10}
                                            name="rh"
                                            label="Rh"

                                        >


                                        </Select>
                                    </FormControl>
                                </Grid><br></br>
                                <Grid className={classes.gridInput} item xs={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>EPS *</InputLabel>
                                        <Select
                                            value={10}
                                            name="rh"
                                            label="Rh"

                                        >


                                        </Select>
                                    </FormControl>
                                </Grid><br></br>
                                <Grid className={classes.gridInput} container item xs={12}>
                                    <Grid item xs={6} className={classes.check}>
                                        <p>Enfermedad </p>
                                        <FormControlLabel
                                            control={<Checkbox color="primary" />}
                                            label="Si"
                                            name="enfermedad"
                                            labelPlacement="Si"

                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <p>Discapacidad </p>
                                        <FormControlLabel
                                            control={<Checkbox color="primary" />}
                                            label="Si"
                                            labelPlacement="Si"
                                            name="discapacidad"

                                        />
                                    </Grid><br></br>
                                    <Grid className={classes.gridInput} item xs={12}>
                                        <p>Pdf de documento de identificación *</p>
                                        <Label htmlFor="contained-button-file">
                                            <Button
                                                fullwidth
                                                variant="contained"

                                                name="pdf"

                                                color="default"
                                                className={classes.button}
                                                startIcon={<CloudUploadIcon />}
                                            >
                                                Subir
                                            </Button>
                                        </Label>
                                        <input accept="image/*" className={classes.input} type="file" />
                                    </Grid><br></br>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </form>

            </AccordionDetails>
        </Accordion>
    )
}

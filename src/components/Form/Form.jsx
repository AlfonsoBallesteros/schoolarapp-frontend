
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './form.css'
import { fetchConToken } from '../../helpers/AuthFetch';
import Swal from 'sweetalert2';
import { Label } from 'recharts';
import { useMatriculaContext } from './../../context/Matricula/MatriculaContext';
import { useAuthContext } from './../../context/Auth/AuthContext';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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


export const Form = () => {

  const state = useMatriculaContext();
  const {value, setInputValue} = state;
  const { Authorization: { user } } = useAuthContext();
  //didMount
  useEffect(() => {
    setInputValue({
      ...state, nombre: user.firstName
    })
  }, [])


  const classes = useStyles();

  const handleChange = ({ target }) => {
    setInputValue({ ...value, [target.name]: target.value });
  };
  /* const {nombre, apellidos, tipoIdentificacion, numeroTelefono, numIdentificación, fechaNacimiento, 
       ciudadNacimiento,genero, numeroTelefono, nuCelular, comuna, barrio, estrato, dirección, ciudadResidencia, nacionalidad,
       rh, eps, numeroTelefono, enfermedad, Discapacidad} = value */
    
  const handleSubmit = async (e) => {
    console.log("handleSubmit", e)
    e.preventDefault();

    const {
      nombre: name,
      apellidos: surname,
      tipoIdentificacion: typeId,
      numIdentificación: documentId,
      ciudadNacimiento: cityExp,
      nuCelular: phoneNumber,
      numeroTelefono: telephonNumber,
      ciudadResidencia: city,
      nacionalidad: nacionality,
      barrio: neighborhood,
      dirección: address,
      genero: gender,
      rh: rh,
      eps: eps,
      estrato: stratus,
      enfermedad: disease,
      discapacidad: disability
    } = value;

    try {
      const res = await fetchConToken('people', {
        name,
        surname,
        typeId,
        documentId,
        cityExp,
        phoneNumber,
        telephonNumber,
        city,
        nacionality,
        neighborhood,
        address,
        gender,
        rh,
        eps,
        stratus,
        disease,
        disability

      }, 'POST');
      const resJson = await res.json();

      console.log(resJson)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Container>
        <h1>PASO 1: Datos del estudiante</h1>
        <form className="MuiGrid-grid-lg-9" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4}>
                <p>Ingrese o actualice los datos personales correspondientes al estudiante</p>
                <Grid className={classes.gridInput} item xs={12}>
                  <TextField
                    name="nombre"
                    fullWidth
                    id="nombre"
                    label="Nombres completos *"
                    variant="outlined"
                    onChange={handleChange}
                    value={value.nombre} />
                </Grid><br></br>
                <Grid className={classes.gridInput} item xs={12}>
                  <TextField
                    name="apellidos"
                    fullWidth
                    id="apellidos"
                    label="Apellidos completos *"
                    variant="outlined"
                    onChange={handleChange}
                    value={value.apellidos} />
                </Grid><br></br>
                <Grid className={classes.gridInput} item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Tipo de Documento</InputLabel>
                    <Select
                      name="tipoIdentificacion"
                      id="tipoIdentificacion"
                      value={10}
                      onChange={handleChange}
                      value={value.tipoIdentificacion}
                      label="Documento de Identidad"
                    >
                      <MenuItem value={10}>Registro Civil</MenuItem>
                      <MenuItem value={20}>Tarjeta de identidad</MenuItem>
                      <MenuItem value={30}>Cedula de ciudadania</MenuItem>

                    </Select>
                  </FormControl>
                </Grid><br></br>
                <Grid className={classes.gridInput} item xs={12}>
                  <TextField fullWidth
                    name="numIdentificación"
                    id="numIdentificación"
                    label="Número de identificación *"
                    variant="outlined"
                    onChange={handleChange}
                    value={value.numIdentificación} />
                </Grid><br></br>
                <Grid className={classes.gridInput} item xs={12}>
                  <TextField fullWidth
                    name="fechaNacimiento"
                    type="date"
                    id="fechaNacimiento"
                    label=""
                    variant="outlined"
                    onChange={handleChange}
                    value={value.fechaNacimiento} />
                </Grid><br></br>
                <Grid className={classes.gridInput} item xs={12}>
                  <TextField
                    name="ciudadNacimiento"
                    fullWidth id="ciudadNacimiento"
                    label="Ciudad de Nacimiento *"
                    variant="outlined"
                    onChange={handleChange}
                    value={value.ciudadNacimiento}
                  />
                </Grid><br></br>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid className={classes.gridInput} item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Género</InputLabel>
                    <Select
                      value={10}
                      label="Genero"
                      onChange={handleChange}
                      value={value.genero}
                      name="genero"
                      id="genero"
                    >
                      <MenuItem value={10}>Masculino</MenuItem>
                      <MenuItem value={20}>Femenino</MenuItem>
                    </Select>
                  </FormControl>
                </Grid><br></br>
                <Grid className={classes.gridInput} item xs={12}>
                  <TextField fullWidth
                    type="number"
                    id="numeroTelefono"
                    label="Número Telefónico *"
                    variant="outlined"
                    onChange={handleChange}
                    value={value.numeroTelefono}
                    name="numeroTelefono" />
                </Grid><br></br>
                <Grid className={classes.gridInput} item xs={12}>
                  <TextField fullWidth
                    type="number"
                    id="nuCelular"
                    label="Número de Celular *"
                    variant="outlined"
                    onChange={handleChange}
                    value={value.nuCelular}
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
                      onChange={handleChange}
                      value={value.comuna} /><br></br>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField fullWidth
                      id="barrio"
                      name="barrio"
                      label="Barrio *"
                      variant="outlined"
                      onChange={handleChange}
                      value={value.barrio} />
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
                    onChange={handleChange}
                    value={value.estrato} />
                </Grid><br></br>
                <Grid className={classes.gridInput} item xs={12}>
                  <TextField fullWidth
                    type="text"
                    id="outlined-basic"
                    name="dirección"
                    label="dirección *"
                    variant="outlined"
                    onChange={handleChange}
                    value={value.dirección} />
                </Grid><br></br>
                <Grid className={classes.gridInput} item xs={12}>
                  <TextField fullWidth
                    type="text"
                    id="ciudadResidencia"
                    label="Ciudad de Residencia *"
                    name="ciudadResidencia"
                    variant="outlined"
                    onChange={handleChange}
                    value={value.ciudadResidencia} />
                </Grid><br></br>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Grid className={classes.gridInput} item xs={12}>
                  <TextField fullWidth
                    id="nacionalidad"
                    label="Nacionalidad *"
                    name="nacionalidad"
                    variant="outlined"
                    onChange={handleChange}
                    value={value.nacionalidad} />
                </Grid><br></br>
                <Grid className={classes.gridInput} item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>RH *</InputLabel>
                    <Select
                      value={10}
                      name="rh"
                      label="Rh"
                      onChange={handleChange}
                      value={value.rh}
                    >
                      <MenuItem value={10}>A+</MenuItem>
                      <MenuItem value={20}>O+</MenuItem>
                      <MenuItem value={30}>AB -</MenuItem>
                      <MenuItem value={30}>AB +</MenuItem>

                    </Select>
                  </FormControl>
                </Grid><br></br>
                <Grid className={classes.gridInput} container item xs={12}>
                  <Grid item xs={6} className={classes.check}>
                    <p>Enfermedad *</p>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      label="Si"
                      name="enfermedad"
                      labelPlacement="Si"
                      onChange={handleChange}
                      value={value.enfermedad}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <p>Discapacidad *</p>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      label="Si"
                      labelPlacement="Si"
                      name="discapacidad"
                      onChange={handleChange}
                      value={value.discapacidad}
                    />
                  </Grid><br></br>
                  <Grid className={classes.gridInput} item xs={12}>
                    <p>Pdf de documento de identificación *</p>
                    <Label htmlFor="contained-button-file">
                      <Button
                        fullwidth
                        variant="contained"
                        value={value.pdf}
                        name="pdf"
                        onChange={handleChange}
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
      </Container>
    </>
  )
}

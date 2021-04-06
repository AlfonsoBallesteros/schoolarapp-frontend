import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Form } from './../../components/Form/Form';
import Container from '@material-ui/core/Container';
import DatosMatricula from '../../components/Form/DatosMatricula';
import Swal from 'sweetalert2';
import { useMatriculaContext } from '../../context/Matricula/MatriculaContext';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Ingrese o actualice los datos personales correspondientes al estudiante.', 'Información de la matrícula', 'Datos de Acudiente', 'Aceptación documento legal'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Form />
    case 1:
      return <DatosMatricula />
    case 2:
      return <StepThree/>
    case 3:
      return <StepFour/>
    default:
      return 'Unknown stepIndex';
  }
}

export const NuevoEstudiante = ({ loading }) => {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [errors, setErrors] = useState([]);
  const [secondErrors, setSecondErrors] = useState([]);
  const steps = getSteps();
  const state = useMatriculaContext();
  const { value: matriculaForm, secondStep } = state;


  const validateFormOne = () => {
    let isValid = true;
    const errors = [];
    if (!(/^\d+\S{7,20}$/).test(matriculaForm.numIdentificación)) {
      errors.push("El documento de itentidad no es valido ");
      isValid = false;
    }
    if (matriculaForm.nombre === '') {
      errors.push("El nombre no es valido ");
      isValid = false;
    }
    if (matriculaForm.tipoIdentificacion === '') {
      errors.push("Debe ingresar tipo de identificación ");
      isValid = false;
    }
    if (matriculaForm.ciudadNacimiento=== '') {
      errors.push("Debe ingresar la ciudad de nacimiento ");
      isValid = false;
    }
    if (matriculaForm.ciudadResidencia=== '') {
      errors.push("Debe ingresar la ciudad de residencia ");
      isValid = false;
    }
    if (!(/^\d+\S{7,20}$/).test(matriculaForm.nuCelular)){
      errors.push("Numero de celular inválido ");
      isValid = false;
    }
    if (matriculaForm.dirección=== '') {
      errors.push("Debe ingresar una dirección ");
      isValid = false;
    }
    if (matriculaForm.estrato=== '') {
      errors.push("Debe ingresar su estrato ");
      isValid = false;
    }
   
    setErrors(errors)
    return isValid;
  }

  const ValidateDatosMatricula = () =>{

    let valid = true;
    const secondErrors = [];

    if (secondStep.boletin === '') {
      secondErrors.push("Debe adjuntar el boletin");
      valid = false;
    }
    
    if (secondStep.grado === '') {
      secondErrors.push("Debe seleccionar grado");
      valid = false;
    }
    if (secondStep.jornada === '') {
      secondErrors.push("Debe seleccionar jornada");
      valid = false;
    }
    if (secondStep.documento === '') {
      secondErrors.push("Debe adjuntar el documento");
      valid = false;
    }
    setSecondErrors(secondErrors)
    return valid;
  }

  const validForm = () => {
    if(activeStep === 0){
      return validateFormOne()
    }
    if(activeStep === 1){
      return ValidateDatosMatricula();
    }
  }


  const handleNext = () => {
    if(validForm()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // }
  };

}

  useEffect(() => {
    if(errors.length > 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errors,
        confirmButtonColor: "#219653"
      })
    }
  }, [errors])

  useEffect(() => {
    if(secondErrors.length > 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: secondErrors,
        confirmButtonColor: "#219653"
      })
    }
  }, [secondErrors])

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container fixed>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
              </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'SIGUIENTE'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
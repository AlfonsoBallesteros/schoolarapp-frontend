import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Form } from './../../components/Form/Form';
import Container from '@material-ui/core/Container';
import DatosMatricula from '../../components/Form/DatosMatricula';
import MatriculaContext, { useMatriculaContext } from '../../context/Matricula/MatriculaContext';
import Matricula from './Matricula';


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
      return 'This is the bit I really care about!';
    case 3:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

export const NuevoEstudiante = ({ loading }) => {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

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
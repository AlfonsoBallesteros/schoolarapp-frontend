import React, { createContext, useContext, useState } from 'react';

const StateMatriculaContext = createContext();

const MatriculaContext = (props) => {

    const [value, setInputValue] = useState({
        nombre: '',
        apellidos: '',
        tipoIdentificacion: '',
        numIdentificación: '',
        fechaNacimiento: '',
        ciudadNacimiento: '',
        genero: '',
        nuTelefonico: '',
        nuCelular: '',
        comuna: '',
        barrio: '',
        estrato: '',
        dirección: '',
        ciudadResidencia: '',
        nacionalidad: '',
        rh: '',
        eps: '',
        numeroTelefono: '',
        enfermedad: false,
        discapacidad: false,
        pdf: '',
        SelectDoc: '',
        grado: '',
        jornada: '',
        observaciones: ''
    })

    const [secondStep, setSecondStep] = useState({
        grado: '',
        jornada: '',
        boletin:'',
        documento: ''
    })


    return (
        <StateMatriculaContext.Provider value={{value, setInputValue, secondStep, setSecondStep}}>
            {props.children}
        </StateMatriculaContext.Provider>
    )
}


export const useMatriculaContext = () => useContext(StateMatriculaContext);

export default MatriculaContext

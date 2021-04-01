import React, { createContext, useContext, useState } from 'react';

const StateMatriculaContext = createContext();

const MatriculaContext = (props) => {
    const [value, setInputValue] = useState({
        nombre: '',
        apellidos: '',
        tipoIdentificacion: '',
        numIdentificación: 1003801214,
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
        SelectDoc: ''
    });

    const [secondMatricula, setSecondMatricula] = useState({
        grado: '',
        jornada: '',
        observaciones: '',
    })

    return (
        <StateMatriculaContext.Provider value={{value, setInputValue, secondMatricula, setSecondMatricula}}>
            {props.children}
        </StateMatriculaContext.Provider>
    )
}

export const useMatriculaContext = () => useContext(StateMatriculaContext);

export default MatriculaContext

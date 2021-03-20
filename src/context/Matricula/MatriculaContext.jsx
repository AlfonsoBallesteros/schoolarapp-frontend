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
        rh: '6050191c3c492300152684a8',
        eps: '',
        numeroTelefono: '',
        enfermedad: false,
        discapacidad: false,
        pdf: '',
        SelectDoc: 20
    });

    return (
        <StateMatriculaContext.Provider value={{value, setInputValue}}>
            {props.children}
        </StateMatriculaContext.Provider>
    )
}

export const useMatriculaContext = () => useContext(StateMatriculaContext);

export default MatriculaContext

import React, { useEffect, useContext } from 'react'
import {fetchConToken} from '../../helpers/AuthFetch';
import { Context } from '../../context/Auth/AuthContext';
import { AuthTypes } from '../../types/AuthTypes';


export const Prueba = () => {

    const {dispatch} = useContext(Context);

    useEffect(() => {
        fetchConToken('account')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(resJson => {
                console.log(resJson)
            })
            .catch(error => {
                console.error(error)
            });
    }, [])

    const salir = () => {
        dispatch({
            type: AuthTypes.logout
        })
    }
    

    return (
        <div>
            <h1>dashboard</h1>

            <button onClick={salir}>Salir</button>
        </div>
    )
}

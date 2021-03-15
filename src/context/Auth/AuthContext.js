import React, { createContext, useReducer, useEffect } from 'react'
import { authReducer } from './AuthReducer';

export const Context = createContext();
const init = () => {
    return JSON.parse(localStorage.getItem('Authorization')) || {
        logged: false,
        token: ''
    }
}

export const AuthContext = ({ children }) => {

    const [Authorization, dispatch] = useReducer(authReducer, {}, init)
    useEffect(() => {
        localStorage.setItem('Authorization', JSON.stringify(Authorization))
    }, [Authorization])

    return (
        <Context.Provider value={{
            Authorization, 
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}

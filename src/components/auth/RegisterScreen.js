import React from 'react'
import { Link } from 'react-router-dom'
import { AuthScreen } from './AuthScreen'

export const RegisterScreen = () => {
    return (
        <div>
            <AuthScreen/> Register

            <Link to="/auth/login">Ya tienes cuenta?</Link>
        </div>
    )
}

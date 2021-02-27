import React from 'react'
import { Link } from 'react-router-dom'
import { AuthScreen } from './AuthScreen'

export const LoginScreen = () => {
    return (
        <div>
            <AuthScreen/> LOGIN
            <Link to="/auth/register">no tiene cuenta?</Link>
        </div>
    )
}

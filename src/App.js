import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { AuthContext } from './context/Auth/AuthContext'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#219653"
        }
    }
})

export const App = () => {

    return (
        <AuthContext>
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </AuthContext>

    )
}
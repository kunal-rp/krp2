import React from 'react'
import './App.css'
import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
} from '@material-ui/core/styles'
import LandingPage from './comp/Page/LandingPage'

const theme = responsiveFontSizes(
    createMuiTheme({
        typography: {
            fontFamily: ['Roboto'],
            h1: {},
        },
    })
)

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <LandingPage />
        </MuiThemeProvider>
    )
}

export default App

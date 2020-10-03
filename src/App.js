import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import LandingPage from './comp/Page/LandingPage'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <LandingPage />
        </ThemeProvider>
    )
}

export default App

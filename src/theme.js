import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

/*
Primaries

blue - #0B1D51
orange - #FE5D26
white - #FE5D26
*/

const theme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            primary: { main: '#0B1D51' },
        },
    })
)
export default theme

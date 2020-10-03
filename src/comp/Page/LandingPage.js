import React from 'react'
import Header from '../Header/Header'
import Page from './Page'
import { withTheme } from '@material-ui/core/styles'
import './LandingPage.scss'

class LandingPage extends React.Component {
    render() {
        var mainContent = () => {
            return (
                <div>
                    <h1 className="section">
                        I'm a software engineer @{' '}
                        <img src="gpay.png" id="gpay_img" />, specializing in
                        full stack development with a focus on backend
                        infastructure and microservices.
                    </h1>
                    <h1 className="section">
                        I'm always trying something new over at my{' '}
                        <a href="https://github.com/kunal-rp">GitHub</a>.
                    </h1>
                    <h1 className="section">
                        The rest of the time I spend obsessing over{' '}
                        <a href="https://www.youtube.com/user/FeelgHoodMusic">
                            Mechanical Keyboards
                        </a>
                        ,NBA stats, and{' '}
                        <a href="https://www.youtube.com/watch?v=P5k-4-OEuTk">
                            Augmented Reality
                        </a>
                        .
                    </h1>
                </div>
            )
        }

        return (
            <div>
                <Page>
                    <Header />
                    {mainContent()}
                </Page>
            </div>
        )
    }
}

export default withTheme(LandingPage)

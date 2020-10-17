import React from 'react'
import Link from '@material-ui/core/Link'
import Header from '../Header/Header'
import Page from './Page'
import { withTheme } from '@material-ui/core/styles'
import './LandingPage.scss'

class LandingPage extends React.Component {
    render() {
        var mainContent = () => {
            var createLink = (url, text) => {
                return (
                    <Link
                        color="primary"
                        underline="always"
                        variant="inherit"
                        href={url}
                    >
                        {text}
                    </Link>
                )
            }

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
                        {createLink('https://github.com/kunal-rp', 'GitHub')}.
                    </h1>
                    <h1 className="section">
                        The rest of the time I spend obsessing over{' '}
                        {createLink(
                            'https://www.reddit.com/r/MechanicalKeyboards',
                            'Mechanical Keyboards'
                        )}
                        ,NBA stats, and{' '}
                        {createLink(
                            'https://www.youtube.com/watch?v=P5k-4-OEuTk',
                            'Augmented Reality'
                        )}
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

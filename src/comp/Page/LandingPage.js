import React from 'react'
import Header from '../Header/Header'
import Page from './Page'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <Page>
                    <Header />
                    This is the landing page
                </Page>
            </div>
        )
    }
}

export default LandingPage

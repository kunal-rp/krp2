import React from 'react'
import './Page.scss'

class Page extends React.Component {
    render() {
        return <div id="page_main">{this.props.children}</div>
    }
}

export default Page

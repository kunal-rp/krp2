import React from 'react'
import { Container, Col, Row, Image, Toast } from 'react-bootstrap'
import Link from '@material-ui/core/Link'
import './Header.scss'

class Header extends React.Component {
    render() {
        var getLogo = () => {
            return <h3>KRP</h3>
        }

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

        var getNav = () => {
            return (
                <Container fluid>
                    <Row>
                        <Col>{createLink("https://twitter.com/krptxt", "Twitter")}</Col>
                        <Col>{createLink("https://www.instagram.com/krpimg", "Instagram")}</Col>
                    </Row>
                </Container>
            )
        }

        return (
            <Container alignItems="center" fluid id="header_main">
                <Row>
                    <Col md="8" sm="12">
                        {getLogo()}
                    </Col>
                    <Col md="4" sm="12">
                        {getNav()}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Header

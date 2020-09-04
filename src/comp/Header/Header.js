import React from 'react'
import { Container, Col, Row, Image, Toast } from 'react-bootstrap'
import './Header.scss'

class Header extends React.Component {
    render() {
        var getLogo = () => {
            return 'Kunal Purohit'
        }

        var getNav = () => {
            return (
                <Container fluid>
                    <Row>
                        <Col sm="4">Blog</Col>
                        <Col sm="4">Twitter</Col>
                        <Col sm="4">IG</Col>
                    </Row>
                </Container>
            )
        }

        return (
            <Container fluid id="header_main">
                <Row>
                    <Col sm="4">{getLogo()}</Col>
                    <Col sm={{ span: 4, offset: 4 }}>{getNav()}</Col>
                </Row>
            </Container>
        )
    }
}

export default Header

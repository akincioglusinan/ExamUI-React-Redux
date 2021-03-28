import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import AboutBody from './tools/AboutBody'

const About = () => {
    return (
        <div className="main-wrapper bg-secondary">
        <Container>
            <Row>
                <Col>
                    <Jumbotron className="my-5">
                       <AboutBody />
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default About

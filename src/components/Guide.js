import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import InfoBody from './tools/InfoBody'

const Guide = () => {
    return (
        <div className="main-wrapper bg-secondary">
        <Container>
            <Row>
                <Col>
                    <Jumbotron className="my-5">
                       <InfoBody />
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Guide

import React from 'react'
import { Container, Jumbotron, Row, Spinner } from 'react-bootstrap'

const SpinnerUI = () => {
    return (
        <Container className="d-flex justify-content-center"><Row>
        <Jumbotron className="my-5">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Jumbotron>
        </Row></Container>
    )
}

export default SpinnerUI
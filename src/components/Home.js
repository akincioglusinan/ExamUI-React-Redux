import React from 'react'
import Articles from './exam/Articles'
import '../assets/css/OverrideBootstrap.css'
import AlertInfo from './tools/AlertInfo'
import { Container, Row } from 'react-bootstrap'

const Home = () => {
    
    return (
        <div className="main-wrapper bg-secondary">
            <Container className="section pt-3">
            <Row><AlertInfo /></Row>
            <Articles />
            </Container>
        </div>
    )
}

export default Home

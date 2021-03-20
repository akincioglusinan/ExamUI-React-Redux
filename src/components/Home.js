import React from 'react'
import { Container } from 'react-bootstrap'
import Articles from './exam/Articles'
import '../assets/css/OverrideBootstrap.css'

const Home = () => {
    return (
        <div className="main-wrapper bg-secondary">
            <Container className="section">
                   <Articles /> 
            </Container>
        </div>
    )
}

export default Home

import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { register } from '../../actions/auth'
import AlertInfo from '../tools/AlertInfo'
import RegisterForm from './RegisterForm'

const Register = () => {
    const user = useSelector(state => state.auth)
    const message = useSelector(state => state.message)
    const dispatch = useDispatch()
    return (
        <>
            {user.isLoggedIn ? <Redirect to='/' /> :
                <div className="main-wrapper bg-secondary">
                    <Container className="section pt-3">
                        <AlertInfo />
                        <Card className="bg-light">
                            <Card.Body>
                                <RegisterForm {...message} onSubmit={(user) => { dispatch(register(user)) }} onHide={()=>{}} />
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            }
        </>
    )
}

export default Register

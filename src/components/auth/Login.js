import React from 'react'
import '../../assets/css/OverrideBootstrap.css'
import AlertInfo from '../tools/AlertInfo'
import { Card, Container } from 'react-bootstrap'
import LoginForm from './LoginForm'
import { login } from '../../actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

const Login = () => {
    const user = useSelector(state => state.auth)
    const message=useSelector(state=>state.message)
    const dispatch = useDispatch()
    return (
        <>
            {user.isLoggedIn ? <Redirect to='/' /> : 
             <div className="main-wrapper bg-secondary">
             <Container className="section pt-3">
                 <AlertInfo />
                 <Card className="bg-light"><Card.Body><LoginForm {...message} onHide={()=>{}} onSubmit={(email, password) => { dispatch(login(email, password)) }} /></Card.Body></Card>
             </Container>
         </div>
    }
        </>
    )
}

export default Login

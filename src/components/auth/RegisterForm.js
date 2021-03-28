import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearMessage } from '../../actions/message';

const RegisterForm = (props) => {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [pwdcheck, setPwdCheck] = useState("");
    const [user, setUser] = useState(
        {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    )

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const setPwd = (e) => {
        setPwdCheck(e.target.value);
    }

    const checkPwd = (e) => {
        e.preventDefault();
        setPwdCheck(e.target.value);
        user.password === pwdcheck ? setError('') : setError("Passwords are different!");
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (error === '') {
            props.onSubmit(user);
        }
    }

    const loginClick = () => {
        props.onHide();
        dispatch(clearMessage());
    }
    return (
        <>
            <br></br>
            <Form onSubmit={handleRegister}>
                <Form.Group as={Col}>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" name="name" value={user.name}
                        onChange={handleOnChange} />
                    {props.list && <Form.Label className="text-danger font-weight-bold">{props.list.Name}</Form.Label>}
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label >User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter User Name" name="username" value={user.username}
                        onChange={handleOnChange} />
                    {props.list && <Form.Label className="text-danger font-weight-bold">{props.list.UserName}</Form.Label>}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="email" value={user.email}
                        onChange={handleOnChange} />
                    {props.list && <Form.Label className="text-danger font-weight-bold">{props.list.Email}</Form.Label>}
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Password *</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" name="password" value={user.password}
                        onChange={handleOnChange} />
                    {props.list && <Form.Label className="text-danger font-weight-bold">{props.list.Password}</Form.Label>}
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Password Check *</Form.Label>
                    <Form.Control type="password" value={pwdcheck} placeholder="Text password again" name="passwordcheck"
                        onChange={setPwd} onBlur={checkPwd} />
                    {props.list && <Form.Label className="text-danger font-weight-bold">{props.list.Password}</Form.Label>}
                    {(error || props.message) && <div className="text-center">
                        <br /><Form.Label className="text-danger font-weight-bold">{error} {props.message}</Form.Label>
                    </div>}
                </Form.Group>
                <Form.Group className="text-right" ><Form.Label><Link to="/login" onClick={loginClick}>Login</Link></Form.Label></Form.Group>
                <Form.Group className="text-left" id="formGridCheckbox" >
                    <Form.Check type="checkbox" label="I agree the membership policy." />
                </Form.Group>
                <Form.Group className="justify-content-end">
                    <Button type="submit" className="btn btn-primary" block>Submit</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default RegisterForm

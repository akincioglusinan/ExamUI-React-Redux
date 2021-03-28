import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearMessage } from '../../actions/message';

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();


    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        props.onSubmit(email, password);

    }

    const registerClick = () => {
        props.onHide(true);
        dispatch(clearMessage());
    }
    return (
        <>
            <div>
                <br></br>
                <Form className="bg-light" onSubmit={handleLogin} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" name="email"
                            value={email}
                            onChange={onChangeEmail}
                        />
                        <Form.Text className="text-muted">
                            Your email address does never share any other platforms.
    </Form.Text>
                        {props.list && <Form.Label className="text-danger font-weight-bold">{props.list.Email}</Form.Label>}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password"
                            value={password}
                            onChange={onChangePassword}
                        />
                        {props.list && <Form.Label className="text-danger font-weight-bold">{props.list.Password}</Form.Label>}
                        {props.message && <Form.Label className="text-danger font-weight-bold">{props.message}</Form.Label>}
                    </Form.Group>
                    <Form.Group className="text-right"> <Form.Label ><Link to="/register" onClick={registerClick}>Register</Link></Form.Label>  </Form.Group>
                    <Form.Group className="text-right">
                        <Button type="submit" className="btn btn-primary" block>
                            Submit
                </Button>
                    </Form.Group>

                </Form>
            </div>
        </>
    )
}

export default LoginForm

import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



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
        if (email && password) {
            setError("");
            props.onSubmit(email, password);
        }
        else {
            setError("Please fill in the blanks!");
        }
    }
    return (
        <>
        <div>
        <br></br>
            <Form className="bg-light" onSubmit={handleLogin} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"
              value={email}
              onChange={onChangeEmail}
              validations="required"/>
                    <Form.Text className="text-muted">
                        Your email address does never share any other platforms.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"
              value={password}
              onChange={onChangePassword}
              validations="required" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group className="justify-content-end">
                    <Form.Label className="text-danger"><b>{error ? error : props.message }</b></Form.Label>
                <Button type="submit" className="btn btn-primary" onClick={props.onHide} block>
                    Submit
                </Button>
                </Form.Group>
               
            </Form>
            </div>
        </>
    )
}

export default LoginForm

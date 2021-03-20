import React,{ useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'


const RegisterForm = (props) => {

    const [error, setError] = useState("");
    const[pwdcheck, setPwdCheck]=useState("");
    const [user, setUser] = useState(
        {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    )

    const handleOnChange = (e) => {
        //console.log(typeof e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        //console.log(e.target.value, e.target.name, article)
    }

    const setPwd=(e)=>{
        setPwdCheck(e.target.value);
    }

    const checkPwd = (e) => {
        e.preventDefault();
        setPwdCheck(e.target.value);
        user.password === pwdcheck ? setError('') : setError("Passwords are different!");
        console.log(error);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (error === '') {
            props.onSubmit(user);
        }
        else {
            alert(error);
        }
    }
    
    return (
        <>
            <br></br>
            <Form onSubmit={handleRegister}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" name="name" value={user.name}
                            onChange={handleOnChange} required />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label >User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" name="username" value={user.username}
                            onChange={handleOnChange} required />
                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={user.email}
                            onChange={handleOnChange} required />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password *</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" name="password" value={user.password}
                            onChange={handleOnChange} required />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password Check *</Form.Label>
                        <Form.Control type="password" value={pwdcheck} placeholder="Text password again" name="passwordcheck"
                            onChange={setPwd} onBlur={checkPwd} required />
                        <div className="text-center">
                        <Form.Label className="text-danger"><b>{error ? error : props.message }</b></Form.Label>
                        </div>
                    </Form.Group>
                </Form.Row>
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I approve register aggreement." />
                </Form.Group>
                <Form.Group className="justify-content-end">

                    <Button type="submit" className="btn btn-primary" block>
                        Submit
                </Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default RegisterForm

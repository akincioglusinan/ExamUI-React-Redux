import React from 'react'
import { Button, Modal, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../actions/auth';
import { clearMessage } from '../../actions/message';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const MyVerticallyCenteredModal = (props) => {
  const message=useSelector(state => state.message);
  const dispatch = useDispatch();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="">
          Login
          </Modal.Title>
      </Modal.Header>
      <Modal.Body border="light" className="bg-light">
        <LoginForm {...message} onSubmit={(email, password)=>{dispatch(login(email, password))}} onHide={props.onHide}/>
      </Modal.Body>
      <Modal.Footer>
        <Button size="sm" className="btn btn-danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const MyVerticallyCenteredModal2 = (props) => {
  const message=useSelector(state => state.message);
  const dispatch = useDispatch();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="">
          Register
          </Modal.Title>
      </Modal.Header>
      <Modal.Body border="light" className="bg-light">
        <RegisterForm {...message} onSubmit={(user)=>{dispatch(register(user))}} onHide={props.onHide}/>
      </Modal.Body>
      <Modal.Footer>
        <Button size="sm" className="btn btn-danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const AuthModal = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <>
      <ToggleButtonGroup type="radio" name="options">
        <ToggleButton variant="outline-primary" onClick={() => {setModalShow(true); dispatch(clearMessage())}}>Login</ToggleButton>
        <ToggleButton variant="outline-primary" onClick={() => {setModalShow2(true); dispatch(clearMessage())}}>Register</ToggleButton>
      </ToggleButtonGroup>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
    </>
  );
}

export default AuthModal
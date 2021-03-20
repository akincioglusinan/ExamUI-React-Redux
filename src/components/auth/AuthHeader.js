
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Dropdown, SplitButton, NavDropdown } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import AuthModal from './AuthModal';

const AuthHeader = () => {
    const user = useSelector(state => state.auth);
    const [show, setShow] = useState(false);
    const showDropdown = () => {
        setShow(!show);
    }
    const hideDropdown = () => {
        setShow(false);
    }
    const setUserCircle=()=>{
        return <>
        <PersonCircle color="royalblue" size={25} /> { user.user.name}
        </>
    }

    const dispatch = useDispatch();

    return (
        <>{user.isLoggedIn
            ?
            <Form inline className="ml-2 mr-2">
                <SplitButton
                    className="bi bi-person-circle"
                    menuAlign={{ lg: 'right' }}
                    title={setUserCircle()}
                    variant="outline-primary"
                    id="collasible-nav-dropdown" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown} >
                    <Dropdown.Item as={Link} to="myexams" >My Exams</Dropdown.Item>
                    <Dropdown.Divider />
                    <NavDropdown.Item onClick={() => { dispatch(logout()); }}>Logout</NavDropdown.Item>
                </SplitButton>

            </Form>
            :
            <Form inline className="ml-2">
                <AuthModal />
            </Form>

        }

        </>
    )
}

export default AuthHeader

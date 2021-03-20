import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthHeader from './auth/AuthHeader';

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg" >
                <Navbar.Brand href="/"> <h1>Create Exam</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                       <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/exams">Exams</Link>
                    </Nav>
                    <AuthHeader />
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header

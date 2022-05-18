import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectUsername } from "../Store/PosterSlice";

export default function NavBar() {
    const username = useSelector(selectUsername);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Twitter Clone</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form className="me-auto">
                        <FormControl type="search" placeholder="Search users" className="me-2" aria-label="Search"/>
                    </Form>
                    {username !== "" ? 
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/feed">Feed</Nav.Link>
                        <Nav.Link as={Link} to="/poster/david">Profile</Nav.Link>
                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    </Nav> :
                    <Nav>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>}
                    <Nav className="d-flex">
                        <Nav.Link href="https://github.com/davidbcnguyen/TwitterClone">Source Code</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
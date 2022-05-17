import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Twitter Clone</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form className="me-auto">
                        <FormControl type="search" placeholder="Search users" className="me-2" aria-label="Search"/>
                    </Form>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/feed">Feed</Nav.Link>
                        <Nav.Link>Profile</Nav.Link>
                        <Nav.Link>Logout</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        <Nav.Link href="https://github.com/davidbcnguyen/TwitterClone">Source Code</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
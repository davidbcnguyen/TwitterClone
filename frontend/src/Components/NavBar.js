import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectUsername } from "../Store/PosterSlice";
import SearchPosterBar from "./SearchPosterBar";

export default function NavBar() {
    const username = useSelector(selectUsername);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="mb-5">
            <Container>
                <Navbar.Brand as={Link} to="/">Twitter Clone</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <SearchPosterBar />
                    {username !== "" ? 
                    <Nav>
                        <Nav.Link as={Link} to="/feed">Feed</Nav.Link>
                        <NavDropdown title={username} id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={`/poster/${username}`}><i className="bi bi-person-circle"></i> Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogout}><i className="bi bi-box-arrow-right"></i> Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> :
                    <Nav>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    </Nav>}
                    <Nav className="d-flex">
                        <Nav.Link href="https://github.com/davidbcnguyen/TwitterClone"><i className="bi bi-github"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
import React, { useContext } from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import { AuthenticationContext } from '../services/auth.context';

const NavBar = () => {
    const { handleUserLogout } = useContext(AuthenticationContext);
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/libros">La Librería de la tup</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/libros">Inicio</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/libros/agregar-libro" replace={true}>Agregar libro</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button onClick={handleUserLogout}>Cerrar sesión</Button>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar
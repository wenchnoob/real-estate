import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

const NavBar: any = () => {
    return (
        <Navbar bg="light" expand="lg">
            {/* <Container>
                <Navbar.Brand href="/" className="mr-5 ml-0">Hector's Real Estate</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/houses">
                            <Nav.Link>Houses</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/admin">
                            <Nav.Link>Admin</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container> */}
        </Navbar>
    );
}

export default NavBar;
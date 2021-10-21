import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import styled from 'styled-components';
import Link from 'next/link';

export const StyledLink = styled.a`
    margin-right: 10px;
    margin-left: 10px;
    text-decoration: none;
    color: grey;
    padding: 5px;
`;

const NavBar: any = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="mr-5 ml-0">Hector&apos;s Real Estate</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <StyledLink href="/" >Home</StyledLink>
                        <StyledLink href="/houses">Houses</StyledLink>
                        <StyledLink href="/admin">Admin</StyledLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
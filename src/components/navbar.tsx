import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from 'styled-components';
import Link from 'next/link';

export const FixedTopDiv = styled.div`
    top: 0px;
    position: fixed;
    width: 100%;
    z-index: 3;
`;

export const Ceiling = styled.div`
    top: 0px;
    margin-bottom: 5rem;
`;

export const StyledLink = styled.a`
    margin-right: 10px;
    margin-left: 10px;
    text-decoration: none;
    color: grey;
    padding: 5px;
`;

const NavBar: any = () => {
    return (
        <>
            <Ceiling />
            <FixedTopDiv>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/" className="mr-5 ml-0">Hector&apos;s Real Estate</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link href='/' passHref>
                                    <StyledLink>Home</StyledLink>
                                </Link>
                                <Link href='/houses' passHref>
                                    <StyledLink>Houses</StyledLink>
                                </Link>
                                <Link href='/admin' passHref>
                                    <StyledLink>Admin</StyledLink>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </FixedTopDiv>
        </>
    );
}

export default NavBar;
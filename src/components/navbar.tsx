import React from 'react';
import { useState } from 'react';
import { Modal, Container, Navbar, Nav, Button, Col, Row } from "react-bootstrap";
import styled from 'styled-components';
import Link from 'next/link';

export const FixedTopDiv = styled.div`
    top: 0px;
    position: fixed;
    width: 100%;
    z-index: 3;
`;

export const StyledLink = styled.a`
    margin-right: 10px;
    margin-left: 10px;
    text-decoration: none;
    color: grey;
    padding: 5px;
`;

export const StyledButton = styled(Button)`
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;

    &:hover {
        background-color: transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;        
    };

    &:focus {
        background-color: transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
        box-shadow: none;
    };
`;

export const StyledRow = styled(Row)`
    margin: 10px 3rem;
`;

const NavBar: any = () => {

    const [show, setShow] = useState(false);

    return (
        <>
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
                                <Link href='/contact' passHref>
                                    <StyledLink>Contact me</StyledLink>
                                </Link>
                                <StyledButton variant='outlin-light' onClick={() => setShow(true)}>
                                    <StyledLink>Log in/ Sign up</StyledLink>
                                </StyledButton>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </FixedTopDiv>
            <LoginSignupModal show={show} setShow={setShow} />
        </>
    );
}


const LoginSignupModal = ({ show, setShow }: { show: boolean, setShow: (arg0: boolean) => void }) => {

    const handleClose = () => { setShow(false) };

    return (
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Log in/Sign up</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{display: 'grid', gridTemplateColumns: '1fr'}}>
                <StyledRow>
                    <Button>
                        Log in with Email/Password
                    </Button>
                </StyledRow>
                <StyledRow>
                    <Button>
                        Log in with Google
                    </Button>
                </StyledRow>
                <StyledRow>
                    <Button>
                        Sign Up
                    </Button>
                </StyledRow>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NavBar;
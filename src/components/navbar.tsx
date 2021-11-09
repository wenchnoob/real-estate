import React from 'react';
import { useState } from 'react';
import { Modal, Container, Navbar, Nav, Button, Form, Row } from "react-bootstrap";
import { useAuth } from "../scripts/auth";
import styled from 'styled-components';
import Link from 'next/link';
import { User } from '@firebase/auth';


export const FixedTopDiv = styled.div`
    top: 0px;
    position: fixed;
    width: 100%;
    z-index: 3;
    background-color: #052f69;
`;

export const StyledLink = styled.a`
    margin-right: 10px;
    margin-left: 10px;
    text-decoration: none;
    color: white5;
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

    const { uid, roles, signout } = useAuth();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const isAdmin = roles.includes('admin');

    return (
        <>
            <FixedTopDiv>
                <Navbar style={{ backgroundColor: '#052f69' }} bg='light' expand="lg">
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
                                {isAdmin ? <Link href='/admin' passHref>
                                    <StyledLink>Admin</StyledLink>
                                </Link> : <></>}
                                <Link href='/contact' passHref>
                                    <StyledLink>Contact me</StyledLink>
                                </Link>
                                {uid ? <></> : <StyledButton variant='s' onClick={handleShow}>
                                    <StyledLink>Log in/ Sign up</StyledLink>
                                </StyledButton>}
                                {uid ? <StyledButton variant='s' onClick={signout}>
                                    <StyledLink>Sign Out</StyledLink>
                                </StyledButton> : <></>}
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

    const [loginVisible, setLoginVisible] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const handleClose = () => { setShow(false) };

    const showLogin = () => {
        handleClose();
        setSignUp(false);
        setLoginVisible(true);
    };

    const showSignUp = () => {
        handleClose();
        setSignUp(true);
        setLoginVisible(true);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Log in/Sign up</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
                    <StyledRow>
                        <Button onClick={showLogin}>
                            Log in with Email/Password
                        </Button>
                    </StyledRow>
                    <StyledRow>
                        <Button>
                            Log in with Google
                        </Button>
                    </StyledRow>
                    <StyledRow>
                        <Button onClick={showSignUp}>
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
            <LoginModal loginVisible={loginVisible} setLoginVisible={setLoginVisible} signUp={signUp} />
        </>
    );
}

const LoginModal = ({ loginVisible, setLoginVisible, signUp = false }: { loginVisible: boolean, setLoginVisible: (arg0: boolean) => void, signUp?: boolean }) => {

    const { signUpWithEmail, signInWithEmail, setPermissions } = useAuth();

    const handleClose = () => { setLoginVisible(false) }
    const [username, setUsername] = useState('');
    const onUsernameChange = ({ target: { value } }: { target: any }) => {
        setUsername(value);
    };

    const [password, setPassword] = useState('');
    const onPasswordChange = ({ target: { value } }: { target: any }) => {
        setPassword(value);
    };

    const handleSubmit = async () => {
        const user: User = await signUp ? signUpWithEmail(username, password) : signInWithEmail(username, password);
        handleClose();
    };




    return (
        <Modal show={loginVisible} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{signUp ? 'Sign up' : 'Log in'}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
                <Form.Group className="mb-3" controlId="formGridUsername" onChange={onUsernameChange}>
                    <Form.Label>Username/Email</Form.Label>
                    <Form.Control placeholder="Username/Email" value={username} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPassword" onChange={onPasswordChange}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Password" value={password} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal >
    );
}

export default NavBar;
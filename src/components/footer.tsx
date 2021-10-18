import React from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";


const Footer = () => {
    return (
        <Container fluid className="bg-light fixed-bottom">
            <Row className="">
                <Col className={"text-center"}>
                    All rights reserved Wenchy Tech LLC &copy; 2021
                </Col>
            </Row>
        </Container>
    );
}

Footer.propTypes = {

};

export default Footer;
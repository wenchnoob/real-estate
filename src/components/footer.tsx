import React from 'react';
import {Col, Container, Row} from "react-bootstrap";


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

export default Footer;
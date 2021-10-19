import React from 'react';
import {Col, Container, Row} from "react-bootstrap";


const Footer = () => {
    return (
        <>
            <div className="mt-lg-5"></div>
        <Container fluid className="bg-light fixed-bottom mt-lg">
            <Row>
                <Col className={"text-center"}>
                    All rights reserved Wenchy Tech LLC &copy; 2021
                </Col>
            </Row>
        </Container>
            </>
    );
}

export default Footer;
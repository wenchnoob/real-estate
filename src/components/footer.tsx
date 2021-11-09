import React from 'react';
import { Col, Row } from "react-bootstrap";
import styled from 'styled-components';

export const FooterDiv = styled.div`
    left: 0px;
    bottom: 0px;
    position: relative;
    width: 100%;
    background: white;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
`;


const Footer = () => {
    return (
        <FooterDiv>
            <Row>
                <Col className={"text-center"}>
                    All rights reserved Wenchy Tech LLC &copy; 2021
                </Col>
            </Row>
        </FooterDiv>
    );
}

export default Footer;
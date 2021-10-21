import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import styled from 'styled-components';

export const FooterDiv = styled.div`
    bottom: 0px;
    position: fixed;
    width: 100%;
    background: white;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
`;

export const Floor = styled.div`
    bottom: 0px;
    margin-top: 1rem;
    height: 40px;
`;

const Footer = () => {
    return (
        <>
            <Floor />
            <FooterDiv>
                <Row>
                    <Col className={"text-center"}>
                        All rights reserved Wenchy Tech LLC &copy; 2021
                    </Col>
                </Row>
            </FooterDiv>
        </>
    );
}

export default Footer;
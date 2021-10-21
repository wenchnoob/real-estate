import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styled from 'styled-components';

export const FooterDiv = styled.div`

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
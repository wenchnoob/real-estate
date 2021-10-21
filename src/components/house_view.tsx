import styled from "styled-components";
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import React from "react";


export const StyledContainer = styled(Container)`
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 10px;
`;

export const StyledCard = styled(Card)`
    min-width: 15rem;
    margin: 10px;
`;


const HouseView = ({ isAdmin } : {
    isAdmin?: boolean;
}) => {

    let house = 0;
    return (
        <StyledContainer>
            <CardGroup>
                <Row>
                    {
                        (() => {
                            const cols = [];
                            for (var i = 0; i < 15; i++) cols.push(
                                <Col>
                                    <StyledCard>
                                        <Card.Img variant="top" src="Capture0.png"/>
                                        <Card.Body>
                                            <Card.Title>House {house++ + 1}</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Maxime mollitia,
                                                molestiae quas vel sint commodi repudiandae consequuntur
                                                voluptatum laborum
                                            </Card.Text>
                                            {
                                                isAdmin ?
                                                <>
                                                    <Card.Link href="#">View</Card.Link>
                                                    <Card.Link href="#">Edit</Card.Link>
                                                    <Card.Link href="#">Delete</Card.Link>
                                                </>
                                                :
                                                <Card.Link href="#">View More</Card.Link>
                                            }
                                        </Card.Body>
                                    </StyledCard>
                                </Col>
                            );
                            return cols;
                        })()
                    }


                </Row>
            </CardGroup>
        </StyledContainer>
    );
}

export default HouseView;
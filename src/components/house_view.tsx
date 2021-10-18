import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";

const HouseView = () => {
    let house = 0;
    return (
        <>
            <NavBar/>
            <Container>
                {
                    (() => {
                        const rows = [];
                        for (var i = 0; i < 3; i++) rows.push(
                            <Row className="my-5">
                                <CardGroup>
                                    {
                                        (() => {
                                            const cols = [];
                                            for (var i = 0; i < 5; i++) cols.push(
                                                <Col>
                                                    <Card style={{width: '15rem'}}>
                                                        <Card.Img variant="top" src="Capture0.png"/>
                                                        <Card.Body>
                                                            <Card.Title>House {house++ + 1}</Card.Title>
                                                            <Card.Text>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                Maxime mollitia,
                                                                molestiae quas vel sint commodi repudiandae consequuntur
                                                                voluptatum laborum
                                                            </Card.Text>
                                                            <Card.Link href="#">Link A</Card.Link>
                                                            <Card.Link href="#">Link B</Card.Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            );
                                            return cols;
                                        })()
                                    }
                                </CardGroup>
                            </Row>
                        );
                        return rows;
                    })()
                }
            </Container>
            <Footer/>
        </>
    );
}

HouseView.propTypes =
    {
    }

export default HouseView;
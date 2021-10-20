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
                <CardGroup>
                    <Row xs={1} sm={1} md={3} lg={4} xl={5} className="my-5 align-content-center">

                        {
                            (() => {
                                const cols = [];
                                for (var i = 0; i < 15; i++) cols.push(
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


                    </Row>
                </CardGroup>
            </Container>
            <Footer/>
        </>
    );
}

HouseView.propTypes =
    {}

export default HouseView;
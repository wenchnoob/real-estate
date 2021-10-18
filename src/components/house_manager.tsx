import React from "react";
import {Button, Container, Row, Col, Card} from "react-bootstrap";

const HouseManager = () => {
    let house = 0;
    return (
        <>
            <Container>
                <Row className="mt-5 row-cols-6 flex-row-reverse" >
                    <Button>Add House</Button>
                </Row>
                {
                    (() => {
                        const cols = [];
                        for (var i = 0; i < 30; i++) cols.push(
                            <Row className="my-3">
                                <Col>
                                    House {house++ + 1}
                                </Col>
                                <Col>
                                    <Button>Remove House</Button>
                                </Col>
                            </Row>
                        );
                        return cols;
                    })()
                }
            </Container>
        </>
    );
}

export default HouseManager;
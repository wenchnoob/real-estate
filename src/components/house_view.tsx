import styled from "styled-components";
import { Card, CardGroup, Col, Container, Row, Button } from "react-bootstrap";
import React from "react";
import { useEffect, useState } from "react";
import { AddListingModal } from "./add_listing_modal";
import { getDatabase, ref, get, child } from 'firebase/database';
import app from '../scripts/firebase';



export const StyledContainer = styled(Container)`
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 10px;
`;

export const StyledCard = styled(Card)`
    min-width: 15rem;
    margin: 10px;
`;


const HouseView = ({ isAdmin }: {
    isAdmin?: boolean;
}) => {

    const table = 'houses/';
    const db = getDatabase(app);
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        get(child(ref(db), 'houses/')).then((snapshot) => {
            if (snapshot.exists()) {
                let temp = [];
                let data = snapshot.val();
                var keys = Object.keys(data);
                keys.forEach(k => temp.push(data[k]));
                console.log(houses.length);
                console.log(temp.length);
                console.log(houses.length != temp.length);
                if (houses.length != temp.length) setHouses(temp);
                
                console.log(temp);
                console.log('houses', houses);
            }
        });
        return () => {}
    }, [])

    let house = 0;
    return (
        <>
            <StyledContainer>

                {isAdmin ?
                    <div>
                        <AddListingModal />
                    </div>
                    :
                    <></>
                }
                <CardGroup>
                    <Row>
                    {
                        (() => {
                            const cols = [];
                            for (var i = 0; i < houses.length; i++) cols.push(
                                <Col>
                                    <StyledCard>
                                        <Card.Img variant="top" src={houses[i]['image']}/>
                                        <Card.Body>
                                            <Card.Title>House {houses[i]['house']}</Card.Title>
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
        </>
    );
}

export default HouseView;
import styled from "styled-components";
import { Card, CardGroup, Col, Container, Row, Button } from "react-bootstrap";
import React from "react";
import { useEffect, useState } from "react";
import { AddListingModal } from "./add_listing_modal";
import { getDatabase, ref, get, set, child } from 'firebase/database';
import app from '../scripts/firebase';

export const StyledCard = styled(Card)`
    min-width: 15rem;
    margin: 10px;
`;


export interface HouseCardInterface {
    isAdmin: boolean,
    id: string,
    img: string,
    address: string,
    address2: string,
    city: string,
    state: string,
    zip: string,
};

const HouseCard = ({isAdmin, id, img, address, address2, city, state, zip}: HouseCardInterface) => {
    const table = 'houses/';
    const db = getDatabase(app);

    return (
        <StyledCard>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
            <Card.Title>{address}, {address2}</Card.Title>
            <Card.Text>
                {city}, {state}, {zip}
            </Card.Text>
            {
                isAdmin ?
                <>
                    <Button style={{marginLeft: 10, marginRight: 10,}} >View</Button>
                    <Button style={{marginLeft: 10, marginRight: 10,}} >Edit</Button>
                    <Button style={{marginLeft: 10, marginRight: 10,}} onClick={() => {
                        set(ref(db, table+id), null).then(() => {window.location.reload()});
                    }
                    }>Delete</Button>
                </>
                :
                <Button href="#">View More</Button>
            }
        </Card.Body>
    </StyledCard>
    );
}

export default HouseCard;
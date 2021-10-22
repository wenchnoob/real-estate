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


const HouseCard = ({isAdmin, id, img, address, address2, city, state, zip, onChange}) => {
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
                    <Card.Link href="#">View</Card.Link>
                    <Card.Link href="#">Edit</Card.Link>
                    <Button onClick={() => {
                        set(ref(db, table+id), null);
                        onChange();
                    }
                    }>Delete</Button>
                </>
                :
                <Card.Link href="#">View More</Card.Link>
            }
        </Card.Body>
    </StyledCard>
    );
}

export default HouseCard;
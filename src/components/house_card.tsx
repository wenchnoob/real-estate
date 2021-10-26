import styled from "styled-components";
import { Card, CardGroup, Col, Container, Row, Button } from "react-bootstrap";
import React from "react";
import { getDatabase, ref, set} from 'firebase/database';
import app from '../scripts/firebase';

export const StyledCard = styled(Card)`
    min-width: 15rem;
    margin: 10px;

    &:hover {
        transform: scale(1.5);
        z-index: 99
    };
`;


export interface HouseCardInterface {
    isAdmin: boolean,
    img?: string,
    id: string,
    main_img: string,
    images: string[],
    address: string,
    address2: string,
    city: string,
    state: string,
    zip: string,
};

const HouseCard = ({isAdmin, id, img, main_img, address, address2, city, state, zip}: HouseCardInterface) => {
    const table = 'houses/';
    const db = getDatabase(app);

    return (
        <StyledCard>
        <Card.Img variant="top" src={img || main_img}/>
        <Card.Body>
            <Card.Title>{address}, {address2}</Card.Title>
            <Card.Text>
                {city}, {state}, {zip}
            </Card.Text>
            {
                isAdmin ?
                <>
                    <Button style={{marginLeft: 10, marginRight: 10,}} onClick={() => {
                    window.location.replace(`/house/${id}`);
                }}>View</Button>
                    <Button style={{marginLeft: 10, marginRight: 10,}} onClick={() => {window.location.replace('/admin?edit='+id)}}>Edit</Button>
                    <Button style={{marginLeft: 10, marginRight: 10,}} onClick={() => {
                        set(ref(db, table+id), null).then(() => {window.location.reload()});
                    }
                    }>Delete</Button>
                </>
                :
                <Button onClick={() => {
                    window.location.replace(`/house/${id}`);
                }}>View More</Button>
            }
        </Card.Body>
    </StyledCard>
    );
}

export default HouseCard;
import React from "react";
import { useState, useEffect } from "react";
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import { useRouter } from "next/router";
import ScrollablePictures from '../../src/components/scrollable_pics';
import { HouseProps } from '../../src/scripts/types';
import { getHouse } from '../../src/scripts/data';


const House = () => {
    const router = useRouter();
    const id = router.query['id'];
    const [house, setHouse] = useState({} as HouseProps);

    useEffect(() => {getHouse(id as string).then((hs) => setHouse(hs));
    }, [id]);

    return (
        <Container style={{
            marginTop: '5rem',
            width: '50%',
            height: '50%',
        }}>
            {house.images ? <ScrollablePictures images={house.images}/> : <span>No Images</span>}
            <div>
                <span>{house.address}, {house.address2}</span>
                <span>{house.city}, {house.state}, {house.zip}</span>
            </div>
        </Container>
    );
}

export default House;
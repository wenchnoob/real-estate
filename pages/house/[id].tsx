import React from "react";
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import { useRouter } from "next/router";
import ScrollablePictures from '../../src/components/scrollable_pics';

import useSWR from 'swr';

const House = () => {
    const router = useRouter();
    const id = router.query['id'];
    const { data, error } = useSWR('/api/house/' + id, (url) => fetch(url).then((res) => res.json()));
    if (error) return <div>Server Error</div>
    if (!data) return <></>
    const { house } = data;

    return (
        <Container style={{
            marginTop: '5rem',
            width: '50%',
            height: '50%',
        }}>
            <ScrollablePictures images={house.images}/>
            <div>
                <span>{house.address}, {house.address2}</span>
                <span>{house.city}, {house.state}, {house.zip}</span>
            </div>
        </Container>
    );
}

export default House;
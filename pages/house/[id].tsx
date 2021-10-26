import React from "react";
import { useState, useEffect } from "react";
import { getDatabase, ref, get, set, child } from 'firebase/database';
import app from '../../src/scripts/firebase';
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import HouseCard from '../../src/components/house_card';
import { useRouter } from "next/router";

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
            width: '50%',
            height: '50%',
        }}>
            <Row>
                <Col>
                    <HouseCard isAdmin={false} {...house} />
                </Col>
            </Row>
        </Container>
    );
}

export default House;
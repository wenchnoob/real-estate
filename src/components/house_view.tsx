import styled from "styled-components";
import { Card, CardGroup, Col, Container, Row, Button } from "react-bootstrap";
import React from "react";
import { useEffect, useState } from "react";
import { AddListingModal } from "./add_listing_modal";
import { getDatabase, ref, get, set, child } from 'firebase/database';
import app from '../scripts/firebase';
import HouseCard from "./house_card";



export const StyledContainer = styled(Container)`
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 10px;
`;


const HouseView = ({ isAdmin }: {
    isAdmin?: boolean;
}) => {

    const table = 'houses/';
    const db = getDatabase(app);
    const [houses, setHouses] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const reload = () => {
        setRefresh(!refresh);
    }

    useEffect(() => {
        get(child(ref(db), 'houses/')).then((snapshot) => {
            if (snapshot.exists()) {
                let temp: any[] = [];
                let data = snapshot.val();
                var keys = Object.keys(data);
                keys.forEach(k => temp.push(data[k]));
                console.log(houses.length);
                console.log(temp.length);
                console.log(houses.length != temp.length);
                if (houses.length != temp.length) setHouses(temp as never[]);
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
                        <AddListingModal/>
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
                                   <HouseCard isAdmin {...houses[i]} onChange={() => setRefresh(!refresh)}/>
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
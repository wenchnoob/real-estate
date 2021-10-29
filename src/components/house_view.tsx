import styled from "styled-components";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { AddListingModal } from "./add_listing_modal";
import HouseCard from "./house_card";
import { getAllHouses } from '../scripts/data';
import { House } from '../scripts/types';
import { getHouse } from '../scripts/data';


export const StyledContainer = styled(Container)`
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 10px;
`;


const HouseView = ({ isAdmin = false, edit = undefined }: {
    isAdmin?: boolean;
    edit?: string;
}) => {
    const [houses, setHouses] = useState([] as House[]);
    const [show, setShow] = useState(false);
    const [id, setId] = useState('');

    useEffect(() => {getAllHouses().then((hs) => setHouses(hs));
    }, []);

    return (
        <>
            <StyledContainer>

                {isAdmin ?
                    <div>
                        <AddListingModal resetId={setId} getId={() => id} show={show} setShow={(b: boolean) => setShow(b)}/>
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
                                        <HouseCard key={i} isAdmin={isAdmin || false} {...houses[i]} setId={setId} showModal={() => setShow(true)}/>
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
import styled from "styled-components";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { AddListingModal } from "./add_listing_modal";
import HouseCard from "./house_card";
import { getAllHouses } from '../scripts/data';
import { House } from '../scripts/types';

export const StyledContainer = styled(Container)`
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 10px;
`;


const HouseView = ({ isAdmin, edit }: {
    isAdmin?: boolean;
    edit?: string;
}) => {
    const [houses, setHouses] = useState([] as House[]);

    useEffect(() => {getAllHouses().then((hs) => setHouses(hs));
    }, []);

    return (
        <>
            <StyledContainer>

                {isAdmin ?
                    <div>
                        <AddListingModal id={edit}/>
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
                                        <HouseCard isAdmin={isAdmin || false} {...houses[i]} />
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
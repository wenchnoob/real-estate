import styled from "styled-components";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import React from "react";
import { useEffect, useState } from "react";
import { AddListingModal } from "./add_listing_modal";
import { getDatabase, ref, get, set, child } from 'firebase/database';
import app from '../scripts/firebase';
import HouseCard from "./house_card";
import useSWR from 'swr';

export const StyledContainer = styled(Container)`
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 10px;
`;


const HouseView = ({ isAdmin, edit }: {
    isAdmin?: boolean;
    edit?: string;
}) => {
    const { data , error } = useSWR('/api/houses', (url) => fetch(url).then((res) => res.json()));
    if (error) return <div>Server Error</div>
    if (!data) return <></>
    const { houses } = data;

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
                                        <HouseCard isAdmin={isAdmin} {...houses[i]} />
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
import React from 'react';
import CaptionedPic from "../src/components/captioned_pic";
import styled from "styled-components";
import { NextPage } from 'next';

export const CenteredContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3em;
`;

const Home: NextPage = () => {
    return (
        <>
             <CaptionedPic/>
        </>
    );
};

export default Home;
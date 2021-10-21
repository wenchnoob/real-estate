import React from 'react';
import NavBar from "../src/components/navbar";
import CaptionedPic from "../src/components/captioned_pic";
import Footer from "../src/components/footer";
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
        <div>
            <NavBar/>
            <CenteredContainer>
                <CaptionedPic/>
            </CenteredContainer>
            <Footer/>
        </div>
    );
};

export default Home;
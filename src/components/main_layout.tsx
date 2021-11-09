import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
    margin-top: 5rem;
`;

export const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr
    align-items: center;
`;

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {

    return (
        <>
            <NavBar />
            <StyledContainer>
                {children}
            </StyledContainer>
            <Footer />
        </>
    );
}

interface MainLayoutProps {
    children: JSX.Element;
}

export default MainLayout;
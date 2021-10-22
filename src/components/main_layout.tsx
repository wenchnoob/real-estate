import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import styled from 'styled-components';

export const Ceiling = styled.div`
    position: absolute;
    top: 0px;
    height: 120px;
    width: 100%;
`;

export const Floor = styled.div`
    position: absolute;
    bottom: 0px;
    margin-top: 1rem;
    width: 100%;
    height: 100px;
`;

const MainLayout = ({children}: MainLayoutProps): JSX.Element => {

    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
}

interface MainLayoutProps {
    children: JSX.Element;
}

export default MainLayout;
import React from 'react';
import NavBar from "./navbar";
import Footer from "./footer";
import HouseManager from "./house_manager";


const Admin = () => {
    return (
        <>
            <NavBar/>
            <HouseManager/>
            <Footer/>
        </>
    );
}

export default Admin;
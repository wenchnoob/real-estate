import React from 'react';
import NavBar from "../../src/components/navbar";
import Footer from "../../src/components/footer";
import HouseManager from "../../src/components/house_manager";


const Admin = () => {
    return (
        <div>
            <NavBar/>
            <HouseManager/>
            <Footer/>
        </div>
    );
}

export default Admin;
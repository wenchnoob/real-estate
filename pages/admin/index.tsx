import React from 'react';
import NavBar from "../../src/components/navbar";
import Footer from "../../src/components/footer";
import HouseView from "../../src/components/house_view";


const Admin = () => {
    return (
        <div>
            <NavBar/>
            <HouseView isAdmin={true}/>
            <Footer/>
        </div>
    );
}

export default Admin;
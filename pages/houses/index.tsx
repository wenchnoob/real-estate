import React from "react";
import NavBar from "../../src/components/navbar";
import Footer from "../../src/components/footer";
import HouseView from '../../src/components/house_view'


const Houses = () => {
    return (
        <>
            <NavBar/>
            <HouseView/>
            <Footer/>
        </>
    );
}

export default Houses;
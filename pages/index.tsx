import React from 'react';
import NavBar from "../src/components/navbar";
import CaptionedPic from "../src/components/captioned_pic";
import Footer from "../src/components/footer";


const Home = () => {
    return (
        <div>
            <NavBar/>
            <CaptionedPic/>
            <Footer/>
        </div>
    );
};

export default Home;
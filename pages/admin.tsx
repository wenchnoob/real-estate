import React from 'react';
import NavBar from "../src/components/navbar";
import Footer from "../src/components/footer";
import HouseManager from "../src/components/house_manager";


const Admin = () => {
    return (
        <div>
         <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous"
      />
            <NavBar/>
            <HouseManager/>
            <Footer/>
        </div>
    );
}

export default Admin;
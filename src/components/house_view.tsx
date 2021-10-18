import React from "react";
import PropTypes from "prop-types";
import NavBar from "./navbar";
import {Route} from "react-router-dom";

const HouseView = ({ navigable }: {navigable?: boolean}) => {
    return (
        <>
            <NavBar/>
        <div>
        <img alt='hey' src=''/>
        <div>
            { navigable ?
                <>
                    <button>Prev</button>
                    <button>Next</button>
                </>
                :
                <></>
            }
        </div>
        </div>
    </>
    );
}

HouseView.propTypes = {
    navigable: PropTypes.bool,
}

export default HouseView;
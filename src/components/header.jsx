import React from "react";
import headerBackground from "../assets/header.svg"

import "./styles/header.css";

const Header = () => {
    return (
        <div className="intro-container">

            <svg viewBox="0 0 1280 609" xmlns="http://www.w3.org/2000/svg">
                <image href={headerBackground} width="100%" height="100%" />
            </svg>
        

        </div>
    )
}

export default Header;

import React from "react";
import headshotImage from "../assets/headshot.jpg";

import "./styles/headshot.css";

const Headshot = () => {
    return (
        <div className="headshot-container">
            <div className="headshot-image" style={{ backgroundImage: `url(${headshotImage})` }}></div>
        </div>
    )
}

export default Headshot;
import React from "react";
import { useLocation } from "react-router-dom";

import headshotImage from "../assets/headshot.jpg";
import aboutMeImage from "../assets/about-me-photo.jpg";

import "./styles/headshot.css";

const Headshot = () => {
    const location = useLocation();

    const imageUrl = location.pathname === "/" ? headshotImage : aboutMeImage;


    return (
        <div className="headshot-container">
            <div className="headshot-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        </div>
    )
}

export default Headshot;
import React from "react";
import Button from "react-bootstrap/Button";
import Headshot from "./headshot";
// import { Link } from "react-router-dom";
// import Resume from "./resume";


import "./styles/aboutMe.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import INFO from "../information/homeInfo";

const AboutMe = () => {

    const resumeLink = "https://docs.google.com/document/d/14iXWuSuLXhcfjAfVcPftGBN6xhbUsI3spBwtS0Vb8G0/edit?usp=sharing"

    return (
        <React.Fragment>
            <div className="about-me-container">
                <div className="left">
                    <div className="bio-container">
                        {INFO.about.bio}
                    </div>
                    <div className="language-title">
                        Languages & Frameworks:
                    </div>
                    <div className="language-container">
                        {INFO.about.languages}
                    </div>
                    <div className="certifications-title">
                        Certifications:
                    </div>
                    <div className="certification-container">
                        {INFO.about.certifications}
                    </div>
                    <div className="resume-container">
                        <Button
                            onClick={() => window.open(resumeLink, "_blank")}
                            variant="primary"
                        >
                            Resume
                        </Button>
                    </div>
                </div>
                <div className="right">
                    <div className="headshot">
                        <Headshot />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AboutMe;
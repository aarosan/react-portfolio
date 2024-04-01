import React from "react";
import { Helmet } from "react-helmet";

import "./styles/about.css";

import NavBar from "../components/navBar";
import ComingSoon from "../components/comingSoon";

import Footer from "../components/footer";

const About = () => {
    return (
        <React.Fragment>

            <Helmet>
                <title></title>
                <meta />
            </Helmet>

            <div className="page-content">

                <div className="about-navbar">
                    <NavBar active="about" />
                </div>

                <div className="coming-soon">
                    <ComingSoon />
                </div>

                <div className="about-footer">
                    <Footer />
                </div>

            </div>
        </React.Fragment>
    )
}

export default About;
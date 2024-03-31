import React from "react";
import { Helmet } from "react-helmet";

import "./styles/home.css";

import INFO from "../information/homeInfo";

import NavBar from "../components/navBar";
import Intro from "../components/intro";
import Footer from "../components/footer";
import AllProjects from "../components/allProjects";

const Home = () => {
    return (
        <React.Fragment>
            
            <Helmet>
                <title></title>
                <meta />
            </Helmet>

            {/* <svg id="header-svg" width="100%" height="100%" viewBox="0 0 1280 609" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H1280V480.5L0 609V0Z" fill="#BDD9FF"/>
            </svg> */}

            <div className="page-content">

                    <NavBar active="home" />

                    <Intro />


            </div>

        </React.Fragment>
    );
};

export default Home;
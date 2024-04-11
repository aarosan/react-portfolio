import React from "react";
import { Helmet } from "react-helmet";

import "./styles/home.css";

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

            <div className="page-content">

                <div className="home-navbar">
                    <NavBar active="home" />
                </div>

                <div className="home-intro">
                    <Intro />
                </div>

                <div className="home-projects">
                    <AllProjects />
                </div>
                    
                <div className="home-footer">
                    <Footer />
                </div>
                
            </div>

        </React.Fragment>
    );
};

export default Home;
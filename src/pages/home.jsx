import React from "react";
import { Helmet } from "react-helmet";

import "./styles/home.css";

import INFO from "../information/homeInfo";

import NavBar from "../components/navBar";
import Header from "../components/header";
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
                <div className="content-container">
                    <Header />
                    <Intro />
                </div>
                
                <NavBar active="home" />


            </div>

        </React.Fragment>
    );
};

export default Home;
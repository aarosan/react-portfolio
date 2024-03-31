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

            <div className="page-content">

                    <NavBar active="home" />

                    <Intro />


            </div>

        </React.Fragment>
    );
};

export default Home;
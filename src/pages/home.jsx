import React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/navBar";
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

            </div>

        </React.Fragment>
    );
};

export default Home;
import React from "react";
import { Helmet } from "react-helmet";

import "./styles/projects.css";

import NavBar from "../components/navBar";
import ProjectSection from "../components/projectSection";
import Footer from "../components/footer";

const Projects = () => {
    return (
        <React.Fragment>

            <Helmet>
                <title></title>
                <meta />
            </Helmet>

            <div className="page-content">

                <div className="projects-navbar">
                    <NavBar active="projects" />
                </div>

                <div className="project-section">
                    <ProjectSection />
                </div>

                <div className="projects-footer">
                    <Footer />
                </div>

            </div>
        </React.Fragment>
    )
}

export default Projects;
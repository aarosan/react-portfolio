import React from "react";
import { Link } from "react-router-dom";
import Project from "./project";

import INFO from "../information/homeInfo";

import "./styles/allProjects.css"

const AllProjects = () => {
    return (
            <div className="project-section">

                <div className="project-flex">

                    <div className="projects-text">

                        <div className="projects-title">
                            Projects
                        </div>

                        <div className="projects-view-more">
                            <Link to="/projects">View more</Link>
                        </div>

                    </div>

                    <div className="all-projects-container">
                        {INFO.projects.map((project, index) => (
                            <div className="all-projects-project" key={index}>
                                <Project 
                                    title={project.title}
                                    description={project.description}
                                    languages={project.languages}
                                    githubLink={project.githubLink}
                                    deployedLink={project.deployedLink}
                                />
                            </div>
                        ))}
                    </div>

                </div>
                
            </div>
    )
}

export default AllProjects;
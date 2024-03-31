import React from "react";
import Project from "./project";

import INFO from "../information/homeInfo";

import "./styles/allProjects.css"

const AllProjects = () => {
    return (
            <div className="project-section-container">
                
                <div className="projects-text">
                    <div className="projects-title">
                        Projects
                    </div>
                    <div className="projects-view-more">
                        <a href="/">View More</a>
                    </div>
                </div>

                <div className="all-projects-container">
                    {INFO.projects.map((project, index) => (
                        <div className="all=projects-project" key={index}>
                            <Project 
                                title={project.title}
                                description={project.description}
                                languages={project.languages}
                                githubLink={project.githubLink}
                                deployedLink={project.deployedLink}
                                projectLink={project.projectLink}
                            />
                        </div>
                    ))}
                </div>

            </div>

            
    )
}

export default AllProjects;
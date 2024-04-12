import React from 'react';
import Project from "./project";
import InDevelopment from "./inDevelopment";

import INFO from "../information/homeInfo";

import "./styles/projectSection.css";

const ProjectSection = () => {
    return (
        <React.Fragment>
            <div className="deployed-application-section">
                
                <div className="deployed-application-title">
                    Deployed Applications
                </div>

                <div className="deployed-application-container">
                        {INFO.projects.map((project, index) => (
                            <div className="all-deployed-project" key={index}>
                                <Project 
                                    title={project.title}
                                    description={project.description}
                                    participation={project.participation}
                                    languages={project.languages}
                                    githubLink={project.githubLink}
                                    deployedLink={project.deployedLink}
                                />
                            </div>
                        ))}
                </div>
            </div>

            <div className="in-development-section">
                <div className="in-development-title">
                    In Development
                </div>

                <div className="in-development-container">
                        {INFO.inDevelopmentProjects.map((project, index) => (
                            <div className="all-development-project" key={index}>
                                <InDevelopment 
                                    title={project.title}
                                    description={project.description}
                                    participation={project.participation}
                                    languages={project.languages}
                                    githubLink={project.githubLink}
                                />
                            </div>
                        ))}
                </div>

            </div>


        </React.Fragment>
    )
}

export default ProjectSection;
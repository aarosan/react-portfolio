import React from "react";
import { Link } from "react-router-dom";

import "./styles/project.css";

const Project = (props) => {
    const { title, description, languages, githubLink, deployedLink, projectLink } = props;

    return (
        <React.Fragment>
            <div className="project">
                <Link to={projectLink}>
                    <div className="project-container">
                        <div className="project-title">{title}</div>
                        <div className="project-description">{description}</div>
                        <div className="project-languages">{languages}</div>
                        <div className="project-github">
                            <a href={githubLink}>Github Link</a>
                        </div>
                        <div className="project-deployed">                            <a href={deployedLink}>Deployed Application</a>
                        </div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Project;
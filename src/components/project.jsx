import React from "react";
import { Link } from "react-router-dom";
import "./styles/project.css";

const Project = (props) => {
    const { title, description, languages, githubLink } = props;

    return (
        <React.Fragment>
            <div className="project">
                    <div className="project-container">
                        <div className="project-title">{title}</div>
                        <div className="project-description">{description}</div>
                        <div className="project-languages">{languages}</div>
                        <div className="project-github">
                            <a href={githubLink}>Github Link</a>
                        </div>
                        <div className="project-deployed">                            <Link to="/projects">Deployed Application</Link>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Project;
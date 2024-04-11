import React from "react";
import { Link } from "react-router-dom";
import DividingLine from "./dividingLine";
import "./styles/project.css";

const Project = (props) => {
    const { title, description, participation, languages, githubLink, deployedLink } = props;

    return (
        <React.Fragment>
            <div className="project">
                    <div className="project-container">
                        <div className="project-title">{title}</div>
                        <div className="project-description">{description}</div>
                        <div className="group-participation">{participation}</div>

                        <DividingLine />

                        <div className="project-languages">{languages}</div>
                        <div className="project-github">
                        <Link to={githubLink}>Github Repository</Link>
                        </div>
                        <div className="project-deployed">                            <Link to={deployedLink}>Deployed Application</Link>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Project;
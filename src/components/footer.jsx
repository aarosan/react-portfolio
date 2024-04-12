import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import "./styles/footer.css";

const Footer = () => {
    return(
        <React.Fragment>
            <div className="footer-container">

                <div className="footer-information">

                    {/* <div className="contact-title">
                        Contact Me!
                    </div> */}

                    <div className="contact-information">
                            <a href="https://github.com/aarosan" target="_blank" rel="noopener noreferrer" style={{ fontSize: "50px", color: "black" }}>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://linkedin.com/in/aaron-ross-sanchez" target="_blank" rel="noopener noreferrer" style={{ fontSize: "50px", color: "black" }}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}

export default Footer;
import React from "react";
import Headshot from "./headshot";

import "./styles/intro.css";

const Intro = () => {
    return (
        <React.Fragment>

            <div className="intro-container">

                <div className="intro-left">
                    <Headshot />
                    
                </div>

                <div className="intro-right">

                </div>

            </div>
            
        </React.Fragment>        
    );
}

export default Intro;
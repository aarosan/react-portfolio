import React from "react";
import Headshot from "./headshot";

import "./styles/intro.css";

const Intro = () => {
    return (
        <React.Fragment>
        <div className="intro">

            <div className="intro-container">

                    <div className="intro-left">

                        <Headshot />

                    </div>

                    <div className="intro-right">

                        <div className="about-me">

                        Hello, my name is Aaron!
                        <br/><br/>
                        I'm a Full-Stack Developer based in Austin, TX.
                        </div>        

                    </div>
                
            </div>
        
        </div>
  
        </React.Fragment>        
    );
}

export default Intro;
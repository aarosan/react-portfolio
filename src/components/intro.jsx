import React from "react";
import Headshot from "./headshot";


import INFO from "../information/homeInfo";

import "./styles/intro.css";

const Intro = () => {
    return (
        <React.Fragment>

            <div className="intro-container">
                <div className="intro-flex">
                    <div className="intro-left">

                        <Headshot />

                        <div className="name">
                            Aaron Sanchez
                        </div>

                    </div>

                    <div className="intro-right">
                        <div className="about-me">
                        Hello, my name is Aaron!
                        <br/><br/>
                        I'm a Full-Stack Developer based in Austin, TX.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat odio id urna ullamcorper luctus. Mauris et lacus eget arcu cursus vestibulum sed nec tortor. Nulla tortor velit, molestie et vulputate quis, imperdiet id elit. Proin at commodo est. In nec tortor aliquet, finibus mi et, eleifend nisl.  
                        </div>                
                    </div>
                </div>
            </div>
            
        </React.Fragment>        
    );
}

export default Intro;
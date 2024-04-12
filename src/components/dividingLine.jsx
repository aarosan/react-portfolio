import React from "react";
import "./styles/dividingLine.css";

const DividingLine = () => {


    const lineStyle = {
        width: '100%',
        height: '3px', 
        backgroundColor: '#c99cfb', 
        border: 'none',
        margin: '0 auto' 
    };


    return (
        <React.Fragment>

            <div className="container">
                <hr style={lineStyle} />
            </div>

        </React.Fragment>
    )
};

export default DividingLine;

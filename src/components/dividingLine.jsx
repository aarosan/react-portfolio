import React from "react";
import "./styles/dividingLine.css";

const DividingLine = () => {


    const lineStyle = {
        width: '75%', // Line width is 75% of the container
        height: '2px', // Thickness of the line
        backgroundColor: 'white', // Line color (you can change it)
        border: 'none', // Remove any default border styling
        margin: '0 auto' // Center the line within the container
    };


    return (
        <React.Fragment>

            <div className="container">
            {/* Create an hr element with the defined style */}
                <hr style={lineStyle} />
            </div>

        </React.Fragment>
    )
};

export default DividingLine;

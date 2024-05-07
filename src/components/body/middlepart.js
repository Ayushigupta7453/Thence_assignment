import React from "react";

import image from "../assets/image.png";
import "./middlepart.css";

const Middle =()=>{
    return (
        <div className="main">
            <div className="frame1">
                <div className="heading1">
                    Success stories
                </div>
            <div className="heading2">
                 <p>Every success journey we've encountered</p>
             </div>
            </div>
             
             <div className="photo">
                <div className="image">
                 <img src={image} alt ="girl"/>
                </div>
                <div className="text">
                 <p>Enhance fortune 50 company's insights teams research capabilities</p>
                 <p className="button">Explore now</p>
                </div>
             </div>
          
        </div>
    );
}

export default Middle;
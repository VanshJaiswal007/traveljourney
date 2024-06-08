import React from "react";
import globe from "./assets/globall.jpg"
import "./navbar.css"
export default function Nav(){
    return(
        <div className="Nav--container">
            <img src={globe} alt="globe" className="navbar--image" width='46px'
            />
            <h4 className="navbar--title">my travel journey</h4>
        </div>
    )
}
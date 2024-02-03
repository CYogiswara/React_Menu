import React from "react";
import { Fetch } from "../Fething/Fetch.jsx";
import '../Menu/menu.css'
import { Link } from "react-router-dom";


const Recipe = () => {
    return(
        <div>
            <h1 className="menu-title">Menu: </h1>
            <Fetch/>
            <div></div>
            <li className="addMenu">
                <Link to="/form">+</Link>
            </li>
        </div>
    )
}

export default Recipe
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"


const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src="../../../images/finalLogo.jpg" alt="test"></img>
            </div>
            <ul className="navbar-links">
                <li className="link">
                    <NavLink to={"/"}>
                        <h2>Home</h2>
                    </NavLink>
                </li>
                <li className="link about-us">
                    <NavLink to={"about-us"}>
                        <h2>About Us</h2>
                    </NavLink>
                    {/* <ul className="dropdown">
                        <li className="dropdown-link"><NavLink to={"bunny"}>Bunny</NavLink></li>
                        <li className="dropdown-link"><NavLink to={"larry"}>Lary</NavLink></li>
                        <li className="dropdown-link"><NavLink to={"bunny"}>Bunny</NavLink></li>
                    </ul> */}
                </li>
                <li className="link">
                    <NavLink to={"gallery"}>
                        <h2>Options Gallery</h2>
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink to={"process"}>
                        <h2>Our Process</h2>
                    </NavLink>
                </li>
                <li className="link" >
                    <NavLink to={"contact"}>
                        <h2>Contact Us</h2>
                    </NavLink>
                </li>
            </ul>
        </div >
    )
}

export default NavBar;

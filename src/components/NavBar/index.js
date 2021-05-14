import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"


const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo">

            </div>
            <div className="navbar-links">
                <div className="link">
                    <Link to={"home"}>
                        <h1>Home</h1>
                    </Link>
                </div>
                <div className="link">
                    <Link to={"about-us"}>
                        <h1>About Us</h1>
                    </Link>
                </div>
                <div className="link">
                    <Link to={"gallery"}>
                        <h1>Gallery</h1>
                    </Link>
                </div>
                <div className="link">
                    <Link to={"process"}>
                        <h1>Out Process</h1>
                    </Link>
                </div>
                <div className="link">
                    <Link to={"contact"}>
                        <h1>Contact Us</h1>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default NavBar;

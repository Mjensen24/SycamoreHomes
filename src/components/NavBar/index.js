import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"


const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src="../../../images/sycamore.jpg" alt="test"></img>
            </div>
            <div className="navbar-links">
                <div className="link">
                    <Link to={"home"}>
                        <h2>Home</h2>
                    </Link>
                </div>
                <div className="link">
                    <Link to={"about-us"}>
                        <h2>About Us</h2>
                    </Link>
                </div>
                <div className="link">
                    <Link to={"gallery"}>
                        <h2>Gallery</h2>
                    </Link>
                </div>
                <div className="link">
                    <Link to={"process"}>
                        <h2>Out Process</h2>
                    </Link>
                </div>
                <div className="link">
                    <Link to={"contact"}>
                        <h2>Contact Us</h2>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default NavBar;

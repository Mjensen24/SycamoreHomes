import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"

const
    Footer = () => {
        return (
            <div className="footer-container">
                <div className="footer-info_container">
                    <img src="../../../images/SCLHBlack.jpg" alt="test"></img>
                    <div className="footer-info">
                        <h3>Explore</h3>
                        <NavLink to={"gallery"}>
                            Gallery
                        </NavLink>
                        <NavLink to={"about-us"}>
                            About Us
                        </NavLink>
                        <NavLink to={"process"}>
                            Our Process
                        </NavLink>
                    </div>
                    <div className="footer-info">
                        <h3>Follow</h3>
                        <p>Instagram</p>
                        <p>Linkedin</p>
                        <p>Twitter</p>
                    </div>
                    <div className="footer-contact">
                        <div className="contact-column">
                            <h3>Visit</h3>
                            <p>7802 Dance Hall Road</p>
                            <p>Frederick MD. 21701</p>
                        </div>
                        <div className="contact-column">
                            <h3>New Buisness</h3>
                            <p>Baberni2@aol.com</p>
                            <p>301-748-1614</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

export default
    Footer;

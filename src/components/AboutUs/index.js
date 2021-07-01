import React from 'react'
import "./index.css"
import { IoRocketSharp } from 'react-icons/io5';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaTrophy } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-row">
                <div className="about-header_container">
                    <h4>About Us</h4>
                    <h1>With 30 years of construction under our belt, we are dedicated to building quality homes while working within your budget. Your happiness is our success.</h1>
                    {/* <h2>We are a woman owned, exceptionally skilled and reliable construction management team with more than 36 years combined of successful management of residential and commercial construction projects. We have a career history of directing multi-million dollar projects and maximizing profitability through skillful workflow optimization, effective cost engineering, project management and vendor relations. We are completely dedicated to ensuring the highest level of construction quality while maintaining full adherence to all deadlines and specifications. Our reputation for effectively promoting the development of outside consultants and contractors is second to none. Our proven ability to create, develop and motivate highly efficient construction project teams allows us to  deliver exceptional customer service.  </h2> */}
                </div>
            </div>
            <div className="about-background"></div>
            <div className="about-row_2">
                <div className="about-column_1">
                    <div className="column1-info_container">
                        <div className="column1-info">
                            <IoRocketSharp />
                            <h2>Innovators</h2>
                            <h4>You'll find that We're always in the pursuit of exceeding your expectations. We're always thinking outside the box.</h4>
                        </div>
                    </div>
                    <div className="column1-info_container">
                        <div className="column1-info">
                            <BsFillPersonLinesFill />
                            <h2>Expert Team</h2>
                            <h4>Your project will be handled by our trusted experts. We have hand selected the most experienced professionals to work for you.</h4>
                        </div>
                    </div>
                    <div className="column1-info_container">
                        <div className="column1-info">
                            <FaTrophy />
                            <h2>Over 20 Years of Experience</h2>
                            <h4>With over 20 years of experience You’ll find that we have the knowledge to insure your home is built to the highest of standards. </h4>
                        </div>
                    </div>
                </div>
                <div className="about-column_2">
                    <div className="column2-info_container">
                        <h1>
                            We are a woman owned, exceptionally skilled and reliable construction management team with more than 36 years
                            combined of successful management of residential and commercial construction projects. We have a career history
                            of directing multi-million dollar projects and maximizing profitability through skillful workflow optimization,
                            effective cost engineering, project management and vendor relations. We are completely dedicated to ensuring the
                            highest level of construction quality while maintaining full adherence to all deadlines and specifications. Our
                            reputation for effectively promoting the development of outside consultants and contractors is second to none.
                            Our proven ability to create, develop and motivate highly efficient construction project teams allows us to deliver
                            exceptional customer service.
                        </h1>
                        <div className="different">
                            <h1>What makes us different</h1>
                            <div className="different-columns">
                                <div className="different-column">

                                </div>
                                <div className="different-column">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-row_3">
                <div className="staff-container">
                    <div className="staff-info">
                        <div className="staff-info_inner">
                            <div className="staff-info_front1"></div>
                            <div className="staff-info_back">
                                <h1>Bernice Bare</h1>
                                <h3>Co-Owner/Designer</h3>
                                <p>Works closely with you every step of the way to help design the floorplan…from flooring to cabinets to fixtures.She is there to provide assistance with every important detail and communicates frequently with weekly reporting. Bernice is also the point person for all permitting and materials handling</p>
                                <div className="staff_learn-more">
                                    <NavLink to={"bunny"}>Learn More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="staff-container">
                    <div className="staff-info">
                        <div className="staff-info_inner">
                            <div className="staff-info_front2">
                            </div>
                            <div className="staff-info_back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                                <div className="staff_learn-more">
                                    <NavLink to={"bunny"}>Learn More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="staff-container">
                    <div className="staff-info">
                        <div className="staff-info_inner">
                            <div className="staff-info_front3">
                            </div>
                            <div className="staff-info_back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                                <div className="staff_learn-more">
                                    <NavLink to={"bunny"}>Learn More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;

import React from 'react'
import "./index.css"
import { IoRocketSharp } from 'react-icons/io5';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaTrophy } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';

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
            <div className="about-row_3">
                <div className="team-container">
                    <div className="team-icon"></div>
                    <div className="team-info">
                        <div className="team-info_header">
                            <h1>Bernice Bare</h1>
                            <h3>Owner</h3>
                        </div>
                        <p>As the point of contact for our clients, Bernice, fondly nicknamed Bunny, works closely with you every step of the way to help design the floorplan…from flooring to cabinets to fixtures.  She is there to provide assistance with every important detail and communicates frequently with weekly reporting.  Bunny is also the point person for all permitting and materials handling and she can be reached at all times; days, evenings, and weekends.</p>
                    </div>
                </div>
                <div className="team-container">
                    <div className="team-icon2"></div>
                    <div className="team-info">
                        <div className="team-info_header">
                            <h1>Larry Bare</h1>
                            <h3>Director of Construction</h3>
                        </div>
                        <p>Larry’s proven track record from over 30 years of experience in construction will help to put your mind at ease through your home building process.  Larry is well known for his ability to focus on the project at hand and you can expect the same dedication to your home as he would provide for his own.  Just a few of Larry’s proficiency skills:</p>
                        <p id="larry-skills">● Construction Management ● Vendor Management ● Customer Service ● Building Codes, Permits ● Planning & Scheduling ● Team Supervision ● Communications ● Compliance ● Workflow Optimization ● Communication ● Problem Solving ● OSHA and Safety ● Cost Engineering ● Quality Control ● Collaboration ● Arbitration  </p>
                    </div>
                </div>
            </div>
            <div className="about-background"></div>
            <div className="about-row_2">
                <div className="about-column_1">
                    <div className="staff-container">
                        <div className="staff-info">
                            <div className="staff-info_inner">
                                <div className="staff-info_front1">
                                    <IoRocketSharp />
                                    <h2>Innovators</h2>
                                    <h4>You'll find that We're always in the pursuit of exceeding your expectations. We're always thinking outside the box.</h4>
                                </div>
                                <div className="staff-info_back">
                                    <h4>We’ve established long-term, successful relationships with many local vendors, as well as McLane Financial.  We are a licensed and approved builder with McLane.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="staff-container">
                        <div className="staff-info">
                            <div className="staff-info_inner">
                                <div className="staff-info_front1">
                                    <BsFillPersonLinesFill />
                                    <h2>Expert Team</h2>
                                    <h4>Your project will be handled by our trusted experts. We have hand selected the most experienced professionals to work for you.</h4>
                                </div>
                                <div className="staff-info_back">
                                    <h4>A copy of our business license and insurance is provided.  We work solely with licensed and insured vendors and we stand behind our work with a 1, 2, 10 year home warranty (1 year cosmetic, 2 years everything behind the walls, 10 years structural).</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="staff-container">
                        <div className="staff-info">
                            <div className="staff-info_inner">
                                <div className="staff-info_front1">
                                    <FaTrophy />
                                    <h2>Over 20 Years of Experience</h2>
                                    <h4>With over 20 years of experience You’ll find that we have the knowledge to insure your home is built to the highest of standards. </h4>
                                </div>
                                <div className="staff-info_back">
                                    <h4>We specialize in building energy efficient homes that includes duct blaster test air sealing with 3rd party installation inspections plus a door blower test with official certification of passing energy efficiency.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-column_2">
                    <div className="column2-info_container">
                        <h1>
                            We are a woman owned, exceptionally skilled and reliable construction management team with more than 30 years
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
                                <h2>As small business owners, we are able to cut costs for our homeowners.  For example, most builders will charge clients $150-$300 for each change made to the build plan.  We do not. We want to see our clients achieve their dream home rather than rack up needless change fees.</h2>
                                <h2>Additionally, for every client, we provide upgraded electrical services 400 amp free of charge ($5,000 value) and we also provide one 3-piece rough-ins for in the basement, also free of charge ($1,700 value).  </h2>
                                <h2>We are committed to ensuring every client has a pleasurable and more personal experience with Sycamore.  This is a very big life event and investment for you; therefore, we want to be sure it is a seamless process.  We make ourselves available at virtually all times (days, evenings and weekends) and will happily work around our client’s schedules. </h2>
                                <h2>Lastly, Sycamore has a solid, long-standing relationship with McLean Mortgage, one of the top rated mortgage lenders on the east coast.  Bunny can connect you with their Senior Loan Officer to get the process rolling and get you pre-approved for purchase.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="about-row_3">
                <div className="team-container">
                    <div className="team-icon"></div>
                    <div className="team-info">
                        <div className="team-info_header">
                            <h1>Bernice Bare</h1>
                            <h3>Owner</h3>
                        </div>
                        <p>As the point of contact for our clients, Bernice, fondly nicknamed Bunny, works closely with you every step of the way to help design the floorplan…from flooring to cabinets to fixtures.  She is there to provide assistance with every important detail and communicates frequently with weekly reporting.  Bunny is also the point person for all permitting and materials handling and she can be reached at all times; days, evenings, and weekends.</p>
                    </div>
                </div>
                <div className="team-container">
                    <div className="team-icon2"></div>
                    <div className="team-info">
                        <div className="team-info_header">
                            <h1>Larry Bare</h1>
                            <h3>Director of Construction</h3>
                        </div>
                        <p>Larry’s proven track record from over 30 years of experience in construction will help to put your mind at ease through your home building process.  Larry is well known for his ability to focus on the project at hand and you can expect the same dedication to your home as he would provide for his own.  Just a few of Larry’s proficiency skills:</p>
                        <p id="larry-skills">● Construction Management ● Vendor Management ● Customer Service ● Building Codes, Permits ● Planning & Scheduling ● Team Supervision ● Communications ● Compliance ● Workflow Optimization ● Communication ● Problem Solving ● OSHA and Safety ● Cost Engineering ● Quality Control ● Collaboration ● Arbitration  </p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default AboutUs;

<p>● Construction Management ● Vendor Management ● Customer Service ● Building Codes, Permits ● Planning & Scheduling ● Team Supervision ● Communications ● Compliance ● Workflow Optimization ● Communication ● Problem Solving ● OSHA and Safety ● Cost Engineering ● Quality Control ● Collaboration ● Arbitration  </p>

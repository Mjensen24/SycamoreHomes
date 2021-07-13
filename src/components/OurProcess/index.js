import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
import { RiArrowRightSLine } from 'react-icons/ri';

const OurProcess = () => {
    return (
        <div className="process-container">
            {/* <div className="step-line_container">

            </div> */}
            <div className="process-background">
                <div className="process-banner_info">
                    <h1>THE PATH TO HOME OWNERSHIP</h1>
                    <h2>Is Shorter Than You Think</h2>
                </div>
            </div>
            <div className="process-opener">
                <h2>Each year we help hundreds of families design and build their dream home on time and on budget. In fact, with more than half a century of building custom homes in the West, we have the experience to build the home you have been dreaming of.</h2>
                <h1>HERES HOW:</h1>
            </div>
            <div className="step-one">
                <div className="step1-container">
                    <h4 className="step-num">STEP 1</h4>
                    <h2>Consult with our Team</h2>
                    <p>We’re excited to hear your vision for the home of your dreams.  Our team will provide you with a plan to achieve your goals.</p>
                    <h4>We can help you:</h4>
                    <ul>
                        <li>Choose a custom home floor plan that’s right for your lifestyle</li>
                        <li>Explain what to include when estimating your Total Project Cost — Home, Land, and Site expenses</li>
                    </ul>
                    <div className="step-button">
                        <NavLink to={"contact"}>
                            Contact Us
                        </NavLink>
                        <RiArrowRightSLine />
                    </div>
                </div>
            </div>
            <div className="step-container">
                <div className="step-info_container">
                    <div className="step-info">
                        <h4 className="step-num">STEP 2</h4>
                        <h2>Get Prequalified</h2>
                        <p>The next critical step is financing.  Before we can break ground or even discuss where the ground should be, we need to plan your budget and connect you with a mortgage lender.</p>
                        <h4>Click here to see our preferred lender.</h4>
                        <ul>
                            <li>Sycamore Custom Luxury Homes has forged a successful relationship with McLean Mortgage Corporation for pre-approval construction loans.  McLean is a trusted mortgage company that is a preferred lender of many area builders.</li>
                        </ul>
                    </div>
                    <div className="step-image-right">
                        <img src="/images/homes/luxhome8.jpg" alt="home" />
                    </div>
                </div>
            </div>
            <div className="step-container">
                <div className="step-info_container">
                    <div className="step-image-right">
                        <img src="/images/homes/luxhome8.jpg" alt="home" />
                    </div>
                    <div className="step-info">
                        <h4 className="step-num">STEP 3</h4>
                        <h2>Location Selection</h2>
                        <p>We can build on a lot you’ve picked out OR we can help you find one. </p>
                        <h4>Click here to see our preferred lender.</h4>
                        <ul>
                            <li>Sycamore Custom Luxury Homes has forged a successful relationship with McLean Mortgage Corporation for pre-approval construction loans.  McLean is a trusted mortgage company that is a preferred lender of many area builders.</li>
                        </ul>
                    </div>
                </div>
                <div className="circle-test"></div>
            </div>
            <div className="step-container">
                <div className="step-info_container">
                    <div className="step-info">
                        <h4 className="step-num">STEP 4</h4>
                        <h2>Choose a Home</h2>
                        <p>We’ll explore floorplans designed to meet your lifestyle and budget.</p>
                        <h4>Click here to see our preferred lender.</h4>
                        <ul>
                            <li>Sycamore Custom Luxury Homes has forged a successful relationship with McLean Mortgage Corporation for pre-approval construction loans.  McLean is a trusted mortgage company that is a preferred lender of many area builders.</li>
                        </ul>
                        <div className="step-button">
                            <NavLink to={"gallery"}>
                                Our Gallery
                            </NavLink>
                            <RiArrowRightSLine />
                        </div>
                    </div>
                    <div className="step-image-right">
                        <img src="/images/homes/luxhome8.jpg" alt="home" />
                    </div>
                </div>
            </div>
            <div className="step-container">
                <div className="step-info_container">
                    <div className="step-image-right">
                        <img src="/images/homes/luxhome8.jpg" alt="home" />
                    </div>
                    <div className="step-info">
                        <h4 className="step-num">STEP 5</h4>
                        <h2>Agreement</h2>
                        <p>Review and sign the purchase agreement.</p>
                        <h4>Click here to see our preferred lender.</h4>
                        <ul>
                            <li>Sycamore Custom Luxury Homes has forged a successful relationship with McLean Mortgage Corporation for pre-approval construction loans.  McLean is a trusted mortgage company that is a preferred lender of many area builders.</li>
                        </ul>
                    </div>
                    <div className="step-line"></div>
                    <div className="circle-test"></div>
                </div>
            </div>
            <div className="step-container">
                <div className="step-info_container">
                    <div className="step-info">
                        <h4 className="step-num">STEP 6</h4>
                        <h2>Selections</h2>
                        <p>Choose your cabinets, flooring, appliances, paint, exterior materials, etc.</p>
                        <h4>Click here to see our preferred lender.</h4>
                        <ul>
                            <li>Sycamore Custom Luxury Homes has forged a successful relationship with McLean Mortgage Corporation for pre-approval construction loans.  McLean is a trusted mortgage company that is a preferred lender of many area builders.</li>
                        </ul>
                        <div className="step-button">
                            <NavLink to={"gallery"}>
                                Our Gallery
                            </NavLink>
                            <RiArrowRightSLine />
                        </div>
                    </div>
                    <div className="step-image-right">
                        <img src="/images/homes/luxhome8.jpg" alt="home" />
                    </div>
                </div>
            </div>
            <div className="step-container">
                <div className="step-info_container">
                    <div className="step-image-right">
                        <img src="/images/homes/luxhome8.jpg" alt="home" />
                    </div>
                    <div className="step-info">
                        <h4 className="step-num">STEP 7</h4>
                        <h2>Start of Construction</h2>
                        <p>HVAC
                            PLUMBING
                            ELECTRIC
                            LOW VOLTAGE
                            SPRINKLER SYSTEM
                            INSULATION
                            DRYWALL
                            PAINT
                            FLOORING
                            APPLIANCE INSTALL
                            FINAL WALK THROUGHS
                        </p>
                        <h4>Click here to see our preferred lender.</h4>
                        <ul>
                            <li>Sycamore Custom Luxury Homes has forged a successful relationship with McLean Mortgage Corporation for pre-approval construction loans.  McLean is a trusted mortgage company that is a preferred lender of many area builders.</li>
                        </ul>
                    </div>
                    <div className="circle-test"></div>

                </div>
            </div>
            <div className="step-container">
                <div className="step-info_container">
                    <div className="step-info">
                        <h4 className="step-num">STEP 8</h4>
                        <h2>Settlement</h2>
                        <p>Move-In, Quality Control and beyond.  We stand behind our work with a 1, 2, 10 year home warranty</p>
                        <h4>Warranty Selection:</h4>
                        <ul>
                            <li>1 Year Cosmetics</li>
                            <li>2 Years everything behind the walls</li>
                            <li>10 Years structural</li>
                        </ul>
                    </div>
                    <div className="step-image-right">
                        <img src="/images/homes/luxhome8.jpg" alt="home" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProcess;

import React from 'react'
import "./index.css"

const Homepage = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-row">
                <div className="homepage-column">
                    <div className="home_container2">
                        <img src="/images/homes/luxhome1.jpg" alt="home" className="home_image" />
                    </div>
                    <div className="home_container1">
                        <img src="/images/homes/homeimage.jpeg" alt="home" className="home_image" />
                    </div>
                </div>
                <div className="homepage-column">
                    <div className="home_container1">
                        <img src="/images/homes/luxhome3.jpg" alt="home" className="home_image" />
                    </div>
                    <div className="home_container2">
                        <img src="/images/homes/luxhome2.jpg" alt="home" className="home_image" />
                    </div>
                </div>
                <div className="home-intro">
                    <div className="content_container">
                        <div className="home-intro_info">
                            <h1>Sycamore Custom Luxury Homes</h1>
                            <h4>Sycamore Custom Luxury Homes builds and Designs custom homes and Luxury Estates. Our highly experienced team has the know-how to achieve your vision.</h4>
                            <div className="banner-button">
                                <h4>LEARN MORE</h4>
                            </div>
                        </div>
                        <img src="/images/homes/WH.jpg" alt="home" className="home-intro_content" />
                    </div>
                    <div className="home-intro_images">
                        <img src="/images/homes/luxhome4.jpg" alt="home" className="intro-image" />
                        <img src="/images/homes/luxhome5.jpg" alt="home" className="intro-image" />
                    </div>
                </div>
            </div>
            <div className="homepage-row_2">
                <div className="row2_container">
                    <div className="home_container4">
                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                    </div>
                    <div className="home_container3">
                        <img src="/images/homes/luxhome8.jpg" alt="home" />
                    </div>
                    <div className="home_container4">
                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                    </div>
                </div>
            </div>
            <div className="homepage-banner">
                <div className="banner"></div>
                <div className="banner-content">
                    <div className="banner-boarder">
                        <h1>SEARCHING FOR THE PERFECT LOT?</h1>
                        <h4>WE ARE READY TO HELP YOU FIND THE LOT YOU'RE LOOKING FOR.</h4>
                        <div className="banner-button">
                            <h4>LEARN MORE</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage-row_3">
                <div className="row3_container">
                    <div className="home_container3">
                        <img src="/images/homes/luxhome8.jpg" alt="home" />
                    </div>
                    <div className="home_container6">
                        {/* <div className="bottom-banner">
                            <h1>some text</h1>
                        </div> */}
                        {/* <img src="/images/homes/luxhome6.jpg" alt="home" /> */}
                    </div>
                    <div className="home_container5">
                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                    </div>
                </div>
            </div>
            <div className="homepage-row">
                <div className="home-intro2">
                    <div className="home-intro_images">
                        <img src="/images/homes/luxhome1.jpg" alt="home" className="intro-image2" />
                        <img src="/images/homes/luxhome2.jpg" alt="home" className="intro-image2" />
                    </div>
                    <div className="home-intro_images2">
                        <img src="/images/homes/luxhome5.jpg" alt="home" className="intro-image2" />
                        <img src="/images/homes/luxhome4.jpg" alt="home" className="intro-image2" />
                    </div>
                </div>
                <div className="home-intro3">
                    <div className="content_container3">
                        <div className="bottom-banner">
                            <div className="bottom-banner_info">
                                <div className="bottom-info_row">
                                    <div className="bottom-info_box">
                                        <h1>High-End Features</h1>
                                        <h4>We offer you High-End standard features. find out how high our "standards" truly are.</h4>
                                    </div>
                                    <div className="bottom-info_box">
                                        <h1>Concierge Guidance</h1>
                                        <h4>we guide you through every step of the home building process, including design, selections and constant communication.</h4>
                                    </div>
                                </div>
                                <div className="bottom-info_row">
                                    <div className="bottom-info_box">
                                        <h1>Experienced craftsman</h1>
                                        <h4>A Site Supervisor & Master Carpenter to oversee your project who is intimately familiar with the construction progress of your home.</h4>
                                    </div>
                                    <div className="bottom-info_box">
                                        <h1>Outstanding Service</h1>
                                        <h4>we understand the value of consistent communication and we work hard to ensure the entire construction experience is extraordinary!</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <img src="/images/homes/WH.jpg" alt="home" className="home-intro_content3" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;

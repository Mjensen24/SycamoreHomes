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
                            <h1>Sycamore Custom Luxery Homes</h1>
                            <h4>Sycamore Custom Luxery Homes builds and Designs custom homes and Luxury Estates. Our highly experienced team has the know-how to achieve your vision.</h4>
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
                    <div className="home_container5">
                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                    </div>
                    <div className="home_container5">
                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                    </div>
                </div>
            </div>
            <div className="homepage-row">
                <div className="home-intro2">
                    <div className="home-intro_images">
                        <img src="/images/homes/luxhome4.jpg" alt="home" className="intro-image2" />
                        <img src="/images/homes/luxhome5.jpg" alt="home" className="intro-image2" />
                    </div>
                    <div className="content_container2">
                        <img src="/images/homes/WH.jpg" alt="home" className="home-intro_content2" />
                    </div>
                </div>
                <div className="home-intro3">
                    <div className="content_container3">
                        {/* <img src="/images/homes/WH.jpg" alt="home" className="home-intro_content3" /> */}
                    </div>
                    {/* <div className="home-intro_images2">
                        <img src="/images/homes/luxhome4.jpg" alt="home" className="intro-image3" />
                        <img src="/images/homes/luxhome5.jpg" alt="home" className="intro-image3" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Homepage;

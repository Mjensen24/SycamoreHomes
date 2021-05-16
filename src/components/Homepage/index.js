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
                    <div className="home_container2">
                        <img src="/images/homes/luxhome2.jpg" alt="home" className="home_image" />
                    </div>
                    <div className="home_container1">
                        <img src="/images/homes/luxhome3.jpg" alt="home" className="home_image" />
                    </div>
                </div>
                <div className="home-intro">
                    <div className="content_container">
                        <img src="/images/homes/WH.jpg" alt="home" className="home-intro_content" />
                    </div>
                    <div className="home-intro_images">
                        <img src="/images/homes/luxhome4.jpg" alt="home" className="intro-image" />
                        <img src="/images/homes/luxhome5.jpg" alt="home" className="intro-image" />
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
        </div>
    )
}

export default Homepage;

import React from 'react'
import "./index.css"

const Homepage = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-row">
                <div className="homepage-column">
                    <div className="home_container1">
                        <img src="/images/homes/homeimage.jpeg" alt="home" className="home_image" />
                    </div>
                    <div className="home_container2">
                        <img src="/images/homes/luxhome1.jpg" alt="home" className="home_image" />
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
                <div className="banner-content">
                    <h1>searching for the perfect lot?</h1>
                    <h3>we are ready to help you find the lot you're looking for.</h3>
                </div>
                <div className="banner"></div>
            </div>
        </div>
    )
}

export default Homepage;

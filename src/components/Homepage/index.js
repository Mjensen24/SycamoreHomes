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
                    <img src="/images/homes/WH.jpg" alt="home" className="home-intro_content" />
                    <div className="home-intro_images">
                        <img src="/images/homes/luxhome4.jpg" alt="home" className="intro-image" />
                        <img src="/images/homes/luxhome5.jpg" alt="home" className="intro-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;

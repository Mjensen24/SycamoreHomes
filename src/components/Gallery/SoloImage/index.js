import { useState } from "react"
import React from 'react'

const SoloImage = ({ plan }) => {

    const [isSmall, setIsSmall] = useState(true)

    return (
        <div key={plan} onClick={() => setIsSmall(!isSmall)} className={isSmall ? "grid-image" : "grid-image_large"} >
            <img src={plan} alt="home" />
        </div>
    )
}

export default SoloImage;

import React from 'react'
import "./index.css"
import { GoLocation } from 'react-icons/go';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-info_container">
                <h1>GET IN TOUCH</h1>
                <div className="contact-column_container">
                    <div className="contact-info_column left">
                        <GoLocation />
                        <div className="contact-info">
                            <h3>ADDRESS</h3>
                            <h4>Sycamore Custom Luxery Homes</h4>
                            <p>1234 Rolling Hill Road <br /> Frederick MD. 21701</p>
                        </div>
                    </div>
                    <div className="contact-info_column">
                        <GoLocation />
                        <div className="contact-info">
                            <h3>PHONE</h3>
                            <h4>Sycamore Custom Luxery Homes</h4>
                            <p>1234 Rolling Hill Road <br /> Frederick MD. 21701</p>
                        </div>
                    </div>
                    <div className="contact-info_column right">
                        <GoLocation />
                        <div className="contact-info">
                            <h3>EMAIL</h3>
                            <h4>Sycamore Custom Luxery Homes</h4>
                            <p>1234 Rolling Hill Road <br /> Frederick MD. 21701</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;

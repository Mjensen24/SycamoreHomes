import React from 'react'
import "./index.css"
import { GoLocation } from 'react-icons/go';
import { HiPhone, HiOutlineMail } from 'react-icons/hi';
import ContactForm from '../ContactForm';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-column_top">
                <div className="contact-form_container">
                    <h1>Leave us a message</h1>
                    <div className="contact-us_form">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className="contact-column_bottom">
                <div className="contact-us_container">
                    <h1>GET IN TOUCH</h1>
                    <h2>We are looking forward to starting a project with you!</h2>
                </div>
            </div>
            <div className="contact-info_container">
                <div className="contact-info_column">
                    <div className="contact-column_info">
                        <h3><HiPhone />PHONE</h3>
                        <h4>Bernice Printz <br /> Co-Owner/Designer</h4>
                        <p>301-748-1614</p>
                    </div>
                </div>
                <div className="contact-info_column">
                    <div className="contact-column_info">
                        <h3><GoLocation />ADDRESS</h3>
                        <h4>Sycamore Custom Luxery <br /> Homes</h4>
                        <p>1234 Rolling Hill Road <br /> Frederick MD. 21701</p>
                    </div>
                </div>
                <div className="contact-info_column">
                    <div className="contact-column_info">
                        <h3><HiOutlineMail />EMAIL</h3>
                        <h4>Bernice Printz <br /> Co-Owner/Designer</h4>
                        <p>Baberni2@aol.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;

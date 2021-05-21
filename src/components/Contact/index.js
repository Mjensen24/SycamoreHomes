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
                {/* <div className="contact-bunny_container">
                    <div className="contact-bunny">
                        <div className="bunny-icon"></div>

                    </div>
                </div> */}
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

{/* <div className="contact-info_container">
                <h1>GET IN TOUCH</h1>
                <div className="contact-column_container">
                    <div className="contact-info_column left">
                        <HiPhone />
                        <div className="contact-info">
                            <h3>PHONE</h3>
                            <h4>Bernice Printz <br /> Co-Owner/Designer</h4>
                            <p>301-748-1614</p>
                        </div>
                    </div>
                    <div className="contact-info_column">
                        <GoLocation />
                        <div className="contact-info">
                            <h3>ADDRESS</h3>
                            <h4>Sycamore Custom Luxery <br /> Homes</h4>
                            <p>1234 Rolling Hill Road <br /> Frederick MD. 21701</p>
                        </div>
                    </div>
                    <div className="contact-info_column right">
                        <HiOutlineMail />
                        <div className="contact-info">
                            <h3>EMAIL</h3>
                            <h4>Bernice Printz <br /> Co-Owner/Designer</h4>
                            <p>Baberni2@aol.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-us_container">
                <div className="contact-us_column_left">
                    <h1>Thank you</h1>
                    <h4>We appreciate your interest in Sycamore Custom Luxery Homes. For questions about building your dream home, available properties, <br /> lots, or to build on a lot you already own, simply fill out our form or call our office.</h4>
                    <h3>Bernice Printz <br /> Co-Owener/Designer</h3>
                    <img src="/images/bunny.jpg" alt="Bunny" />
                </div>
                <div className="contact-us_column_right">
                    <h1>Leave us a message</h1>
                    <div className="contact-us_form">
                        <ContactForm />
                    </div>
                </div>
            </div> */}

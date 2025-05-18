import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <p>valentinlyon205@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Phone</h4>
                                <p>+250 798 738 972</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-globe"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Website</h4>
                                <p>www.LyonDev.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form id="contactForm">
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="message" name="message" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" name="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-about">
                    <h3>About <span>Me</span></h3>
                    <p>I'm a passionate backend developer with a focus on creating efficient and scalable applications.</p>
                </div>
                <div className="footer-links">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Follow Me</h4>
                    <div className="social-icons">
                        <a href="https://github.com/Val-Antin1"><i className="fab fa-github"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/val_antin07/?hl=en"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 LyonDev. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

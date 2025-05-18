import React from 'react';

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Hi, I'm <span>Valentin</span></h1>
                        <p>I'm a skilled backend developer specializing in creating robust server-side applications. I transform complex business requirements into efficient, scalable backend solutions with clean code and thoughtful architecture.</p>
                        <a href="#contact" className="btn">Get In Touch</a>
                        <div className="social-icons">
                            <a href="https://github.com/Val-Antin1"><i className="fab fa-github"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/val_antin07/?hl=en"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="val.png" alt="Profile Image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

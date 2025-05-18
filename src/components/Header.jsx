import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <a href="#" className="logo">LyOn<span>dEv</span></a>
                    <ul className="nav-links">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

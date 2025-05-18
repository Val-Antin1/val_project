import React from 'react';

const Services = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="section-title">My Services</h2>
                <div className="services-container">
                    <div className="service-box">
                        <div className="service-icon">
                            <i className="fas fa-server"></i>
                        </div>
                        <h3 className="service-title">Backend Development</h3>
                        <p className="service-desc">I develop robust server-side applications with efficient database design, secure API architecture, and optimized performance.</p>
                    </div>
                    <div className="service-box">
                        <div className="service-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <h3 className="service-title">Database Design</h3>
                        <p className="service-desc">Creating optimized database structures that handle complex data relationships while ensuring performance and scalability.</p>
                    </div>
                    <div className="service-box">
                        <div className="service-icon">
                            <i className="fas fa-cloud"></i>
                        </div>
                        <h3 className="service-title">API Development</h3>
                        <p className="service-desc">Building secure, well-documented RESTful APIs that enable seamless integration between different systems and services.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

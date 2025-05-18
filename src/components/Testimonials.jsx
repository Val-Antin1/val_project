import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section">
            <div className="container">
                <h2 className="section-title">Testimonials</h2>
                <div className="testimonials-container">
                    <div className="testimonial-item">
                        <p className="testimonial-text">Working with this developer was an absolute pleasure. They took my vague ideas and transformed them into a beautiful, functional website that has significantly improved my business's online presence.</p>
                        <div className="testimonial-author">
                            <img src="profile.jpg" alt="Client" />
                            <h4 className="author-name">Eric Tech</h4>
                            <p className="author-position">CEO, Tech Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

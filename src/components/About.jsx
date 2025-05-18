import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-image">
                        <img src="about.jpg" alt="About Image" />
                    </div>
                    <div className="about-text">
                        <h3>Backend Developer & Software Engineer</h3>
                        <p>I am a passionate backend developer with 2+ years of experience in creating robust and scalable server-side applications. I love solving complex problems with clean and efficient code.</p>
                        <p>My journey in software development started when I was in college, and since then I've been continuously learning and adapting to new technologies. I believe in creating applications that not only perform reliably but also provide excellent scalability and security.</p>
                        <div className="skills">
                            <div className="skill-item">Php</div>
                            <div className="skill-item">Node.js</div>
                            <div className="skill-item">MongoDB</div>
                            <div className="skill-item">MYSQL</div>
                            <div className="skill-item">RESTful APIs</div>
                            <div className="skill-item">Laravel</div>
                            <div className="skill-item">Django</div>
                            <div className="skill-item">Python</div>
                            <div className="skill-item">Dart</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

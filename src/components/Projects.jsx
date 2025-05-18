import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-container">
                    <div className="project-card">
                        <img src="blog.jpg" alt="Project 1" className="project-img" />
                        <div className="project-overlay">
                            <h3 className="project-title">Blog Application</h3>
                            <div className="project-tech">
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MongoDB</span>
                            </div>
                            <div className="project-links">
                                <a href="#"><i className="fas fa-link"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src="task.png" alt="Project 2" className="project-img" />
                        <div className="project-overlay">
                            <h3 className="project-title">Task Management App</h3>
                            <div className="project-tech">
                                <span>Laravel</span>
                                <span>Blade</span>
                                <span>SQLITE</span>
                            </div>
                            <div className="project-links">
                                <a href="#"><i className="fas fa-link"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src="stock.jpg" alt="Project 3" className="project-img" />
                        <div className="project-overlay">
                            <h3 className="project-title">Stock Management App</h3>
                            <div className="project-tech">
                                <span>Php</span>
                                <span>Html</span>
                                <span>MySQL</span>
                            </div>
                            <div className="project-links">
                                <a href="#"><i className="fas fa-link"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="glass-card about-card">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-grid">
                        <div className="about-text">
                            <p>
                                I am a junior fullstack web developer currently expanding my skills in
                                modern web technologies. I enjoy building clean UI designs and
                                structured backend systems that solve real-world problems.
                            </p>
                            <div className="skills-grid">
                                <div className="skill-item">HTML5 / CSS3</div>
                                <div className="skill-item">JavaScript (ES6+)</div>
                                <div className="skill-item">React.js</div>
                                <div className="skill-item">Laravel</div>
                                <div className="skill-item">Tailwind CSS</div>
                                <div className="skill-item">Node.js</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

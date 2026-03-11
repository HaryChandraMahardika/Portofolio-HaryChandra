import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hi, I'm <br />
                        <span className="gradient-text">Hary Chandra</span>
                    </h1>
                    <p className="hero-subtitle">
                        Junior Fullstack Web Developer passionate about building
                        modern, responsive and impactful web applications.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Say Hello</a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-bg"></div>
                    <img src={profileImg} alt="Hary Chandra" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

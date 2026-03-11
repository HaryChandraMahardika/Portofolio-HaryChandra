import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-content">
                <h2 className="footer-title">Let's Connect</h2>
                <p className="footer-subtitle">
                    I'm currently looking for new opportunities. <br />
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="social-links">
                    <a href="https://github.com/HaryChandraMahardika" target="_blank" rel="noreferrer" className="social-icon">GitHub</a>
                    <a href="https://www.linkedin.com/in/hary-chandra-mahardika-144971b7/" target="_blank" rel="noreferrer" className="social-icon">LinkedIn</a>
                    <a href="https://Instagram.com/rychandika" target="_blank" rel="noreferrer" className="social-icon">Instagram</a>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Hary Chandra Mahardika. Built with React & Passion.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

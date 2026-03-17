import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Restaurant Landing Page',
        desc: 'Modern and responsive restaurant website with a focus on high-quality visuals.',
        liveDemo: 'https://task-project-website-restoran-simpl.vercel.app/',
        github: 'https://github.com/HaryChandraMahardika/Task-Project-Website-Restoran-Simple',
        tags: ['HTML', 'CSS', 'Responsive']
    },
    {
        title: 'Portfolio Website',
        desc: 'Personal portfolio website showcasing my works and professional journey.',
        liveDemo: 'https://portofolio-hary-chandra.vercel.app/',
        github: 'https://github.com/HaryChandraMahardika/Portofolio-HaryChandra',
        tags: ['React', 'CSS', 'Vite']
    },
    {
        title: 'Vidio.com Clone',
        desc: 'Simple landing page clone of Vidio.com to practice layout systems.',
        liveDemo: 'https://landing-page-vidio-com-99eb.vercel.app/',
        github: 'https://github.com/HaryChandraMahardika/Landing-Page-Vidio.com',
        tags: ['HTML', 'Tailwind']
    },
    {
        title: 'diStreaming Website',
        desc: 'Movie streaming UI website with dynamic movie lists and categorization.',
        liveDemo: 'https://fe-distreaming-harychandra.vercel.app/',
        github: 'https://github.com/HaryChandraMahardika/FE-diStreaming-Mini-Project',
        tags: ['JavaScript', 'API']
    },
    {
        title: 'Rental Booking System',
        desc: 'Fullstack rental system with multi-role dashboard and integrated payment gateway.',
        liveDemo: 'https://rental-book-delta.vercel.app/',
        github: 'https://github.com/HaryChandraMahardika/FI-Rental-Book-FE',
        tags: ['Laravel', 'React', 'MySQL']
    },
    {
        title: 'Mini Wallet',
        desc: 'Developed a comprehensive full-stack e-wallet platform designed to facilitate seamless balance top-ups and secure real-time fund transfers between users.',
        liveDemo: 'https://mini-wallet-harychandra.vercel.app/',
        github: 'https://github.com/HaryChandraMahardika/FE-MiniWallet',
        tags: ['Laravel', 'React', 'MySQL']
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Projects Showcase</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card project-card">
                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-links">
                                    <a href={project.liveDemo} target="_blank" rel="noreferrer" className="project-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        Live Demo
                                    </a>
                                    <a href={project.github} target="_blank" rel="noreferrer" className="project-btn github-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

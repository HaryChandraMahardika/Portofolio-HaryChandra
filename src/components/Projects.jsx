import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Restaurant Landing Page',
        desc: 'Modern and responsive restaurant website with a focus on high-quality visuals.',
        link: 'https://github.com/HaryChandraMahardika/Task-Project-Website-Restoran-Simple',
        tags: ['HTML', 'CSS', 'Responsive']
    },
    {
        title: 'Portfolio Website',
        desc: 'Personal portfolio website showcasing my works and professional journey.',
        link: 'https://github.com/HaryChandraMahardika/Portofolio-Website',
        tags: ['React', 'CSS', 'Vite']
    },
    {
        title: 'Vidio.com Clone',
        desc: 'Simple landing page clone of Vidio.com to practice layout systems.',
        link: 'https://github.com/HaryChandraMahardika/Landing-Page-Vidio.com',
        tags: ['HTML', 'Tailwind']
    },
    {
        title: 'Streaming Mini Website',
        desc: 'Movie streaming UI website with dynamic movie lists and categorization.',
        link: 'https://github.com/HaryChandraMahardika/FE-diStreaming-Mini-Project',
        tags: ['JavaScript', 'API']
    },
    {
        title: 'Rental Booking System',
        desc: 'Fullstack rental system with multi-role dashboard and integrated payment gateway.',
        link: 'https://github.com/HaryChandraMahardika/FI-Rental-Book-FE',
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
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="glass-card project-card">
                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-link">
                                    View Project <i className="arrow">→</i>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

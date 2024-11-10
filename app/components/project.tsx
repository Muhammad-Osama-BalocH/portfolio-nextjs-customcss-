import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and CSS animations.",
    link: "https://portfolio-osama1.vercel.app/"
  },
  {
    title: "Figma Design Portfolio",
    description: "I developed the Figma project using Next.js, creating a responsive, high-performance web application with fast rendering and built-in SEO optimization features.",
    link: "https://assignments4-figma-osama.vercel.app/"
  },
  {
    title: "HTML CSS Portfolio",
    description: "Portfolio Website: Created a personal portfolio using HTML, CSS, and JavaScript showcasing my technical skills and projects.",
    link: "https://personal-portfolio-by-muhammad-osama.vercel.app/"
  },
];

const Project = () => {
  return (
    <div className="project-section" id="projects">
      <h2 className="project-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

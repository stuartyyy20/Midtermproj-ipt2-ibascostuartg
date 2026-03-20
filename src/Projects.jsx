import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      role: "Sole Developer",
      description: "A responsive portfolio website built with React.js to showcase my skills, projects, and professional background. Features smooth scrolling navigation and modern UI design.",
      technologies: ["React.js", "JSX", "CSS3", "Responsive Design"]
    },
    {
      title: "Student Grade Calculator",
      role: "Frontend Developer",
      description: "A web application that helps students calculate their GPA and track academic progress. Implemented form validation and dynamic grade calculation logic.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"]
    },
    {
      title: "E-Commerce Product Page",
      role: "Full-Stack Developer (Academic Project)",
      description: "Built a product catalog with shopping cart functionality. Implemented RESTful API integration and state management for cart operations.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-role">Role: {project.role}</p>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
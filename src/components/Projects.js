import React from 'react';

const projectsData = [
  {
    name: "Marketing Web Site",
    description: "Strona do promowania aplikacji webowej do zarządzania ruchem sieci.",
    githubLink: "https://github.com/ParzY1/ProneWebApp.git",
    technologies: ["HTML", "CSS", "JavaScript"]
    
  },
 
  {
    name: "Cybersecurity Web Site",
    description: "Aplikacja do zarządzania ruchem sieci, poprzez DNS i filtrowanie.",
    githubLink: "https://github.com/ParzY1/ProneWebApp.git",
    technologies: ["HTML","JSON","CSS", "JavaScript"]
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projekty</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologie:</strong> {project.technologies.join(", ")}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">Zobacz na GitHubie</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaLink } from "react-icons/fa";


const projects = [
  {
    name: "Body Procoach Gym",
    image: "/images/bodypro.jpg",
    link: "https://bodyprocoach.com",
  },
  
  {
    name: "Sweat Wellness",
    image: "/images/sweat.webp",
    link: "https://sweatfitwellness.com",
  },
  
  {
    name: "Jumbo Holidays",
    image: "/images/jumboImage.jpg",
    link: "https://jumboholidayz.com",
  },
  {
    name: "Siprtc",
    image: "/images/siprtc.webp",
    link: "https://siprtc.io",
  },
];

const Projects = () => {
  return (
    <Fade direction="up" triggerOnce delay={200}>
    <section id="projects" className="projects-section centered-section">
      <h2 className="text-center">
        <span className="sub-heading-text">Projects</span>
      </h2>
      <p className="text-center nested-sub-heading">
        Some of my most recent projects
      </p>

      {/* Project Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />

            {/* Clickable Overlay */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="overlay"
            >
              <div className="overlay-content">
              <FaLink />
                <span className="project-name">{project.name}</span>
              </div>
            </a>

          </div>
        ))}
      </div>
    </section>
  </Fade>
  );
};

export default Projects;

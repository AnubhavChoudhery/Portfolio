import React from 'react';
import './index.css';
import { Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {[
              {
                title: "AI-Powered Job Search Assistant",
                description: "Engineered intelligent automation workflow to evaluate resume compatibility with ATS and generate role-specific interview preparation documents.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&auto=format&q=80",
                tech: ["Python", "Gradio", "IBM Watsonx", "Web Scraping"],
                github: "#"
              },
              {
                title: "LLM-Powered Questionnaire Generator",
                description: "AI-powered pipeline to generate structured questionnaires from YouTube videos using OpenAI-Whisper and Qwen 2.5.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&auto=format&q=80",
                tech: ["Python", "OpenAI-Whisper", "Qwen 2.5", "NumPy"],
                github: "#"
              },
              {
                title: "Encrypted Image Inference",
                description: "Implemented encrypted image inference using Deep Polynomial Networks with Microsoft SEAL for privacy-preserving ML.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format&q=80",
                tech: ["C++", "Microsoft SEAL", "Docker", "HTCondor"],
                github: "#"
              }
            ].map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <Github size={16} />
                      Code
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

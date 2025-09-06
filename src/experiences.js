import React from 'react';
import './index.css';

const Experiences = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div>
          {[
            {
              title: "Cybersecurity Analyst Intern",
              company: "Culligan International",
              period: "June 2025 - August 2025",
              description: "Automated Excel-based KPI process improving efficiency by 70%. Built real-time web scraping tool and AI-powered dashboard system for cybersecurity leadership using Llama3, Panel and Bokeh."
            },
            {
              title: "Undergraduate Researcher",
              company: "MLOPT Research Group",
              period: "February 2024 - Present",
              description: "Implemented encrypted image inference using Deep Polynomial Networks in C++ with Microsoft SEAL. Designed containerized Docker workflows and built custom singularity environments for HTCondor."
            },
            {
              title: "Treasurer",
              company: "Wisconsin Robotics",
              period: "September 2023 - May 2025",
              description: "Tripled camera output frame rate using GStreamer with H264 over UDP. Secured $20,000+ in sponsorship and led onboarding of 50+ new Software subteam members."
            }
          ].map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-number">
                {index + 1}
              </div>
              <div className="experience-content">
                <h3 className="experience-title">{job.title}</h3>
                <p className="experience-company">{job.company} • {job.period}</p>
                <p className="experience-description">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;

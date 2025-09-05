import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import './index.css'; 

const PersonalWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  //navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      colorClass: "blue",
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'Assembly', 'SystemVerilog', 'HTML/CSS', 'MATLAB', 'Git']
    },
    {
      title: "AI/ML & Data Science",
      colorClass: "purple",
      skills: ['PyTorch', 'Tensorflow', 'Keras', 'Scikit-learn', 'LangChain', 'Microsoft SEAL', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      title: "Web Development",
      colorClass: "green",
      skills: ['Flask', 'Django', 'Node.js', 'Express.js', 'React.js', 'jQuery', 'PostgreSQL']
    },
    {
      title: "Automation & DevOps",
      colorClass: "orange",
      skills: ['Docker', 'AWS', 'Azure', 'Selenium', 'JUnit', 'BeautifulSoup', 'Tmux', 'VSCode', 'GitHub']
    },
    {
      title: "Visualization & UI",
      colorClass: "pink",
      skills: ['Bokeh', 'Panel', 'Bootstrap', 'Figma', 'Gradio']
    }
  ];

  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            Anubhav Choudhery
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="nav-mobile-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav-mobile">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div>
            <img
              src="/Anubhav.jpg"
              alt="Profile"
              className="profile-img"
            />
          </div>
          
          <h1 className="hero-title">
            Anubhav Choudhery
          </h1>
          
          <p className="hero-subtitle">
            Computer Engineering & Computer Science Student
          </p>
          
          <p className="hero-description">
            Passionate about AI/ML, cybersecurity, and full-stack development. Currently pursuing a BS in Computer Engineering 
            and Computer Science at UW-Madison with experience in automated systems, encrypted computing, and intelligent applications.
          </p>
          
          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div>
            <p className="about-content">
              I'm a Computer Engineering and Computer Science student at the University of Wisconsin-Madison 
              with a passion for leveraging technology to solve complex problems. My experience spans from 
              cybersecurity automation to encrypted machine learning research.
            </p>
            <p className="about-content">
              Currently working as an Undergraduate Researcher in the MLOPT Research Group, focusing on 
              encrypted image inference using Deep Polynomial Networks. I've also gained valuable industry 
              experience as a Cybersecurity Analyst Intern at Culligan International.
            </p>
            <p className="about-content">
              When I'm not coding, you can find me leading Wisconsin Robotics as Treasurer, exploring new 
              AI/ML frameworks, or working on automation projects that make life easier.
            </p>
            <div className="about-buttons">
              <button className="btn-solid">
                <Download size={20} />
                Download Resume
              </button>
              <div className="btn-group">
                <a href="mailto:anubhavchoudhery@gmail.com" className="btn-outline">
                  <Mail size={20} />
                  Email
                </a>
                <a href="https://linkedin.com/in/anubhav-ch" className="btn-outline">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="skills-category">
              <h3 className={`category-title ${category.colorClass}`}>
                {category.title}
              </h3>
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <div className={`skill-icon ${category.colorClass}`}>
                      <span className={`skill-text ${category.colorClass}`}>
                        {skill.slice(0, 2)}
                      </span>
                    </div>
                    <p className={`skill-name ${category.colorClass}`}>
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Experience Section */}
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

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-description">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-links">
              <a href="mailto:anubhavchoudhery@gmail.com" className="contact-link">
                <Mail size={24} />
                <span>Email</span>
              </a>
              <a href="https://linkedin.com/in/anubhav-ch" className="contact-link">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/AnubhavChoudhery" className="contact-link">
                <Github size={24} />
                <span>GitHub</span>
              </a>
            </div>
            <button className="btn-primary">
              Say Hello
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 Anubhav Choudhery. Built with React & CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
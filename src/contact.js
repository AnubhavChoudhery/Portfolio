import React from 'react';
import './index.css';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-description">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-links">
              <a href="mailto:anubhavchoudhery@gmail.com" target = "_blank" className="contact-link">
                <Mail size={24} />
                <span>Email</span>
              </a>
              <a href="https://linkedin.com/in/anubhav-ch" target = "_blank" className="contact-link">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/AnubhavChoudhery" target = "_blank" className="contact-link">
                <Github size={24} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;

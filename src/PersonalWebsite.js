import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './index.css'; 
import Skills from './skills';
import Experiences from './experiences';
import Products from './products';
import Projects from './projects';
import About from './about';
import Contact from './contact';

const PersonalWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'products', label: 'Products' },
    { id: 'projects', label: 'Projects' },
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
    // Intersection Observer for section visibility
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          entry.target.classList.remove('section-hidden');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.add('section-hidden');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Nav scroll effect
      setIsNavScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className={`nav ${isNavScrolled ? 'nav-scrolled' : ''}`}>
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
              src="./Anubhav.png"
              alt="Profile"
              className="profile-img"
            />
          </div>
          
          <h1 className="hero-title">
            Anubhav Choudhery
          </h1>
          
        <p className="hero-description">
          Hello there!
        </p>
        <p className="hero-description">
          My name is Anubhav, and I'm an aspiring engineering professional with a strong background in Software Development and AI/ML. 
          I'm passionate about building scalable software solutions, especially ones powered by AI. 
          Alongside my software focus, I've also built a solid foundation in hardware systems and cybersecurity through hands-on coursework 
          and internship experience.
        </p>

          <button
            onClick={() => scrollToSection('about')}
            className="bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/*About*/}
      <About />

      {/*Skills*/}
      <Skills />

      {/*Experiences*/}
      <Experiences />

      {/*Products*/}
      <Products />

      {/*Projects*/}
      <Projects />

      {/*Contact*/}
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Anubhav Choudhery</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
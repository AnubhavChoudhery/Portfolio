import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { THEMES } from '../theme';

const SECTIONS = [
  { to: '/about', label: 'About', theme: THEMES.naboo },
  { to: '/interests', label: 'Areas of Interest', theme: THEMES.kamino },
  { to: '/skills', label: 'Skills', theme: THEMES.geonosis },
  { to: '/experience', label: 'Experience', theme: THEMES.clonewars },
  { to: '/products', label: 'Products', theme: THEMES.utapau },
  { to: '/projects', label: 'Projects', theme: THEMES.mustafar },
  { to: '/contact', label: 'Contact', theme: THEMES.tatooine },
];

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hero-avatar-wrap"
          >
            <img src={`${process.env.PUBLIC_URL}/Anubhav.png`} alt="Anubhav Choudhery" className="profile-img" />
          </motion.div>

          <motion.div
            className="glass-panel hero-panel"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hero-subtitle"
            >
              Hello there!
            </motion.p>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="hero-title"
            >
              Anubhav Choudhery
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hero-description"
            >
              I like building things from scratch. Sometimes that's a RISC-V processor or a custom PCB,
              sometimes a distributed system or an open-source library. Mostly I'm just into AI, systems,
              and making software that people actually use.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <Link to="/projects" className="btn-primary">View Work</Link>
              <Link to="/contact" className="btn-ghost">Get In Touch</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="home-map">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Chart a Course
          </motion.h2>

          <div className="home-map-grid">
            {SECTIONS.map((s, i) => (
              <motion.div
                key={s.to}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <Link to={s.to} className="home-map-card glass-panel">
                  <span className="home-map-label">{s.label}</span>
                  <span className="home-map-tagline" style={{ color: s.theme.accent }}>
                    {s.theme.tagline}
                  </span>
                  <ChevronRight size={18} className="home-map-arrow" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

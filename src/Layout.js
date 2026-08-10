import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { getTheme, applyTheme, withAlpha } from './theme';
import ThemeScene from './ThemeScene';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/interests', label: 'Interests' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/products', label: 'Products' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const location = useLocation();
  const theme = getTheme(location.pathname);

  const siteSpotlightRef = useRef(null);

  const pageTitle = NAV.find(n => n.to === location.pathname)?.label || '';

  const handleSiteMouseMove = useCallback((e) => {
    if (!siteSpotlightRef.current) return;
    siteSpotlightRef.current.style.background =
      `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, ${withAlpha(theme.accent, 0.08)}, transparent 42%)`;
  }, [theme]);

  useEffect(() => {
    applyTheme(theme);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, theme]);

  useEffect(() => {
    const handleScroll = () => setIsNavScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-root" onMouseMove={handleSiteMouseMove}>
      <AnimatePresence>
        <motion.div
          key={theme.key}
          className="theme-scene-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <ThemeScene themeKey={theme.key} />
        </motion.div>
      </AnimatePresence>

      <div ref={siteSpotlightRef} className="site-spotlight" />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`nav ${isNavScrolled ? 'nav-scrolled' : ''}`}
      >
        <div className="nav-container container">
          <Link to="/" className="nav-logo">Anubhav Choudhery</Link>

          <div className="nav-desktop">
            {NAV.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            className="nav-mobile-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="nav-mobile"
          >
            {NAV.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </motion.nav>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="page-main"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {location.pathname !== '/' && (
            <header className="page-banner">
              <h1 className="page-banner-title">{pageTitle}</h1>
              <p className="page-tagline">{theme.tagline}</p>
            </header>
          )}
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Anubhav Choudhery · May the Force be with you</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

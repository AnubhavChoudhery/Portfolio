import React from 'react';
import { motion } from 'framer-motion';
import './index.css';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="contact-content">
          <motion.p
            className="contact-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </motion.p>
          <div className="contact-links">
            <motion.a
              href="mailto:anubhavchoudhery@gmail.com"
              target="_blank"
              className="contact-link"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Mail size={24} />
              <span>Email</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/anubhav-ch"
              target="_blank"
              className="contact-link"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/AnubhavChoudhery"
              target="_blank"
              className="contact-link"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Github size={24} />
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

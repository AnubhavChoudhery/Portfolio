import React from 'react';
import './index.css';

const About = () => {
  return (
    <section id="about" className="section section-alt">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="glass-panel" style={{ padding: '2.5rem', maxWidth: '840px', margin: '0 auto' }}>
            <p className="about-content">
              I'm a rising senior at the University of Wisconsin-Madison doing a dual degree in Computer Engineering and Computer Science.
              My coursework has been a bit of everything: hardware (Digital Design, Embedded systems, Computer Architecture),
              software (Distributed Systems, Databases, Compilers, Operating Systems), and math behind AI.
            </p>
            <p className="about-content">
              I recently interned at KLA, where I got to build AI tooling that helps engineers and managers with their day-to-day work.
              Before this I've dabbled in ML research, spent a summer doing cybersecurity, and helped run an engineering student org
              club on campus. I like bouncing between hardware and software and picking up whatever a project throws at me.
            </p>
            <p className="about-content">
              Aside from my technical pursuits, I enjoy playing chess (<a href = "https://lichess.org/@/anubhav95" target="_blank">Challenge Me!</a>), 
              drums (Level/Grade 3 Trinity), ping pong (table tennis) and pickleball. My cinematic interests typically include action, 
              comedy and sci-fi movies with Mission Impossible and Star Wars being my favorite collections.
              These activities keep me balanced, sharpen my problem-solving skills while also improving quick thinking, and give me space to recharge creatively.
            </p>
          </div>
        </div>
      </section>
  );
};

export default About;

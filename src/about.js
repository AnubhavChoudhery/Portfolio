import React from 'react';
import './index.css';

const About = () => {
  return (
    <section id="about" className="section section-alt">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div>
            <p className="about-content">
              I'm currently pursuing an Undergraduate degree in Computer Engineering and Computer Science at the University of Wisconsin-Madison,
              where I'm undertaking diverse coursework (including future terms) spanning Hardware fundamentals 
              (Digital Design/VLSI, Embedded/Firmware systems, Computer Architecture), 
              Software Design (Distributed Systems, Programming Languages and Compilers, Operating Systems) and Advanced Mathematics
              for AI (Optimization Theory, Numerical Analysis).
            </p>
            <p className="about-content">
              I've also had the privilege to work in research on the crossroads of Machine Learning and Cybersecurity (within the MLOPT Research Group), and 
              lead multiple engineering student origanizations (Wisconsin Robotics, RoboKnights) with more than 40 members. My recent professional experience also 
              includes an internship as Cybersecurity Analyst at Culligan International, where I worked alongside the Global Cybersecurity team
              to build python-based tools for automating manual processes, reporting directly to the global CISO. 
            </p>
            <p className="about-content">
              Aside from my technical pursuits, I enjoy playing chess (<a href = "https://lichess.org/@/anubhav95" target="_blank">Challenge Me!</a>), 
              drums (learnt up to Grade 3), ping pong (table tennis) and pickleball. My cinematic interests typically include action, 
              comedy and sci-fi movies with Mission Impossible and Star Wars being my favorite collections.
              These activities keep me balanced, sharpen my problem-solving skills while also improving quick thinking, and give me space to recharge creatively.
            </p>
          </div>
        </div>
      </section>
  );
};

export default About;

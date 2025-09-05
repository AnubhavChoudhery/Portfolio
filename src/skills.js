import React from 'react';
import './index.css'; 

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      color: "#60a5fa", // blue-400 equivalent
      gradient: "linear-gradient(to right, rgba(59,130,246,0.2), rgba(168,85,247,0.2))",
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'Assembly', 'SystemVerilog', 'HTML/CSS', 'MATLAB', 'Git']
    },
    {
      title: "AI/ML & Data Science",
      color: "#a78bfa", 
      gradient: "linear-gradient(to right, rgba(168,85,247,0.2), rgba(236,72,153,0.2))",
      skills: ['PyTorch', 'Tensorflow', 'Keras', 'Scikit-learn', 'LangChain', 'Microsoft SEAL', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      title: "Web Development",
      color: "#34d399",
      gradient: "linear-gradient(to right, rgba(52,211,153,0.2), rgba(59,130,246,0.2))", 
      skills: ['Flask', 'Django', 'Node.js', 'Express.js', 'React.js', 'jQuery', 'PostgreSQL']
    },
    {
      title: "Automation & DevOps",
      color: "#fb923c",
      gradient: "linear-gradient(to right, rgba(251,146,60,0.2), rgba(239,68,68,0.2))",
      skills: ['Docker', 'AWS', 'Azure', 'Selenium', 'JUnit', 'BeautifulSoup', 'Tmux', 'VSCode', 'GitHub']
    },
    {
      title: "Visualization & UI",
      color: "#ec4899",
      gradient: "linear-gradient(to right, rgba(236,72,153,0.2), rgba(168,85,247,0.2))",
      skills: ['Bokeh', 'Panel', 'Bootstrap', 'Figma', 'Gradio']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        {skillCategories.map((category) => (
          <div key={category.title} className="skills-category">
            <h3 style={{ color: category.color }}>
              {category.title}
            </h3>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div key={skill} className="skill-item">
                  {/* Gradient background applied here */}
                  <div 
                    className="skill-icon"
                    style={{ 
                      background: category.gradient,
                      color: category.color,
                      border: `2px solid ${category.color}`,
                      borderRadius: "50%",
                      padding: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span className="skill-text">
                      {skill.slice(0, 2)}
                    </span>
                  </div>
                  <p className="skill-name" style={{ color: category.color }}>
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';

const Skills = () => {
  const programmingLanguages = [
    'JavaScript (ES6+)',
    'Python',
    'Java',
    'HTML5 & CSS3',
    'SQL'
  ];

  const frameworks = [
    'React.js',
    'Node.js',
    'Express.js',
    'Bootstrap',
    'Tailwind CSS'
  ];

  const tools = [
    'Git & GitHub',
    'VS Code',
    'MongoDB',
    'Postman',
    'Vercel/Netlify'
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Programming Languages</h3>
          <ul className="skill-list">
            {programmingLanguages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="skill-card">
          <h3>Frameworks & Libraries</h3>
          <ul className="skill-list">
            {frameworks.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="skill-card">
          <h3>Tools & Platforms</h3>
          <ul className="skill-list">
            {tools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
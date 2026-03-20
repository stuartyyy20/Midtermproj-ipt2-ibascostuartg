import React from 'react';
import hero from './assets/hero.png';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="photo-container">
          <img 
            src={hero} 
            alt="Profile" 
            className="profile-photo"
          />
        </div>
        <div className="about-text">
          <h3>Personal Introduction</h3>
          <p>
            I am a passionate computer science student with a strong interest in building 
            modern web applications. I enjoy solving complex problems and creating 
            user-friendly interfaces that make a difference.
          </p>
          
          <h3>Biggest Accomplishment</h3>
          <p>
            <strong>Developed a Task Management System</strong> for our school's 
            administration that reduced paperwork by 60% and improved communication 
            between departments. This project taught me the importance of user-centered 
            design and efficient database management.
          </p>
          
          <h3>Area of Interest</h3>
          <p>
            I am particularly interested in <strong>Full-Stack Web Development</strong> 
            and <strong>Artificial Intelligence integration</strong>. I love working 
            on the frontend to create beautiful interfaces, but also enjoy building 
            robust backend systems and APIs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
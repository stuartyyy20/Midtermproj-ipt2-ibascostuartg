import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">MyPortfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#reflection">Reflection</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
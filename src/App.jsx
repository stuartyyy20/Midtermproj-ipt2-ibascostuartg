import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Reflection from './Reflection';
import Footer from './footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Reflection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
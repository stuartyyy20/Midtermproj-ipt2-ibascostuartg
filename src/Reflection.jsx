import React from 'react';

const Reflection = () => {
  return (
    <section id="reflection" className="reflection">
      <h2 className="section-title">Reflection</h2>
      <div className="reflection-content">
        <div className="reflection-card">
          <h3>Concepts Learned in Full-Stack Development & React.js</h3>
          <ul>
            <li>
              <strong>Component-Based Architecture:</strong> Understanding how to break down 
              UI into reusable, modular components that manage their own state and logic.
            </li>
            <li>
              <strong>JSX Syntax:</strong> Learning how to write HTML-like code within 
              JavaScript, making component structure more intuitive and readable.
            </li>
            <li>
              <strong>React Hooks:</strong> Mastering useState and useEffect for managing 
              state and side effects in functional components without class-based syntax.
            </li>
            <li>
              <strong>Props and Data Flow:</strong> Understanding unidirectional data flow 
              and how to pass data between parent and child components.
            </li>
            <li>
              <strong>Client-Side Routing:</strong> Implementing navigation in single-page 
              applications using React Router.
            </li>
            <li>
              <strong>Full-Stack Integration:</strong> Connecting frontend React applications 
              with backend APIs and databases to create complete web solutions.
            </li>
          </ul>
        </div>

        <div className="reflection-card">
          <h3>Concepts I Want to Learn Further</h3>
          <ul>
            <li>
              <strong>Advanced State Management:</strong> Deepening my knowledge of Redux or 
              Context API for managing complex application state in larger projects.
            </li>
            <li>
              <strong>TypeScript with React:</strong> Adding type safety to React applications 
              to catch errors early and improve code maintainability.
            </li>
            <li>
              <strong>Server-Side Rendering (SSR):</strong> Learning Next.js for better 
              SEO, performance, and initial page load optimization.
            </li>
            <li>
              <strong>Testing React Applications:</strong> Implementing unit tests with 
              Jest and React Testing Library to ensure code reliability.
            </li>
            <li>
              <strong>Authentication & Security:</strong> Implementing JWT authentication, 
              OAuth, and security best practices in full-stack applications.
            </li>
            <li>
              <strong>Cloud Deployment:</strong> Mastering AWS, Docker, and CI/CD pipelines 
              for professional deployment workflows.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Reflection;
import React from 'react';
import { Link } from 'react-router-dom';
import './styling/Projects.css';
import daawaImg from '../assets/Daawa.png';
import catImg from '../assets/sleeping-cat.png';
import gameImg from '../assets/2048.jpg';
import quantImg from '../assets/quantimg.jpg';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <img src={daawaImg} alt="RSVP" className="project-image" />
          <Link to="/projects/Wedding-RSVP" className="project-link">Daawa (SaaS Company)</Link>
        </div>
        <div className="project-card">
          <img src={catImg} alt="Portfolio Chatbot" className="project-image" />
          <a 
            href="https://github.com/moshehto/Portfolio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
          >
            Portfolio Chatbot Website
          </a>
        </div>
        <div className="project-card">
          <img src={gameImg} alt="2048 Game" className="project-image" />
          <a 
            href="https://github.com/moshehto/2048-Game" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
          >
            2048 Game
          </a>
        </div>
        <div className="project-card">
          <img src={quantImg} alt="Data Science" className="project-image" />
          <Link to="/projects/Quant" className="project-link">Data Science</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

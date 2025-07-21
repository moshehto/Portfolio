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
          <img src={catImg} alt="RSVP" className="project-image" />
          <Link to="/projects/GPTPortfolio" className="project-link">Portfolio Chatbot Website</Link>
        </div>
        {/* add more cards as needed */}
        <div className="project-card">
          <img src={gameImg} alt="RSVP" className="project-image" />
          <Link to="/projects/Game2048" className="project-link">2048 Game</Link>
        </div>
        <div className="project-card">
          <img src={quantImg} alt="RSVP" className="project-image" />
          <Link to="/projects/Quant" className="project-link">Data Science</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './styling-comp/footer.css';
import catImg from '../assets/sleeping-cat.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <img src={catImg} alt="Profile" className="footer-image" />
          <h2 className="footer-name">Mo Shehto</h2>
        </div>

        {/* Columns */}
        <div className="footer-columns">
          <div>
            <h3>Projects</h3>
            <ul>
              <li><Link to="/projects/wedding-rsvp" className="footer-link">Wedding RSVP System</Link></li>
              <li><Link to="/projects/GPTPortfolio" className="footer-link">GPT Portfolio Chatbot</Link></li>
              <li><Link to="/projects/Quant" className="footer-link">Data Science</Link></li>
              <li><Link to="/projects/Game" className="footer-link" >2048 Game</Link></li> 
            </ul>
          </div>
          <div>
            <h3>Pages</h3>
            <ul>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/projects" className="footer-link">Projects</Link></li>
              <li><Link to="/resume" className="footer-link">Resume</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Socials</h3>
            <ul>
              <li><a href="mailto:mohamedshehto28@gmail.com" className="footer-link" target="_blank" rel="noopener noreferrer">Email</a></li>
              <li><a href="https://github.com/moshehto" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/mohamed-shehto-02a421278" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

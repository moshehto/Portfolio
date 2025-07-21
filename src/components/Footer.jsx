// components/Footer.js
import React from 'react';
import './styling-comp/footer.css'; // You'll style it here
import catImg from '../assets/sleeping-cat.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Name and Photo */}
        <div className="footer-brand">
          <img src={catImg} alt="Profile" className="footer-image" />
          <h2 className="footer-name">Mo Shehto</h2>
        </div>

        {/* Footer Columns */}
        <div className="footer-columns">
          <div>
            <h3>Projects</h3>
            <ul>
              <li>Wedding RSVP System</li>
              <li>GPT Portfolio Chatbot</li>
              <li>Internship Tracker</li>
            </ul>
          </div>
          <div>
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Resume</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3>Socials</h3>
            <ul>
              <li>Email</li>
              <li>GitHub</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

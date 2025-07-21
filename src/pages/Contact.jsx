import React from 'react';
import './styling/Contact.css';
import myImg from '../assets/roomcoding.png';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-wrapper">

        {/* LEFT: Image */}
        <div className="contact-image-container">
          <img src={myImg} alt="Portrait" />
        </div>

        {/* RIGHT: Text */}
        <div className="contact-container">
          <h2>Let us Connect</h2>
          <p>
            I am always open to discussing software engineering opportunities, tech collaborations, or just chatting about projects.  
            The best way to reach me is via <strong>LinkedIn Messages</strong>, but you can also shoot me an email at 
            <a href="mailto:mohamedshehto28@gmail.com" target="_blank" rel="noopener noreferrer" className="email-link">
              mohamedshehto28@gmail.com
            </a>. I look forward to connecting with you!
          </p>

          <div className="contact-links-vertical">
            <a href="https://www.linkedin.com/in/mohamed-shehto-02a421278" className="contact-button" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
            <a href="https://github.com/moshehto" className="contact-button" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Contact;

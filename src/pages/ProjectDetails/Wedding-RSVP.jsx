import React from 'react';
import '../styling/project-pages.css'
import daawaImg from '../../assets/Daawa.png';

const WeddingRSVP = () => {
  return (
    <main className="project-container">
      <h1 className="project-title">Wedding RSVP System</h1>

      <div className="project-tags">
        <span className="tag language">Technology Used: Python, JavaScript, AWS, Meta Business API, Google Cloud</span>
        <span className="tag published">Last Updated: July 2025</span>
        <a
          className="tag github"
        >
          GITHUB: N/A
        </a>
      </div>

      <img src={daawaImg} alt="RSVP Workflow Diagram" className="project-image" />

      <p className="project-description">
      This is a wedding invitation + RSVP system that automates the experience using a custom backed pipeline and integrates with WhatsApp, Google Sheets.
      The client starts by completing a shared Google Sheet, entering the names and phone numbers of the guests. 
      This is then leveraged to send to each guest on a WhatsApp a ‘Save the Date’ message highlighting an interactive 
      video production with a professional look and feel. A personalized RSVP invitation is then sent to 
      all named guests as and when the event organiser is ready. Guest is then able to reply directly via WhatsApp with Yes or No.
      Guests who decline get a polite thank-you note.
      Guests who do accept will automatically receive an unique QR code ticket, created on the spot and immediately sent back to guests via WhatsApp.

      <br /><br />
      <em>*Code cannot be shared as it is used for business purposes*</em>
      </p>
    </main>
  );
};

export default WeddingRSVP;

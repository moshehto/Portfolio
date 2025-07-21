import React from 'react';
import './styling/Resume.css';
const base = import.meta.env.BASE_URL;

export default function Resume() {
  return ( <div className="resume-page">
      <div className="resume-container">
        <h1 className="resume-heading">My Resume</h1>

  

        <iframe
          src={`${base}Mo_Shehto_Resume.pdf`}
          className="resume-viewer"
          title="Mo Sheheto Resume"
        ></iframe>



        <a href={'${base}Mo_Shehto_Resume.pdf'} download="Mo_Shehto_Resume.pdf">
          <button className="download-btn">Download PDF</button>
        </a>
      </div>
    </div>

  );
}





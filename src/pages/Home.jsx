import React from 'react';
import Chatbot from '../components/Chatbot';
import './styling/home.css';

console.log("Home component loaded");

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm Mohamed Shehto, a software engineering student passionate about building cool things.
          Ask MoBot anything about my projects, experience, or journey 👇
        </p>
      </div>
      <Chatbot />
    </main>
  );
}

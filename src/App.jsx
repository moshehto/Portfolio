import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import WeddingRSVP from './pages/ProjectDetails/Wedding-RSVP';
import GPTPortfolio from './pages/ProjectDetails/GPTPortfolio';
import Quant from './pages/ProjectDetails/Quant';
import Game2048 from './pages/ProjectDetails/Game2048';

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/wedding-rsvp" element={<WeddingRSVP />} />
            <Route path="/projects/GPTPortfolio" element={<GPTPortfolio />} />
            <Route path="/projects/2048Game" element={<Game2048 />} />
            <Route path="/projects/Quant" element={<Quant />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

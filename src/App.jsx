import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import WeddingRSVP from './pages/ProjectDetails/Wedding-RSVP';
import GPTPortfolio from './pages/ProjectDetails/GPTPortfolio';
import Quant from './pages/ProjectDetails/Quant';
import Game from './pages/ProjectDetails/Game';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <Router>
      <div className="page-wrapper" style={{ position: 'relative', minHeight: '100vh' }}>
        <Navbar />

        {/* ✅ Main content section */}
        <main className="main-content" style={{ position: 'relative' }}>
          
          {/* ✅ Particle background inside main-content, above background but below content */}
          <ParticlesBackground />

          {/* ✅ Actual page content, above the particles */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/wedding-rsvp" element={<WeddingRSVP />} />
              <Route path="/projects/GPTPortfolio" element={<GPTPortfolio />} />
              <Route path="/projects/Game" element={<Game/>} />
              <Route path="/projects/Quant" element={<Quant />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

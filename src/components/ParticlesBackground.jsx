import React from 'react';
import Particles from './Particles'; // ✅ ADD THIS LINE
import './styling-comp/particles.css';

export default function ParticlesBackground() {
  return (
    <Particles
      particleColors={['#ffffff', '#eeeeee']}
      particleCount={200}
      particleSpread={10}
      speed={0.15}
      particleBaseSize={80}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
      className="particles-container"
    />
  );
}

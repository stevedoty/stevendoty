import React from 'react';

const Hero = () => {
  return (
    <div className="Hero">
        <div id="hero-left" className="hero-background"></div>
        <div id="hero-right" className="hero-background"></div>
        <div id="hero-overlay">
          <h1 id="hero-overlay-left">Welcome</h1>
          <div id="hero-overlay-right"></div>
        </div>
    </div>
  );
}

export default Hero;

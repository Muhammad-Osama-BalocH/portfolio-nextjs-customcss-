"use client"
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [loopIndex, setLoopIndex] = useState(0);
  const professions = ["Frontend Developer", "UI/UX Enthusiast", "TYPESCRIPT Expert"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoopIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [professions.length]);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hello, I'm Muhammad Osama</h1>
        <p className="hero-subtitle">{professions[loopIndex]}</p>
        <button className="hero-button" id="project">View My Work</button>
      </div>
      <div className="hero-image-wrapper">
        <img 
          src="/osama.png" 
          alt="Developer" 
          className="hero-image"
        />
        <div className="image-border"></div>
      </div>
    </div>
  );
};

export default Hero;

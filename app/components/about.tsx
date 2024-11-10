import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-image-wrapper">
        <Image 
          src="/osama.png" 
          alt="About Me" 
          className="about-image"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Hi, I&apos;m Muhammad Osama, a passionate Frontend Developer dedicated to creating elegant and user-friendly web experiences.
          With expertise in modern technologies, I bring a mix of creativity and technical skill to every project.
        </p>
        <h3 className="skills-title">Skills</h3>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS & SASS</li>
          <li>UI/UX Design</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

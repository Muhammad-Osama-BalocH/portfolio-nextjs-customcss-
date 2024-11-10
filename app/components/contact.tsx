// components/Contact.js
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section" id='contact'>
      <h2 className="contact-title">My Contact</h2>
      <p className="contact-description">
        Feel free to reach out if you'd like to connect, collaborate, or just say hello!
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" required />
        <input type="email" placeholder="Your Email" className="contact-input" required />
        <textarea placeholder="Your Message" className="contact-textarea" required></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
      <div className="contact-social">
        <a href="https://github.com/Muhammad-Osama-BalocH" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub size={24} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100021606721345" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-osama-gabol-a0688328b/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default Contact;

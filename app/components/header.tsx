"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" id="home">
      <div className="logo">MyPortfolio</div>
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="#home" className="nav-link">Home</Link>
        <Link href="#about" className="nav-link">About</Link>
        <Link href="#projects" className="nav-link">Projects</Link>
        <Link href="#contact" className="nav-link">Contact</Link>
        <a href="/cv.pdf.png" className="nav-link cv-download">Download CV</a>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;

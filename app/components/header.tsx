"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" id='home'>
      <div className="logo">MyPortfolio</div>
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
      <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
        <Link href="/cv.pdf.png" className='nav-link'>download cv</Link>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;

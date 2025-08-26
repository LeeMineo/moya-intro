import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header className="intro-header">
      <nav>
        <ul className="anchor-links">
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#community-highlights">Community Highlights</a></li>
          <li><a href="#plans-pricing">Plans & Pricing</a></li>
          <li><a href="#enjoy-services">Enjoy our services</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>RunForDate</h2>
        </div>
        <div className="footer-bottom">
        <p>© 2025 RunForDate. All Rights Reserved.</p>
      </div>
        <div className="footer-social">
          {/* <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a> */}
          <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <span>© {new Date().getFullYear()} MOYA</span>
        <span className="dot">•</span>
        <a href="#hero">맨 위로</a>
        <span className="dot">•</span>
        <a href="mailto:team@moya.example">문의</a>
      </div>

      <style jsx>{`
        .footer {
          padding: 40px 20px;
          background: #0a0f17;
          border-top: 1px solid #1f2a3a;
          color: #9fb3d1;
          text-align: center;
        }
        .footer-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .footer a {
          color: #e9f1ff;
          text-decoration: none;
          font-weight: 500;
        }
        .footer a:hover {
          text-decoration: underline;
        }
        .dot {
          opacity: 0.6;
        }
      `}</style>
    </footer>
  );
}

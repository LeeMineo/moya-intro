import React from 'react';
import './styles/Intro.css';

function Intro() {
  return (
    <section className="intro-content" id="intro">
      <img src="/assets/images/intro.jpg" alt="Running Background" className="intro-background" />
      <div className="intro-text">
        <h1>Run For Date</h1>
        <p>건강한 라이프스타일, 자연스러운 만남의 시작</p>
      </div>
      <div className="app-logos">
        <img src="/assets/logo/app-store-logo.png" alt="App Store" className="app-logo" />
        <img src="/assets/logo/google-play-logo.png" alt="Google Play" className="app-logo" />
      </div>
    </section>
  );
}

export default Intro;

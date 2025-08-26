import React from 'react';
import './styles/HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <h2 className="section-title">런포데이트, 이렇게 사용하세요!</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-icon">📥</div>
          <h3 className="step-title">Step 1</h3>
          <p className="step-description">앱 다운로드 및 가입</p>
        </div>
        <div className="step">
          <div className="step-icon">🎯</div>
          <h3 className="step-title">Step 2</h3>
          <p className="step-description">관심사 및 운동 목표 설정</p>
        </div>
        <div className="step">
          <div className="step-icon">🏃‍♂️</div>
          <h3 className="step-title">Step 3</h3>
          <p className="step-description">러닝 시작 및 매칭 경험</p>
        </div>
        <div className="step">
          <div className="step-icon">💞</div>
          <h3 className="step-title">Step 4</h3>
          <p className="step-description">친구 혹은 이성과의 만남</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

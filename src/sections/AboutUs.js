import React from 'react';
import './styles/AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us-section" id="about-us">
      <div className="about-us-content">
        <div className="about-us-text">
          <h2 className="about-us-title">런포데이트란?</h2>
          <p className="about-us-description">
            운동과 만남, 두 가지를 한 번에! <br />
            러닝과 소셜 네트워크를 결합한 독특한 플랫폼입니다.
          </p>
          <p className="about-us-mission">
            우리의 미션은 사람들에게 건강한 삶과 소중한 만남을 선사하는 것입니다.  
          </p>
        </div>
        <div className="about-us-visual">
          <img 
            src="/assets/images/about-us.jpg" 
            alt="About Us Visual" 
            className="about-us-image"
          />
        </div>
      </div>
      {/* <div className="about-us-timeline">
        <h3 className="timeline-title">앱 개발 타임라인</h3>
        <ul className="timeline-list">
          <li className="timeline-item">
            <span className="timeline-icon">🚀</span>
            <p>아이디어 구상</p>
          </li>
          <li className="timeline-item">
            <span className="timeline-icon">💡</span>
            <p>앱 개발 및 프로토타입</p>
          </li>
          <li className="timeline-item">
            <span className="timeline-icon">🎉</span>
            <p>베타 출시 및 피드백 수집</p>
          </li>
          <li className="timeline-item">
            <span className="timeline-icon">🌟</span>
            <p>최종 서비스 런칭</p>
          </li>
        </ul>
      </div> */}
    </section>
  );
}

export default AboutUs;

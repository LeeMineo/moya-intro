import React from 'react';
import './styles/CTA.css';

function CTA() {
  return (
    <section className="cta-section" id="enjoy-services">
      <div className="cta-content">
        <h2 className="cta-title">지금 바로 시작하세요!</h2>
        <p className="cta-description">
          건강한 삶과 새로운 만남을 경험할 준비가 되었나요?<br />
          런포데이트로 첫 걸음을 내딛어보세요.
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary">앱 다운로드</button>
          <button className="cta-button secondary">서비스 소개 보기</button>
        </div>
      </div>
    </section>
  );
}

export default CTA;

// src/sections/HowItWorks.jsx
import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how" className="how-section">
      <div className="container">
        <h2 className="how-title">작동 방식</h2>
        <p className="how-sub">MOYA가 어떻게 땀과 혈을 구분하고 교체 타이밍을 알려주는지 확인하세요.</p>

        <div className="steps-grid">
          <article className="step">
            <div className="step-no">1</div>
            <h3>2분 기준선 학습</h3>
            <p>착용 후 약 2분 동안 현재 환경과 개인차를 반영해 자동 캘리브레이션합니다.</p>
          </article>

          <article className="step">
            <div className="step-no">2</div>
            <h3>땀 신호 억제</h3>
            <p>센서 한 구역이 잠깐 반응했다 사라지면 땀 가능성으로 판단해 알림을 무시합니다.</p>
          </article>

          <article className="step">
            <div className="step-no">3</div>
            <h3>예측형 교체 알림</h3>
            <p>반응이 퍼지거나 지속되면 교체 예고, 전파 속도가 빠르면 즉시 교체 알림을 줍니다. 또한 1→2구역 전파 시간을 활용해 <strong>ETA</strong>를 계산해 미리 알려줍니다.</p>
          </article>
        </div>
      </div>

      <style jsx>{`
        .how-section {
          padding: 100px 20px;
          background: #0a0f17;
          color: #e9f1ff;
        }
        .how-title {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 10px;
        }
        .how-sub {
          color: #9fb3d1;
          text-align: center;
          margin-bottom: 40px;
        }
        .steps-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          max-width: 1000px;
          margin: 0 auto;
        }
        .step {
          background: #111a27;
          border: 1px solid #1f2a3a;
          border-radius: 16px;
          padding: 20px;
        }
        .step-no {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(180deg, #5aa7ff, #7bd5ff);
          color: #021225;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          margin-bottom: 10px;
        }
        .step h3 {
          font-size: 1.2rem;
          margin: 0 0 6px;
        }
        .step p {
          color: #9fb3d1;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
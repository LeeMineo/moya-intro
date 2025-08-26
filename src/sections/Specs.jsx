// src/sections/Specs.jsx
import React from 'react';

export default function Specs() {
  return (
    <section id="specs" className="specs-section">
      <div className="container">
        <h2 className="specs-title">시제품 기능</h2>
        <p className="specs-sub">MOYA 시제품이 제공하는 하드웨어, 알고리즘, 모바일 앱 기능을 확인하세요.</p>

        <div className="specs-grid">
          <article className="spec-card">
            <div className="spec-icon">HW</div>
            <h3>하드웨어</h3>
            <p>ESP32 DevKitC + 3구역 젖음 센서 어레이, 5 Hz 측정, 자동 기준선 & 히스테리시스, BLE 통신, LED/버튼 피드백.</p>
          </article>

          <article className="spec-card">
            <div className="spec-icon">ALG</div>
            <h3>온디바이스 알고리즘</h3>
            <p>기울기(Δ), 지속시간(T), 전파지연(τ), 활성 구역 수(N) 특징값을 이용해 규칙 기반 분류(무시/예고/즉시 교체). 1→2구역 전파시간으로 ETA 계산.</p>
          </article>

          <article className="spec-card">
            <div className="spec-icon">APP</div>
            <h3>모바일 앱</h3>
            <p>BLE 연결을 통해 상태 & ETA 대시보드, 교체 이력 저장. 접근성 옵션(큰 버튼/고대비), 오프라인 기본 동작.</p>
          </article>
        </div>

        <p className="specs-note">* MOYA는 의료 진단기기가 아니며 생활 보조 알림 용도입니다.</p>
      </div>

      <style jsx>{`
        .specs-section {
          padding: 100px 20px;
          background: #0e1623;
          color: #e9f1ff;
          text-align: center;
        }
        .specs-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .specs-sub {
          color: #9fb3d1;
          margin-bottom: 40px;
        }
        .specs-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          max-width: 1100px;
          margin: 0 auto 30px;
        }
        .spec-card {
          background: #111a27;
          border: 1px solid #1f2a3a;
          border-radius: 16px;
          padding: 24px;
          text-align: left;
        }
        .spec-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(180deg, #5aa7ff, #7bd5ff);
          color: #021225;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .spec-card h3 {
          margin: 0 0 8px;
          font-size: 1.2rem;
        }
        .spec-card p {
          color: #9fb3d1;
          margin: 0;
          line-height: 1.5;
        }
        .specs-note {
          font-size: 0.9rem;
          color: #9fb3d1;
        }
      `}</style>
    </section>
  );
}
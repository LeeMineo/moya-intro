// src/sections/FAQ.jsx
import React from 'react';

export default function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2 className="faq-title">자주 묻는 질문</h2>

        <div className="faq-list">
          <details className="faq-item">
            <summary>MOYA는 의료기기인가요?</summary>
            <p>아니요. MOYA는 의료 진단기기가 아니며, 생활 보조 알림을 제공하는 시제품입니다.</p>
          </details>

          <details className="faq-item">
            <summary>프라이버시는 어떻게 보호되나요?</summary>
            <p>MOYA는 기본적으로 오프라인에서 동작하며, 최소한의 데이터만 처리합니다. 외부 서버로 민감한 정보가 전송되지 않습니다.</p>
          </details>

          <details className="faq-item">
            <summary>소개 영상은 어떻게 제공되나요?</summary>
            <p>YouTube 임베드 또는 자체 호스팅 mp4 파일을 사용할 수 있습니다. 사용 환경에 맞게 선택하세요.</p>
          </details>

          <details className="faq-item">
            <summary>앱은 어떤 기기에서 사용할 수 있나요?</summary>
            <p>Android와 iOS 모두 지원합니다. APK 사이드로드를 통해 일부 안드로이드 기기에도 설치할 수 있습니다.</p>
          </details>
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          padding: 100px 20px;
          background: #0e1623;
          color: #e9f1ff;
        }
        .faq-title {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 40px;
        }
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: grid;
          gap: 16px;
        }
        .faq-item {
          background: #111a27;
          border: 1px solid #1f2a3a;
          border-radius: 12px;
          padding: 16px;
        }
        .faq-item summary {
          cursor: pointer;
          font-weight: 600;
          font-size: 1.1rem;
        }
        .faq-item p {
          margin-top: 10px;
          color: #9fb3d1;
        }
      `}</style>
    </section>
  );
}

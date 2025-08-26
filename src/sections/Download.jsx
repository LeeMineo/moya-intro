// src/sections/Download.jsx
import React from 'react';

export default function Download() {
  const APP_STORE_URL = "https://apps.apple.com/app/idYOUR_APP_ID"; // TODO: 교체
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=YOUR_PACKAGE"; // TODO: 교체
  const DIRECT_APK_URL = "/assets/moya.apk"; // TODO: APK 파일 경로 (public 폴더에 저장)

  return (
    <section id="download" className="download-section">
      <div className="container">
        <h2 className="download-title">앱 다운로드</h2>
        <p className="download-sub">편한 방법으로 MOYA 앱을 설치하세요.</p>

        <div className="store-grid">
          <a className="store-card" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            <span className="store-name"> App Store</span>
            <span className="store-desc">iPhone · iPad</span>
          </a>

          <a className="store-card" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
            <span className="store-name">Google Play</span>
            <span className="store-desc">Android</span>
          </a>

          <a className="store-card" href={DIRECT_APK_URL} download>
            <span className="store-name">APK 직접 받기</span>
            <span className="store-desc">Android (사이드로드)</span>
          </a>
        </div>

        <p className="download-note">* APK는 보안 정책상 일부 기기에서 설치 제한이 있을 수 있습니다.</p>
      </div>

      <style jsx>{`
        .download-section {
          padding: 100px 20px;
          background: #0a0f17;
          color: #e9f1ff;
          text-align: center;
        }
        .download-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .download-sub {
          color: #9fb3d1;
          margin-bottom: 40px;
        }
        .store-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          max-width: 900px;
          margin: 0 auto 20px;
        }
        .store-card {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 20px;
          border-radius: 14px;
          background: #111a27;
          border: 1px solid #1f2a3a;
          text-decoration: none;
          color: #e9f1ff;
          transition: border-color 0.2s;
        }
        .store-card:hover {
          border-color: #2b3b52;
        }
        .store-name {
          font-weight: 800;
          font-size: 1.1rem;
        }
        .store-desc {
          color: #9fb3d1;
          font-size: 0.9rem;
        }
        .download-note {
          font-size: 0.85rem;
          color: #9fb3d1;
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
}

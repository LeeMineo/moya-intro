// src/sections/Hero.jsx
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const APP_STORE_URL = "#"; // 실제 공개 시 교체
  const PLAY_STORE_URL =
    "https://drive.google.com/drive/folders/1hXTXdvSJJidUPCroXrDnkM-fwGDVY4dZ?usp=share_link"; // 실제 공개 시 교체

  return (
    <section id="hero" className="hero">
      <div className="overlay" />

      {/* 상단 고정 로고 */}
      <div className="brand" aria-label="MOYA logo">MOYA</div>

      {/* 왼쪽 정렬 콘텐츠 */}
      <div className="content">
        <h1 className="title">
          나를 아는<br />
          생리 보조 웨어러블
        </h1>
        <p className="sub">
          모야만의 <strong>특별한 기술</strong>을 통해
          <br className="m-br" />
          <strong>생리대 교체 타이밍</strong>을 미리 알려드려요.
        </p>

        {/* 다운로드 버튼: 항상 활성 */}
        <div className="stores" aria-label="download buttons">
          {/* <a
            className="store"
            href={APP_STORE_URL}
            title="App Store로 열기"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/logo/app-store-logo.png"
              alt="App Store로 열기"
            />
          </a> */}
          <a
            className="store"
            href={PLAY_STORE_URL}
            title="Google Play로 열기"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/logo/google-play-logo.png"
              alt="Google Play로 열기"
            />
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: url('/assets/images/intro.jpg') center/cover no-repeat;
          color: #fff;
          display: grid;
          align-items: center; /* 수직 가운데에 콘텐츠 */
        }
        .overlay {
          position: absolute; inset: 0; background: rgba(0,0,0,.65);
        }

        /* 상단 고정 로고 */
        .brand {
          position: absolute;
          top: clamp(16px, 4vw, 32px);
          left: clamp(16px, 4vw, 56px);
          z-index: 1;
          font-weight: 800;
          font-size: 20px;
          letter-spacing: .5px;
        }

        .content {
          position: relative; z-index: 1;
          padding: 0 clamp(16px, 4vw, 56px);
          max-width: 640px;
          text-align: left;
        }
        .title {
          margin: 0 0 14px;
          font-weight: 800;
          line-height: 1.2;
          font-size: clamp(28px, 5vw, 48px); /* PC 크게, 모바일 작게 */
        }
        .sub { color: #d6dbe3; margin: 0 0 28px; font-size: clamp(14px, 2.2vw, 18px); }
        .sub strong { color: #ffffff; font-weight: 700; }
        .m-br { display: none; } /* 데스크톱 기본 숨김 */

        .stores { display: flex; gap: 18px; align-items: center; margin-top: clamp(80px, 6vw, 40px); }
        .store img { height: clamp(36px, 6vw, 48px); width: auto; filter: drop-shadow(0 2px 10px rgba(0,0,0,.35)); transition: transform .2s; }
        .store img:hover { transform: translateY(-2px); }

        /* 모바일에서만 ‘통해’ 다음 줄바꿈 표시 */
        @media (max-width: 480px) {
          .content { padding-right: 20px; }
          .m-br { display: inline; }
        }
      `}</style>
    </section>
  );
}

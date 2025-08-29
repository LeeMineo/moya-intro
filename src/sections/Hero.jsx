// src/sections/Hero.jsx
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const APP_STORE_URL = "#"; // 실제 공개 시 교체
  const PLAY_STORE_URL =
    "https://drive.google.com/drive/folders/1hXTXdvSJJidUPCroXrDnkM-fwGDVY4dZ?usp=share_link"; // 실제 공개 시 교체

  // 이번 달 29일 00:00 (로컬)
  const [now, setNow] = useState(new Date());
  const launchAt = new Date(now.getFullYear(), now.getMonth(), 29, 0, 0, 0);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diffMs = Math.max(0, launchAt.getTime() - now.getTime());
  const totalSec = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  const pad = (n) => String(n).padStart(2, "0");
  const isLaunched = diffMs === 0; // 29일 00:00 이후면 true

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

        {/* 다운로드 버튼: 출시 전엔 비활성, 이후엔 활성 */}
        <div
          className={`stores ${isLaunched ? '' : 'disabled'}`}
          aria-label={isLaunched ? 'download buttons' : 'download buttons (출시 예정)'}
        >
          {/* <a
            className="store"
            href={APP_STORE_URL}
            title={isLaunched ? "App Store로 열기" : "App Store (출시 예정)"}
            target={isLaunched ? "_blank" : undefined}
            rel={isLaunched ? "noopener noreferrer" : undefined}
          >
            <img
              src="/assets/logo/app-store-logo.png"
              alt={isLaunched ? "App Store로 열기" : "App Store (출시 예정)"}
            />
          </a> */}
          <a
            className="store"
            href={PLAY_STORE_URL}
            title={isLaunched ? "Google Play로 열기" : "Google Play (출시 예정)"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/logo/google-play-logo.png"
              alt={isLaunched ? "Google Play로 열기" : "Google Play (출시 예정)"}
            />
          </a>
        </div>

        {/* 아주 작은 핑크색 시간 표시: 출시 전만 노출 */}
        {!isLaunched && (
          <div className="countdown-mini">
            D-{days} {pad(hours)}:{pad(minutes)}:{pad(seconds)} 뒤에 열려요!
          </div>
        )}
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

        /* 비활성화 상태: 터치/클릭/포커스 모두 차단 */
        .stores.disabled .store { pointer-events: none; cursor: not-allowed; }
        .stores.disabled .store img { filter: grayscale(1) opacity(.55) drop-shadow(0 2px 10px rgba(0,0,0,.35)); }
        .stores.disabled .store img:hover { transform: none; }

        /* 아주 작은 핑크색 시간 표시 */
        .countdown-mini {
          margin-top: 15px;
          font-size: 12px;
          color: #FFC2D9; /* 핑크 */
          opacity: 0.95;
          user-select: none;
        }

        /* 모바일에서만 ‘통해’ 다음 줄바꿈 표시 */
        @media (max-width: 480px) {
          .content { padding-right: 20px; }
          .m-br { display: inline; }
        }
      `}</style>
    </section>
  );
}

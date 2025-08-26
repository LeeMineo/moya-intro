// src/sections/VideoIntro.jsx
import React from 'react';

export default function VideoIntro() {
  const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // TODO: 교체 (실제 소개 영상 ID)

  return (
    <section id="video" className="video-section">
      <div className="container">
        <h2 className="video-title">소개 영상</h2>
        <p className="video-sub">1분 만에 MOYA를 이해하세요.</p>

        <div className="video-wrapper">
          <iframe
            title="MOYA 소개 영상"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <style jsx>{`
        .video-section {
          padding: 100px 20px;
          background: #0e1623;
          color: #e9f1ff;
          text-align: center;
        }
        .video-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .video-sub {
          color: #9fb3d1;
          margin-bottom: 30px;
        }
        .video-wrapper {
          position: relative;
          width: 100%;
          max-width: 900px;
          aspect-ratio: 16 / 9;
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #1f2a3a;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .video-wrapper iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import './styles/Features.css';

function Features() {
  const features = [
    {
      icon: "🔗",
      title: "실시간 매칭",
      description: "달리기 중 근처 사용자와 실시간으로 매칭할 수 있습니다.",
    },
    {
      icon: "🏡",
      title: "동네 친구 찾기",
      description: "동네 이웃과 함께 소셜 네트워킹을 즐기세요.",
    },
    {
      icon: "🎮",
      title: "게이미피케이션",
      description: "러닝 실적에 따른 보상 및 등급 상승을 경험하세요.",
    },
    {
      icon: "🛡️",
      title: "안전한 매칭",
      description: "철저한 검증과 위치 기반 기능으로 안전하게 매칭됩니다.",
    },
  ];

  return (
    <section className="features-section" id="features">
      <h2 className="section-title">런포데이트에서 누릴 수 있는 기능</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;

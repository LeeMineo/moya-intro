import React from 'react';
import './styles/CommunityHighlights.css';

function CommunityHighlights() {
  const highlights = [
    {
      image: "/assets/images/user-story-1.jpg",
      title: "유저 성공 스토리",
      description: "런포데이트를 통해 운동 습관을 만들고 새로운 친구를 사귀었습니다.",
    },
    {
      image: "/assets/images/community-event.jpg",
      title: "지역 커뮤니티 활동",
      description: "우리 동네에서 열린 러닝 챌린지에 100명이 참가했습니다!",
    },
    {
      image: "/assets/images/challenge-highlight.jpg",
      title: "이벤트/챌린지 하이라이트",
      description: "한 달간 이어진 러닝 마라톤에서 최고 기록을 달성한 유저를 축하합니다.",
    },
  ];

  return (
    <section className="community-highlights-section" id="community-highlights">
      <h2 className="section-title">함께 달리는 이야기</h2>
      <div className="highlights-container">
        {highlights.map((highlight, index) => (
          <div className="highlight-card" key={index}>
            <img src={highlight.image} alt={highlight.title} className="highlight-image" />
            <h3 className="highlight-title">{highlight.title}</h3>
            <p className="highlight-description">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommunityHighlights;

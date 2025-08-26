import React from 'react';
import './styles/PlansPricing.css';

function PlansPricing() {
  const plans = [
    {
      name: "무료 사용자",
      price: "₩0",
      features: [
        "기본 기능 제공",
        "러닝 기록 저장",
        "커뮤니티 참여",
      ],
    },
    {
      name: "프리미엄 플랜",
      price: "₩9,900/월",
      features: [
        "프리미엄 매칭",
        "광고 제거",
        "추가 혜택 제공",
      ],
    },
    {
      name: "프리미엄 프로 플랜",
      price: "₩19,900/월",
      features: [
        "개인화 코칭",
        "모든 프리미엄 혜택 포함",
        "우선 지원 서비스",
      ],
    },
  ];

  return (
    <section className="plans-pricing-section" id="plans-pricing">
      <h2 className="section-title">나에게 맞는 플랜 선택하기</h2>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div className={`plan-card ${index === 1 ? "highlighted" : ""}`} key={index}>
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i} className="plan-feature">{feature}</li>
              ))}
            </ul>
            <button className="plan-button">
              {index === 0 ? "가입하기" : "시작하기"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlansPricing;

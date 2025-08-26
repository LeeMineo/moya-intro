import React from 'react';
//import Header from './components/Header';
import Intro from './sections/Intro';
import AboutUs from './sections/AboutUs';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import CommunityHighlights from './sections/CommunityHighlights';
import PlansPricing from './sections/PlansPricing';
import CTA from './sections/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Intro />
      {/* 다른 섹션 추가 */}
      <AboutUs />
      <HowItWorks />
      <Features />
      <CommunityHighlights />
      <PlansPricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

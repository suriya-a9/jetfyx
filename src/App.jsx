import React from "react";
import { Element } from "react-scroll";
import Header from './components/Header';
import { Routes, Route, useLocation } from "react-router-dom";
import Banner from './Banner';
import FeatureCarousel from './FeatureCarousel';
import MissionVisionSection from './MissionVision';
import TradingCarousel from './TradingCarousel';
import FeatureSection from './FeatureSection';
import CRMSection from './CRMSection';
import RiskManagementSection from './RiskManagementSection';
import EdgeSection from './EdgeSection';
import TradersSection from './TradersSection';
import AccountAccessSection from './AccountAccessSection';
import PAMMSection from './PAMMSection';
import ConsultationSection from './ConsultationSection';
import InnovationSection from './InnovationSection';
import BlogSection from './BlogSection';
import FAQSection from './FAQSection';
import SignInSignUp from './SignInSignUp.jsx';
import CEOSection from './CTA';
import ContactSection from './ContactSection';
import Footer from './components/Footer';
import PricingSection from "./PricingSection.jsx";

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";
  return (
    <>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={
          <main className="mt-16 px-1 md:px-10 md:overflow-visible overflow-hidden md:px-18">
            <Element name="banner">
              <Banner />
            </Element>
            <Element name="featureCarousel">
              <FeatureCarousel />
            </Element>
            <Element name="missionVision">
              <MissionVisionSection />
            </Element>
            <Element name="tradingCarousel">
              <TradingCarousel />
            </Element>
            <Element name="featureSection">
              <FeatureSection />
            </Element>
            <Element name="crmSection">
              <CRMSection />
            </Element>
            <Element name="riskManagementSection">
              <RiskManagementSection />
            </Element>
            <Element name="edgeSection">
              <EdgeSection />
            </Element>
            <Element name="tradersSection">
              <TradersSection />
            </Element>
            <Element name="accountAccessSection">
              <AccountAccessSection />
            </Element>
            <Element name="pammSection">
              <PAMMSection />
            </Element>
            <Element name="consultationSection">
              <ConsultationSection />
            </Element>
            <Element name="innovationSection">
              <InnovationSection />
            </Element>
            <Element name="blogSection">
              <BlogSection />
            </Element>
            <Element name="faqSection">
              <FAQSection />
            </Element>
            <Element name="">
              <PricingSection />
            </Element>
            <Element name="ceoSection">
              <CEOSection />
            </Element>
            <Element name="contactSection">
              <ContactSection />
            </Element>
          </main>
        } />
        <Route path="/auth" element={<SignInSignUp />} />
      </Routes>
      {!isAuthPage && (
        <img
          src="/assets/float-img.webp"
          alt="Floating Icon"
          className="fixed bottom-10 right-0 md:w-[12%] md:h-[13%] w-[80px] h-[60px] z-50 cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      )}
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
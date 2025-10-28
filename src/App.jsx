import React, { useState, useEffect } from "react";
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
import PopupModal from './components/PopupModal';
import EdgeSection from './EdgeSection';
import TradersSection from './TradersSection';
import AccountAccessSection from './AccountAccessSection';
import PAMMSection from './PAMMSection';
import ConsultationSection from './ConsultationSection';
import ScrollToTopButton from './components/ScrollToTopButton';
import InnovationSection from './InnovationSection';
import BlogSection from './BlogSection';
import FAQSection from './FAQSection';
import SignInSignUp from './SignInSignUp.jsx';
import CEOSection from './CTA';
import ContactSection from './ContactSection';
import Footer from './components/Footer';
import PricingSection from "./PricingSection.jsx";
import TawkToWidget from "./TawkToWidget.jsx";
import NotFound from "./NotFound";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAuthPage = location.pathname === "/auth";
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem("popupClosed")) {
      const timer = setTimeout(() => setShowPopup(true), 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [showPopup]);

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("popupClosed", "true");
  };
  return (
    <>
      {!isAuthPage && location.pathname !== "*" && <PopupModal open={showPopup} onClose={handleClosePopup} />}
      {!isAuthPage && location.pathname !== "*" && <Header />}
      <Routes>
        <Route path="/" element={
          <main className="mt-16 px-1 md:px-10 md:overflow-visible overflow-hidden md:px-18">
            <Element name="banner">
              <Banner />
            </Element>
            <ScrollToTopButton />
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
            <Element name="PricingSection">
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAuthPage && location.pathname !== "*" &&
        <>
          <img
            src="/assets/offer.webp"
            alt="Floating Icon"
            className="fixed bottom-10 -left-2 md:w-[10%] md:h-[15%] w-[80px] h-[60px] z-50 cursor-pointer hover:scale-110 transition-transform duration-300 bg-[#D9D9D9] rounded-lg shadow-lg p-4"
            style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}
            onClick={() => setShowPopup(true)}
          />
          <TawkToWidget />
          <a
            href="https://wa.me/971506595860"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-[13%] right-6 z-50"
          >
            <img
              src="/assets/whatsapp-icon.webp"
              alt="WhatsApp"
              className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </a>
        </>
      }
      {!isAuthPage && location.pathname !== "*" && <Footer />}
    </>
  );
}

export default App;
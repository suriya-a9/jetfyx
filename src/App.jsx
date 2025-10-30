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
  const [showTerms, setShowTerms] = useState(() => !sessionStorage.getItem("termsAgreed"));
  useEffect(() => {
    if (showTerms) {
      document.body.classList.add("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [showTerms]);

  useEffect(() => {
    if (!showTerms && !sessionStorage.getItem("popupClosed")) {
      const timer = setTimeout(() => setShowPopup(true), 10000);
      return () => clearTimeout(timer);
    }
  }, [showTerms]);

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("overflow-hidden");
    } else if (!showTerms) {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      if (!showTerms) document.body.classList.remove("overflow-hidden");
    };
  }, [showPopup, showTerms]);

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("popupClosed", "true");
  };

  const handleAgreeTerms = () => {
    setShowTerms(false);
    sessionStorage.setItem("termsAgreed", "true");
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <>
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[99999]">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative max-h-[90vh] overflow-y-hidden">
            <h2 className="text-xl font-bold mb-4">JetFyX Website Terms of Use and Usage Policy<br/><span className="text-sm text-gray-500 font-medium">Last Updated: 10/30/2025</span></h2>
            <div className="mb-6 max-h-[60vh] overflow-y-auto text-sm text-gray-700 space-y-3 text-justify">
              <p>
                Welcome to JetFyX (“Company,” “we,” “us,” or “our”).<br />
                These Terms of Use and Usage Policy (“Terms”) govern your access to and use of our website. <a href="https://jetfyx.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://jetfyx.com</a> (“Website”) and related services (collectively, the “Services”).
              </p>
              <p>
                By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these terms.
                If you do not agree, please discontinue use immediately.
              </p>
              <h3 className="font-semibold mt-4">1. Eligibility</h3>
              <ul className="list-disc ml-6">
                <li>You are at least 18 years old (or of legal age in your jurisdiction);</li>
                <li>You have the authority to enter into binding agreements;</li>
                <li>You will comply with all applicable international, national, and local laws.</li>
                <li>You are not prohibited from using our Services by any regulatory authority.</li>
              </ul>
              <h3 className="font-semibold mt-4">2. About JetFyX</h3>
              <p>
                JetFyX is a multi-asset trading platform provider offering technology and infrastructure to enable access to trading systems and tools.
                JetFyX does not act as a broker, financial advisor, or investment manager.
                All trading decisions are made independently by the user, and JetFyX does not provide any investment advice, recommendations, or guarantees of performance.
              </p>
              <h3 className="font-semibold mt-4">3. Account Registration and Security</h3>
              <ul className="list-disc ml-6">
                <li>Provide accurate, current, and complete registration details;</li>
                <li>Keep your login credentials secure and confidential;</li>
                <li>Notify JetFyX immediately of any unauthorized access or suspected breach.</li>
              </ul>
              <p>
                JetFyX is not responsible for any losses due to unauthorized access resulting from your failure to maintain account security.
              </p>
              <h3 className="font-semibold mt-4">4. Acceptable Use Policy</h3>
              <ul className="list-disc ml-6">
                <li>Use the website for unlawful, deceptive, or fraudulent purposes;</li>
                <li>Attempt to gain unauthorized access to JetFyX systems or networks;</li>
                <li>Disrupt or interfere with the security or functionality of the website;</li>
                <li>Transmit viruses, malware, or any harmful code;</li>
                <li>Engage in data scraping, automated access, or harvesting of information;</li>
                <li>Impersonate any person or entity.</li>
              </ul>
              <p>
                Violation of this policy may result in immediate suspension or termination of access, and may be reported to relevant authorities.
              </p>
              <h3 className="font-semibold mt-4">5. Intellectual Property</h3>
              <p>
                All Website content—including text, design, graphics, software, logos, and trademarks—is the property of JetFyX or its licensors and is protected by international copyright and trademark laws.
                You may not copy, modify, reproduce, or redistribute any materials without prior written consent from JetFyX.
                Limited personal, non-commercial use is permitted.
              </p>
              <h3 className="font-semibold mt-4">6. Privacy and Data Protection</h3>
              <p>
                Your privacy is extremely important to us.
                JetFyX complies with the EU General Data Protection Regulation (GDPR), UK GDPR, and other applicable global data protection laws.
              </p>
              <h4 className="font-semibold">6.1 Data Collection and Use</h4>
              <ul className="list-disc ml-6">
                <li>Provide, maintain, and improve our Services;</li>
                <li>Respond to user inquiries or support requests;</li>
                <li>Comply with legal and regulatory obligations;</li>
                <li>Protect against fraudulent or unauthorized activity.</li>
              </ul>
              <h4 className="font-semibold">6.2 Lawful Basis for Processing</h4>
              <ul className="list-disc ml-6">
                <li>Consent (where you have given it);</li>
                <li>Contractual necessity (to deliver requested services);</li>
                <li>Legal obligation;</li>
                <li>Legitimate interest (e.g., security or analytics).</li>
              </ul>
              <h4 className="font-semibold">6.3 International Data Transfers</h4>
              <p>
                Your information may be transferred to and processed in countries outside your residence, including those without equivalent data protection laws.
                In such cases, JetFyX implements appropriate safeguards (e.g., Standard Contractual Clauses) to ensure compliance.
              </p>
              <h4 className="font-semibold">6.4 Your Rights (Under GDPR and Similar Laws)</h4>
              <ul className="list-disc ml-6">
                <li>Access, correct, or delete your personal data;</li>
                <li>Restrict or object to data processing;</li>
                <li>Withdraw consent at any time (where applicable);</li>
                <li>Request data portability;</li>
                <li>Lodge a complaint with your local data protection authority.</li>
              </ul>
              <p>
                To exercise these rights, contact us at <a href="mailto:support@jetfyx.com" className="text-blue-600 underline">support@jetfyx.com</a>
              </p>
              <h4 className="font-semibold">6.5 Data Retention</h4>
              <p>
                We retain personal data only as long as necessary for business, legal, or compliance purposes.
                For further details, please review our Privacy Policy.
              </p>
              <h3 className="font-semibold mt-4">7. Disclaimers</h3>
              <p>
                The Website and Services are provided “as is” and “as available.”
                JetFyX makes no warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <ul className="list-disc ml-6">
                <li>The website will be error-free, secure, and uninterrupted;</li>
                <li>Any information provided will be accurate, complete, or current.</li>
              </ul>
              <p>
                You acknowledge that use of the Website and any information obtained through it is at your own risk.
              </p>
              <h3 className="font-semibold mt-4">8. Limitation of Liability</h3>
              <ul className="list-disc ml-6">
                <li>Any direct, indirect, incidental, or consequential damages;</li>
                <li>Loss of profits, data, goodwill, or business opportunities;</li>
                <li>Errors, delays, or interruptions in website operation.</li>
              </ul>
              <p>
                Some jurisdictions do not allow certain liability exclusions, so these may not apply to you.
              </p>
              <h3 className="font-semibold mt-4">9. Indemnification</h3>
              <ul className="list-disc ml-6">
                <li>Your use or misuse of the Website;</li>
                <li>Your breach of these terms;</li>
                <li>Violation of any law or third-party rights.</li>
              </ul>
              <h3 className="font-semibold mt-4">10. Third-Party Links</h3>
              <p>
                Our website may include links to third-party sites or services not controlled by JetFyX.
                We are not responsible for the content, policies, or practices of such sites.
                Your interactions with them are solely between you and the third party.
              </p>
              <h3 className="font-semibold mt-4">11. Termination and Suspension</h3>
              <ul className="list-disc ml-6">
                <li>You breach these terms;</li>
                <li>We are required to do so by law or regulation;</li>
                <li>We discontinue or modify the Website.</li>
              </ul>
              <p>
                Upon termination, your right to use the website ceases immediately.
              </p>
              <h3 className="font-semibold mt-4">12. Changes to Terms</h3>
              <p>
                JetFyX may revise these terms periodically.
                Updated versions will be posted with a new “Last Updated” date.
                Continued use of the website after such changes constitutes your acceptance.
              </p>
              <h3 className="font-semibold mt-4">13. Governing Law and Jurisdiction</h3>
              <p>
                These Terms are governed by and construed in accordance with international principles of contract law and the laws of [Insert Jurisdiction, e.g., England and Wales], without regard to conflicts of law.
                Any disputes shall be subject to the exclusive jurisdiction of the courts of [City, Country], unless otherwise required by mandatory local law.
              </p>
              <h3 className="font-semibold mt-4">14. Contact Us</h3>
              <p>
                For any questions, concerns, or rights requests, please contact:<br />
                JetFyX<br />
                Email: <a href="mailto:support@jetfyx.com" className="text-blue-600 underline">support@jetfyx.com</a><br />
                Website: <a href="https://jetfyx.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://jetfyx.com</a>
              </p>
            </div>
            <button
              className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition mt-4"
              onClick={handleAgreeTerms}
            >
              Agree
            </button>
          </div>
        </div>
      )}
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
            href="https://api.whatsapp.com/send/?phone=447444468968&text&type=phone_number&app_absent=0"
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
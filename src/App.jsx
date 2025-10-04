import Header from './components/Header'
import Banner from './Banner'
import PageLayout from './components/PageLayout'
import FeatureCarousel from './FeatureCarousel'
import MissionVisionSection from './MissionVision'
import TradingCarousel from './TradingCarousel'
import FeatureSection from './FeatureSection'
import CRMSection from './CRMSection';
import RiskManagementSection from './RiskManagementSection'
import EdgeSection from './EdgeSection'
import TradersSection from './TradersSection'
import AccountAccessSection from './AccountAccessSection'
import PAMMSection from './PAMMSection'
import ConsultationSection from './ConsultationSection'
import InnovationSection from './InnovationSection';

function App() {
  return (
    <PageLayout>
      <Header />
      <main className="mt-16">
        <Banner />
        <FeatureCarousel />
        <MissionVisionSection />
        <TradingCarousel />
        <FeatureSection />
        <CRMSection />
        <RiskManagementSection />
        <EdgeSection />
        <TradersSection />
        <AccountAccessSection />
        <PAMMSection />
        <ConsultationSection />
        <InnovationSection />
      </main>
    </PageLayout>
  )
}

export default App
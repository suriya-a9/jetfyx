import Header from './components/Header'
import Banner from './Banner'
import PageLayout from './components/PageLayout'
import FeatureCarousel from './FeatureCarousel'
import MissionVisionSection from './MissionVision'
import TradingCarousel from './TradingCarousel'
import FeatureSection from './FeatureSection'

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
      </main>
    </PageLayout>
  )
}

export default App
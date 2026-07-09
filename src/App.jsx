import Navbar from './components/Navbar';
import MarqueeBar from './components/MarqueeBar';
import Hero from './components/Hero';
import StatBand from './components/StatBand';
import WavyDivider from './components/WavyDivider';
import About from './components/About';
import Services from './components/Services';
import FilterableJobs from './components/FilterableJobs';
import CountryGuide from './components/CountryGuide';
import EligibilityWizard from './components/EligibilityWizard';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import GalleryStrip from './components/GalleryStrip';
import CTABand from './components/CTABand';
import ContactMap from './components/ContactMap';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import QuickApply from './components/QuickApply';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <Navbar />
      <MarqueeBar />
      <Hero />
      <StatBand />
      <WavyDivider color="#FFF3E0" />
      <About />
      <WavyDivider color="#FFF3E0" flip />
      <Services />
      <WavyDivider color="#fff" />
      <FilterableJobs />
      <WavyDivider color="#fff" flip />
      <CountryGuide />
      <WavyDivider color="#fff" />
      <EligibilityWizard />
      <WavyDivider color="#fff" flip />
      <Process />
      <Testimonials />
      <GalleryStrip />
      <CTABand />
      <ContactMap />
      <FAQs />
      <Footer />
      <QuickApply />
      <BackToTop />
    </>
  );
}

export default App;
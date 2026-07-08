import Navbar from './components/Navbar';
import MarqueeBar from './components/MarqueeBar';
import Hero from './components/Hero';
import StatBand from './components/StatBand';
import WavyDivider from './components/WavyDivider';
import About from './components/About';
import Services from './components/Services';
import CountryGuide from './components/CountryGuide';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import GalleryStrip from './components/GalleryStrip';
import CTABand from './components/CTABand';
import ContactMap from './components/ContactMap';
import FAQs from './components/FAQs';
import QuickApply from './components/QuickApply';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <MarqueeBar />
      <Hero />
      <StatBand />
      <WavyDivider color="#FFF0F3" />
      <About />
      <WavyDivider color="#FFF0F3" flip />
      <Services />
      <WavyDivider color="#fff" />
      <CountryGuide />
      <WavyDivider color="#fff" flip />
      <Process />
      <Testimonials />
      <GalleryStrip />
      <CTABand />
      <ContactMap />
      <FAQs />
      <QuickApply />
      <Footer />
    </>
  );
}

export default App;
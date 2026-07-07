import './index.css';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import Destinations from './components/Destinations';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTABand from './components/CTABand';
import ContactMap from './components/ContactMap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import QuickApply from './components/QuickApply';

function App() {
  return (
    <>
      <Navbar />
      <Marquee />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Destinations />
        <Process />
        <Testimonials />
        <Gallery />
        <CTABand />
        <ContactMap />
        <FAQ />
      </main>
      <Footer />
      <QuickApply />
    </>
  );
}

export default App;
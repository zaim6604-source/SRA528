import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FollowUs from './components/FollowUs';
import CTABand from './components/CTABand';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';

function App() {
  return (
    <>
      <Navbar />
      <Marquee />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Expertise />
        <Process />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <FollowUs />
        <CTABand />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWidget />
    </>
  );
}

export default App;
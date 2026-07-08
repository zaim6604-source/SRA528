import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Countries from './components/Countries';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import QuickApply from './components/QuickApply';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Marquee />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Countries />
      <Process />
      <Testimonials />
      <Gallery />
      <CTA />
      <Contact />
      <FAQ />
      <Footer />
      <QuickApply />
    </div>
  );
}
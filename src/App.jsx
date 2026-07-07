import Navbar from './components/MAFHHNavbar';
import Marquee from './components/MAFHHMarquee';
import Hero from './components/MAFHHHero';
import Stats from './components/MAFHHStats';
import About from './components/MAFHHAbout';
import Staff from './components/MAFHHStaff';
import Services from './components/MAFHHOurServices';
import Process from './components/MAFHHProcess';
import WhyUs from './components/MAFHHWhyUs';
import Testimonials from './components/MAFHHTestimonials';
import Gallery from './components/MAFHHCtaBand';
import CtaBand from './components/MAFHHGradientCta';
import Contact from './components/MAFHHContact';
import FAQ from './components/MAFHHFAQ';
import Footer from './components/MAFHHFooter';
import FloatingWidget from './components/MAFHHFloatingWidget';

export default function App() {
  return (
    <>
      <Navbar />
      <Marquee />
      <main>
        <Hero />
        <Stats />
        <About />
        <Staff />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <CtaBand />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWidget />
    </>
  );
}
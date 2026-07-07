import Navbar from "./components/Navbar";
import MarqueeTicker from "./components/MarqueeTicker";
import Hero from "./components/Hero";
import StatsBand from "./components/StatsBand";
import About from "./components/About";
import TradesCategories from "./components/TradesCategories";
import WhatYouGet from "./components/WhatYouGet";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTABand from "./components/CTABand";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import QuickApply from "./components/QuickApply";

export default function App() {
  return (
    <div className="font-body antialiased">
      <Navbar />
      <MarqueeTicker />
      <Hero />
      <StatsBand />
      <About />
      <TradesCategories />
      <WhatYouGet />
      <Process />
      <Gallery />
      <Testimonials />
      <CTABand />
      <Contact />
      <FAQs />
      <Footer />
      <QuickApply />
    </div>
  );
}
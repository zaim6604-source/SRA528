import { Routes, Route } from 'react-router-dom';
import SplitLayout from './layouts/SplitLayout';
import ScrollToTop from './components/ScrollToTop';
import QuickApply from './components/QuickApply';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <ScrollToTop />
      <Routes>
        <Route element={<SplitLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:slug" element={<CountryDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <QuickApply />
    </div>
  );
}
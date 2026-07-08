import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Story from './pages/Story';
import Services from './pages/Services';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';
import Process from './pages/Process';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="services" element={<Services />} />
          <Route path="guides" element={<Guides />} />
          <Route path="guides/:slug" element={<GuideDetail />} />
          <Route path="process" element={<Process />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
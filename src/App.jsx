import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shell from './components/Shell';
import ScrollToTop from './components/ScrollToTop';
import QuickApply from './components/QuickApply';
import Overview from './pages/Overview';
import ServicesPage from './pages/Services';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import ProcessPage from './pages/Process';
import ApplyPage from './pages/Apply';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Overview />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <QuickApply />
    </BrowserRouter>
  );
}

export default App;
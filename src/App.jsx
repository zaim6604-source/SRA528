import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import QuickApply from './components/QuickApply'
import Overview from './pages/Overview'
import Services from './pages/Services'
import Destinations from './pages/Destinations'
import DestinationDetail from './pages/DestinationDetail'
import Process from './pages/Process'
import Apply from './pages/Apply'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="services" element={<Services />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:slug" element={<DestinationDetail />} />
          <Route path="process" element={<Process />} />
          <Route path="apply" element={<Apply />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <QuickApply />
    </>
  )
}
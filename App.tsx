
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
// import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

// Service Pages
import HDRService from './pages/HDRService.jsx';
import PortraitService from './pages/PortraitService.jsx';
import ArialPhotosService from './pages/ArialPhotosService.jsx';
import DayToDuskService from './pages/DayToDuskService.jsx';
import PhotosFromVideosService from './pages/PhotosFromVideosService.jsx';
import Service360 from './pages/Service360.jsx';
import RealTwilightService from './pages/RealTwilightService.jsx';
import SingleImagesService from './pages/SingleImagesService.jsx';
import FlashAmbientService from './pages/FlashAmbientService.jsx';
import LandEnhancementService from './pages/LandEnhancementService.jsx';
import NaturalEditService from './pages/NaturalEditService.jsx';
import OutdoorService from './pages/OutdoorService.jsx';
import PatchRemovalsService from './pages/PatchRemovalsService';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <ParticleBackground />
        <Header />

        <Routes>
          {/* Main Page */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Portfolio />
              <Process />
              {/* <Testimonials /> */}
              <CTA />
              <Footer />
            </>
          } />

          {/* Service Pages */}
          <Route path="/services/portrait" element={<PortraitService />} />
          <Route path="/services/hdr" element={<HDRService />} />
          <Route path="/services/arial-photos" element={<ArialPhotosService />} />
          <Route path="/services/day-to-dusk" element={<DayToDuskService />} />
          <Route path="/services/photos-from-videos" element={<PhotosFromVideosService />} />
          <Route path="/services/360" element={<Service360 />} />
          <Route path="/services/real-twilight" element={<RealTwilightService />} />
          <Route path="/services/single-images" element={<SingleImagesService />} />
          <Route path="/services/flash-ambient" element={<FlashAmbientService />} />
          <Route path="/services/land-enhancement" element={<LandEnhancementService />} />
          <Route path="/services/natural-edit" element={<NaturalEditService />} />
          <Route path="/services/outdoor" element={<OutdoorService />} />
          <Route path="/services/patch-removals" element={<PatchRemovalsService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
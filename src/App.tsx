/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import { Loader2 } from 'lucide-react';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const IndustrialTraining = lazy(() => import('./pages/IndustrialTraining'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Admission = lazy(() => import('./pages/Admission'));
const Results = lazy(() => import('./pages/Results'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industrial-training" element={<IndustrialTraining />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/results" element={<Results />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingContactButtons />
      </div>
    </Router>
  );
}

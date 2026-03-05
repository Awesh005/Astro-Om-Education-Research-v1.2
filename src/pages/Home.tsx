import Hero from '../components/Hero';
import Stats from '../components/Stats';

import IndustrialTrainingSection from '../components/IndustrialTrainingSection';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import ScrollToTop from '../components/ui/ScrollToTop';

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <div className="bg-slate-50">
         <Stats />
      </div>
      <WhyChooseUs />
     
      <IndustrialTrainingSection />
      <Services />
      <div className="bg-slate-50">
         <Testimonials />
      </div>
      <FAQ />
      <CTA />
    </>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { PrimaryButton, SecondaryButton } from './ui/Buttons';
import { SectionWrapper } from './ui/Layout';
import CourseEnquiryModal from './CourseEnquiryModal';
import { useNavigate } from 'react-router-dom';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <SectionWrapper className="px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-blue-600 text-center py-20 px-6 sm:px-12 shadow-2xl shadow-blue-900/20"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-700 opacity-90" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join Astro Om Education and unlock your true potential with our expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 border-none"
              >
                Enquire Now
              </PrimaryButton>
              <SecondaryButton 
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo(0, 0);
                }}
                className="w-full sm:w-auto bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/50"
              >
                Contact Us
              </SecondaryButton>
            </div>
          </div>
        </motion.div>
      </div>

      <CourseEnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </SectionWrapper>
  );
}

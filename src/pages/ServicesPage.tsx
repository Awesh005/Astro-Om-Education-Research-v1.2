import { useState } from 'react';
import { motion } from 'motion/react';
import { IT_SERVICES } from '../constants';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SectionWrapper, Container } from '../components/ui/Layout';
import { Badge } from '../components/ui/Badge';
import { PrimaryButton } from '../components/ui/Buttons';
import { Card } from '../components/ui/Cards';
import CourseEnquiryModal from '../components/CourseEnquiryModal';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-32">
      <CourseEnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 border-indigo-200 bg-white text-indigo-700">
              Our Services
            </Badge>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsModalOpen(true)}
              title="Click to enquire"
            >
              Comprehensive Digital <br />
              <span className="text-indigo-600">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From web development to AI automation, we provide a full spectrum of services to help your business thrive in the digital landscape.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <SectionWrapper background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IT_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card 
                  variant="glass" 
                  className="group h-full p-8 hover:border-indigo-200 flex flex-col relative overflow-hidden"
                  hoverEffect={true}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 ease-out" />
                  
                  <div className="relative z-10 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="relative z-10 text-slate-600 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="relative z-10 space-y-2 mb-6">
                    <li className="flex items-center text-sm text-slate-500">
                      <CheckCircle size={14} className="text-green-500 mr-2" />
                      Custom Solutions
                    </li>
                    <li className="flex items-center text-sm text-slate-500">
                      <CheckCircle size={14} className="text-green-500 mr-2" />
                      Expert Team
                    </li>
                    <li className="flex items-center text-sm text-slate-500">
                      <CheckCircle size={14} className="text-green-500 mr-2" />
                      24/7 Support
                    </li>
                  </ul>

                  <div className="relative z-10 pt-4 border-t border-slate-100/50 mt-auto">
                    <span className="inline-flex items-center text-sm font-medium text-indigo-600 group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                      Learn more <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="default" className="bg-indigo-50 border-t border-indigo-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-slate-900">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Contact us today for a free consultation and let's discuss how we can help you achieve your business goals.
            </p>
            <PrimaryButton 
              className="px-8 py-4 text-lg bg-indigo-600 text-white hover:bg-indigo-700 border-none shadow-lg shadow-indigo-200"
              onClick={() => setIsModalOpen(true)}
            >
              Get a Quote
            </PrimaryButton>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}

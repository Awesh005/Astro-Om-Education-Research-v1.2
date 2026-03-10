import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionWrapper, Container } from './ui/Layout';
import { Badge } from './ui/Badge';
import EnquiryForm from './EnquiryForm';

export default function Contact() {
  return (
    <SectionWrapper id="contact" background="light">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-slate-900 leading-tight">
              Start Your Journey with <span className="text-blue-600">Astro Om</span>
            </h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Have questions about our classes or programs? Fill out the form and our team will get back to you shortly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600">astroom.edu.research@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                  <div className="text-slate-600 flex items-center gap-2">
                    <img src="/arattai.png" alt="Arattai" className="h-5 w-auto" />
                    <span>+91 89698 58105</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-600">H.O Ranchi Jh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enrollment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl"
          >
            <EnquiryForm />
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, BookOpen, GraduationCap, Facebook, Twitter, Instagram, Linkedin, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

const Contact = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="pt-32 pb-0">
      {/* Header Section */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Have a question or ready to enroll? Our team is here to support your educational journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Contact Info & Socials */}
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-display font-bold text-slate-900">Contact Information</h2>
                
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: 'Our Campus', detail: 'H.O Ranchi Jh', color: 'text-blue-600', bg: 'bg-blue-50' },
                    { icon: Phone, title: 'Call Us', detail: <span className="flex items-center gap-2"><img src="/arattai.png" alt="Arattai" className="h-5 w-auto" /> +91 89698 58105</span>, color: 'text-purple-600', bg: 'bg-purple-50' },
                    { icon: Mail, title: 'Email Us', detail: 'astroom.edu.research@gmail.com', color: 'text-emerald-600', bg: 'bg-emerald-50' }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start space-x-5 group"
                    >
                      <div className={`${item.bg} ${item.color} p-4 rounded-2xl transition-transform group-hover:scale-110 duration-300`}>
                        <item.icon size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 mb-1">{item.title}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-6">
                <h3 className="text-xl font-display font-bold text-slate-900">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, color: 'hover:bg-blue-600' },
                    { icon: Twitter, color: 'hover:bg-sky-500' },
                    { icon: Instagram, color: 'hover:bg-pink-600' },
                    { icon: Linkedin, color: 'hover:bg-blue-700' }
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ y: -5 }}
                      className={`w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:text-white ${social.color} transition-all duration-300 shadow-sm`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Clock className="mr-2 text-blue-600" size={20} /> Office Hours
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-slate-400">Mon - Fri</span>
                    <span className="font-bold">09:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-slate-400">Saturday</span>
                    <span className="font-bold">10:00 AM - 04:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Sunday</span>
                    <span className="text-blue-600 font-bold uppercase tracking-wider">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-8">
              <div className="mb-6">
                <button
                  onClick={() => setShowEnquiry(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Enquire / Apply Now
                </button>
              </div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[500px] w-full bg-slate-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.77996033306!2d85.25110195!3d23.3432048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
        <div className="absolute top-10 left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block max-w-xs">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-600/10 p-2 rounded-lg">
              <MapPin className="text-blue-600" size={20} />
            </div>
            <h4 className="font-bold text-slate-900">Astro Om Education</h4>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            Visit our main campus for a guided tour and counseling session.
          </p>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 font-bold text-sm hover:underline flex items-center"
          >
            Get Directions <ArrowRight size={14} className="ml-1" />
          </a>
        </div>
      </section>

      <AnimatePresence>
        {showEnquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowEnquiry(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <EnquiryForm onSuccess={() => setShowEnquiry(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;

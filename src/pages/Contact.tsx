import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, BookOpen, GraduationCap, Facebook, Twitter, Instagram, Linkedin, CheckCircle2, ArrowRight, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    board: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!/^\d{10}$/.test(formData.phone.trim())) newErrors.phone = 'Invalid phone number (10 digits required)';
    if (!formData.grade) newErrors.grade = 'Please select a class';
    if (!formData.board) newErrors.board = 'Please select a board';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Google Form Submission Logic
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfmELFPb5ieG-EdmNil6i_vo_soSvjBtyFf0Q_RmvesEm9xgw/formResponse";
    const data = new FormData();
    data.append("entry.1404571374", formData.name);
    data.append("entry.471054464", formData.phone);
    data.append("entry.1645794894", `${formData.grade} - ${formData.board}`); // Combining Class and Board for "Class/Course" field
    data.append("entry.899394948", formData.message);
    // Email is not in the UI design provided by user, but form might expect it. 
    // The user design has Name, Phone, Class, Board, Message.
    // The Google Form has Email (entry.1855901574). 
    // I will skip email if not in UI, or add it if strictly required. 
    // Looking at previous Contact.tsx (step 57), Email was required.
    // The user's new design DOES NOT have an email field.
    // I will proceed with the user's design. If the Google Form requires email, it might fail or I might need to add it back.
    // For now, I'll stick to the user's requested UI.

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', grade: '', board: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const inputClasses = (fieldName: string) => `
    peer w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 transition-all duration-300 outline-none
    placeholder-transparent
    ${errors[fieldName] ? 'border-red-300 focus:border-red-500' : 'border-transparent focus:border-blue-600 focus:bg-white'}
  `;

  const labelClasses = "absolute left-6 -top-2.5 bg-white px-2 text-xs font-bold text-blue-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white pointer-events-none";

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
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative"
              >
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm rounded-[3rem] flex flex-col items-center justify-center text-center p-8"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Message Sent!</h3>
                      <p className="text-slate-600 max-w-sm mx-auto mb-8">
                        Thank you for reaching out. Our academic counselor will contact you within 24 hours.
                      </p>
                      <button 
                        onClick={() => setIsSuccess(false)}
                        className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-600 transition-all"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mb-10">
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Send us a Message</h2>
                  <p className="text-slate-500">Fill out the form below and we'll get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Field */}
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        placeholder="Full Name"
                        className={inputClasses('name')}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <label htmlFor="name" className={labelClasses}>
                        <User size={14} className="inline mr-1" /> Full Name
                      </label>
                      {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Phone Number"
                        className={inputClasses('phone')}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                      <label htmlFor="phone" className={labelClasses}>
                        <Phone size={14} className="inline mr-1" /> Phone Number
                      </label>
                      {errors.phone && <p className="text-red-500 text-xs mt-1 ml-2">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Class Select */}
                    <div className="relative">
                      <select
                        id="grade"
                        className={inputClasses('grade')}
                        value={formData.grade}
                        onChange={(e) => setFormData({...formData, grade: e.target.value})}
                      >
                        <option value="" disabled>Select Class</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                      </select>
                      <label htmlFor="grade" className={labelClasses}>
                        <GraduationCap size={14} className="inline mr-1" /> Target Class
                      </label>
                      {errors.grade && <p className="text-red-500 text-xs mt-1 ml-2">{errors.grade}</p>}
                    </div>

                    {/* Board Select */}
                    <div className="relative">
                      <select
                        id="board"
                        className={inputClasses('board')}
                        value={formData.board}
                        onChange={(e) => setFormData({...formData, board: e.target.value})}
                      >
                        <option value="" disabled>Select Board</option>
                        <option value="CBSE">CBSE Board</option>
                        <option value="JAC">JAC Board</option>
                        <option value="Bihar">Bihar Board</option>
                        <option value="UP">UP Board</option>
                        <option value="WB">WB Board</option>
                        <option value="Chhattisgarh">Chhattisgarh Board</option>
                        <option value="Odisha">Odisha Board</option>
                        <option value="Other">Other State Board</option>
                      </select>
                      <label htmlFor="board" className={labelClasses}>
                        <BookOpen size={14} className="inline mr-1" /> Education Board
                      </label>
                      {errors.board && <p className="text-red-500 text-xs mt-1 ml-2">{errors.board}</p>}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Your Message"
                      className={`${inputClasses('message')} resize-none`}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                    <label htmlFor="message" className={labelClasses}>
                      <MessageSquare size={14} className="inline mr-1" /> Your Message
                    </label>
                    {errors.message && <p className="text-red-500 text-xs mt-1 ml-2">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
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
    </div>
  );
};

export default Contact;

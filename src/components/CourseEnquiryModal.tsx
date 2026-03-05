import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface CourseEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
}

export default function CourseEnquiryModal({ isOpen, onClose, courseName }: CourseEnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    class: courseName || '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Contact Form URL: https://docs.google.com/forms/d/e/1FAIpQLSfmELFPb5ieG-EdmNil6i_vo_soSvjBtyFf0Q_RmvesEm9xgw/formResponse
    const contactFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfmELFPb5ieG-EdmNil6i_vo_soSvjBtyFf0Q_RmvesEm9xgw/formResponse";
    const contactData = new FormData();
    contactData.append("entry.1404571374", formData.name);
    contactData.append("entry.1855901574", formData.email);
    contactData.append("entry.471054464", formData.mobile);
    contactData.append("entry.1645794894", formData.class);
    contactData.append("entry.899394948", formData.message);

    try {
      await fetch(contactFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: contactData
      });
      
      alert('Enquiry submitted successfully! We will contact you soon.');
      onClose();
      setFormData({
        name: '',
        email: '',
        mobile: '',
        class: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your enquiry. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Enquire Now</h2>
                <p className="text-sm text-slate-500">Get guidance for your bright future.</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X size={20} className="text-slate-500" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Enter your Full Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Id <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Enter your Email ID"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-r-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Class/Course <span className="text-red-500">*</span></label>
                <select
                  name="class"
                  required
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                >
                  <option value="">Select Class</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Extra Skills">Extra Skills</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Any specific questions?"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-200"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

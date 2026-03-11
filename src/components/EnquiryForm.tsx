import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MessageSquare, User, Phone, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';

interface EnquiryFormProps {
  onSuccess?: () => void;
}

export default function EnquiryForm({ onSuccess }: EnquiryFormProps) {
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
    
       const formUrl =
"https://docs.google.com/forms/d/e/1FAIpQLScRgupxNpegTSEiD6eFdfR296AlCgDsXRzrdJwnxdwVmBL6EA/formResponse";

const data = new FormData();

data.append("entry.1529598726", formData.name);
data.append("entry.697887942", formData.phone);
data.append("entry.54596413", `${formData.grade} - ${formData.board}`);
data.append("entry.388033504", formData.message);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

 

      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', grade: '', board: '', message: '' });

      if (onSuccess) {
        onSuccess();
      }

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
  );
}

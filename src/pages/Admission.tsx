import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, AlertCircle, CreditCard, User, FileText, IndianRupee, QrCode, ChevronRight, Check, Link as LinkIcon } from 'lucide-react';
import { Container } from '../components/ui/Layout';
import { PrimaryButton } from '../components/ui/Buttons';

type BoardType = 'CBSE' | 'STATE';

interface FormData {
  studentName: string;
  fatherName: string;
  schoolName: string;
  mobile: string;
  whatsapp: string;
  address: string;
  studentClass: string;
  studentPhoto: string;
  consentSignature: string;
  paymentScreenshot: string;
  captcha: string;
}

const CLASSES = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];

export default function Admission() {
  const [board, setBoard] = useState<BoardType>('CBSE');
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    fatherName: '',
    schoolName: '',
    mobile: '',
    whatsapp: '',
    address: '',
    studentClass: '',
    studentPhoto: '',
    consentSignature: '',
    paymentScreenshot: '',
    captcha: '',
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaChallenge, setCaptchaChallenge] = useState('7 + 5 = ?'); // Simple static for demo
  const [captchaAnswer] = useState('12');

  const formRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.studentName) newErrors.studentName = 'Student Name is required';
    if (!formData.fatherName) newErrors.fatherName = "Father's Name is required";
    if (!formData.schoolName) newErrors.schoolName = 'School Name is required';
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Valid 10-digit Mobile Number is required';
    if (!formData.whatsapp || !/^\d{10}$/.test(formData.whatsapp)) newErrors.whatsapp = 'Valid 10-digit WhatsApp Number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.studentClass) newErrors.studentClass = 'Class selection is required';
    if (!formData.studentPhoto) newErrors.studentPhoto = 'Student Photo URL is required';
    if (!formData.consentSignature) newErrors.consentSignature = 'Consent Signature URL is required';
    if (!formData.paymentScreenshot) newErrors.paymentScreenshot = 'Payment Screenshot URL is required';
    if (formData.captcha !== captchaAnswer) newErrors.captcha = 'Incorrect Captcha';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeKyFdlLDHBNEhKBkw_u4YeqzMYYqd_NzBt96wDJ4zce4bUug/formResponse";

    const data = new FormData();

    data.append("entry.535073662", formData.studentName);
    data.append("entry.176083229", formData.fatherName);
    data.append("entry.474664534", formData.schoolName);
    data.append("entry.1071534890", formData.mobile);
    data.append("entry.1104747060", formData.whatsapp);
    data.append("entry.1604294463", formData.address);
    data.append("entry.439409011", formData.studentClass);
    data.append(
      "entry.2063778533",
      board === "CBSE" ? "CBSE" : "Other State Board"
    );
    data.append("entry.1340352109", formData.studentPhoto);
    data.append("entry.454084665", formData.consentSignature);
    data.append("entry.2032259177", formData.paymentScreenshot);

    console.log({
      name: formData.studentName,
      father: formData.fatherName,
      school: formData.schoolName,
      mobile: formData.mobile,
      whatsapp: formData.whatsapp,
      address: formData.address,
      class: formData.studentClass,
      board: board === "CBSE" ? "CBSE" : "Other State Board",
      studentPhoto: formData.studentPhoto,
      consentSignature: formData.consentSignature,
      paymentScreenshot: formData.paymentScreenshot
    });

    await fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: data,
    });

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-slate-50 flex items-center justify-center">
        <Container>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Submitted!</h2>
            <p className="text-slate-600 text-lg mb-8">
              Thank you for registering with Astro Om Education. We have received your application for {board === 'CBSE' ? 'CBSE' : 'State Board'} admission. Our team will verify your details and contact you shortly.
            </p>
            <PrimaryButton onClick={() => window.location.href = '/'} className="mx-auto">
              Return to Home
            </PrimaryButton>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16 bg-slate-50">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Online Admission Registration 2026
          </motion.h1>
          
          {/* Board Selection Toggle */}
          <div className="flex justify-center gap-4 md:gap-8 max-w-xl mx-auto">
            <button
              onClick={() => setBoard('CBSE')}
              className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                board === 'CBSE' 
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-md scale-105' 
                  : 'border-slate-200 bg-white text-slate-500 hover:border-indigo-200'
              }`}
            >
              <span className="text-lg md:text-xl font-bold">CBSE Board</span>
              {board === 'CBSE' && <CheckCircle size={20} />}
            </button>
            <button
              onClick={() => setBoard('STATE')}
              className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                board === 'STATE' 
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-md scale-105' 
                  : 'border-slate-200 bg-white text-slate-500 hover:border-indigo-200'
              }`}
            >
              <span className="text-lg md:text-xl font-bold">Other State Board</span>
              {board === 'STATE' && <CheckCircle size={20} />}
            </button>
          </div>
        </div>

        <motion.div 
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Section 1: Admission Info Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-indigo-600 p-6 text-white text-center">
                <h2 className="text-2xl font-bold mb-2">
                  {board === 'CBSE' ? 'CBSE Admission Form' : 'State Board Admission Form'}
                </h2>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
                  Registration Fee: ₹{board === 'CBSE' ? '750' : '500'}
                </div>
              </div>
              <div className="p-6 bg-indigo-50 border-b border-indigo-100">
                <div className="flex items-start gap-3 text-indigo-800">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-indigo-600" />
                  <div>
                    <span className="font-bold">Exclusive Benefits:</span> We provide 2 T-shirts, Geometric Box & ID Card upon admission.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Student Details */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                <h3 className="text-xl font-bold text-slate-800">Student Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField 
                  label="Student Name" 
                  name="studentName" 
                  value={formData.studentName} 
                  onChange={handleInputChange} 
                  error={errors.studentName}
                  placeholder="Enter full name"
                  icon={<User size={18} />}
                />
                <InputField 
                  label="Father's Name" 
                  name="fatherName" 
                  value={formData.fatherName} 
                  onChange={handleInputChange} 
                  error={errors.fatherName}
                  placeholder="Enter father's name"
                  icon={<User size={18} />}
                />
                <InputField 
                  label="School Name" 
                  name="schoolName" 
                  value={formData.schoolName} 
                  onChange={handleInputChange} 
                  error={errors.schoolName}
                  placeholder="Current school name"
                  icon={<FileText size={18} />}
                />
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-slate-700">Class <span className="text-red-500">*</span></label>
                  <select
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.studentClass ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200'} focus:border-blue-500 focus:ring-2 outline-none transition-all bg-white`}
                  >
                    <option value="">Select Class</option>
                    {CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.studentClass && <p className="text-red-500 text-xs mt-1 error-field">{errors.studentClass}</p>}
                </div>
                <InputField 
                  label="Mobile Number" 
                  name="mobile" 
                  value={formData.mobile} 
                  onChange={handleInputChange} 
                  error={errors.mobile}
                  placeholder="10-digit mobile number"
                  type="tel"
                  maxLength={10}
                />
                <InputField 
                  label="WhatsApp Number" 
                  name="whatsapp" 
                  value={formData.whatsapp} 
                  onChange={handleInputChange} 
                  error={errors.whatsapp}
                  placeholder="10-digit WhatsApp number"
                  type="tel"
                  maxLength={10}
                />
                <div className="md:col-span-2 space-y-1">
                  <label className="block text-sm font-medium text-slate-700">Address <span className="text-red-500">*</span></label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Enter full address"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.address ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200'} focus:border-blue-500 focus:ring-2 outline-none transition-all`}
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1 error-field">{errors.address}</p>}
                </div>
              </div>
            </div>

            {/* Section 3: Upload Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                <h3 className="text-xl font-bold text-slate-800">Documents Upload</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputField 
                  label="Student Photo" 
                  name="studentPhoto" 
                  value={formData.studentPhoto}
                  onChange={handleInputChange}
                  error={errors.studentPhoto}
                  placeholder="https://example.com/photo.jpg"
                  icon={<LinkIcon size={18} />}
                />
                
                <div className="space-y-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                    <p className="font-bold mb-1">Parent Consent Declaration:</p>
                    <p className="font-hindi text-lg leading-relaxed">"मैं अपने बच्चे <span className="border-b border-amber-800 px-2 font-bold">{formData.studentName || '_______'}</span> को Online Classes लेने की अनुमति देता/देती हूँ।"</p>
                  </div>
                  <InputField 
                    label="Consent Signature" 
                    name="consentSignature" 
                    value={formData.consentSignature}
                    onChange={handleInputChange}
                    error={errors.consentSignature}
                    placeholder="https://example.com/signature.png"
                    icon={<LinkIcon size={18} />}
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Tuition Fee Section */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-6 md:p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <IndianRupee className="text-yellow-400" /> Tuition Fee Structure
                </h3>
                
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                  <div>
                    <p className="text-slate-300 mb-1">Board Selected</p>
                    <p className="text-2xl font-bold text-white">{board === 'CBSE' ? 'CBSE Board' : 'State Board'}</p>
                  </div>
                  
                  <div className="h-12 w-px bg-white/20 hidden md:block"></div>
                  
                  <div className="text-center md:text-left">
                    <p className="text-slate-300 mb-1">Original Fee</p>
                    <p className="text-2xl font-bold text-red-400 line-through decoration-2">
                      ₹{board === 'CBSE' ? '1500' : '1000'}
                    </p>
                  </div>

                  <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-center min-w-[200px]">
                    <p className="text-green-300 text-sm font-bold uppercase tracking-wider mb-1">50% Discount Offer</p>
                    <p className="text-3xl font-bold text-white">
                      ₹{board === 'CBSE' ? '750' : '500'} <span className="text-sm font-normal text-slate-300">/month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Payment Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                <h3 className="text-xl font-bold text-slate-800">Complete Payment</h3>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0 text-center bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="w-48 h-48 bg-white p-2 rounded-lg shadow-sm mb-3 mx-auto flex items-center justify-center border border-slate-100">
                    <QrCode size={150} className="text-slate-800" />
                    {/* Replace with actual QR Code Image */}
                    {/* <img src="/qr-code.png" alt="Payment QR" className="w-full h-full object-contain" /> */}
                  </div>
                  <p className="font-bold text-slate-700 flex items-center justify-center gap-2">
                    <CreditCard size={16} /> Scan & Pay ₹{board === 'CBSE' ? '750' : '500'}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">UPI / GPay / PhonePe / Paytm</p>
                </div>

                <div className="flex-grow w-full">
                  <InputField 
                    label="Payment Screenshot" 
                    name="paymentScreenshot" 
                    value={formData.paymentScreenshot}
                    onChange={handleInputChange}
                    error={errors.paymentScreenshot}
                    placeholder="https://example.com/payment.jpg"
                    icon={<LinkIcon size={18} />}
                  />
                  <div className="mt-4 p-4 bg-blue-50 text-blue-800 text-sm rounded-lg flex gap-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p>Please ensure the shared image URL clearly shows the Transaction ID (UTR) for quick verification.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Captcha & Submit */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-100">
              <div className="max-w-md mx-auto space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Security Check: {captchaChallenge}</label>
                  <input
                    type="text"
                    placeholder="Enter answer"
                    value={formData.captcha}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, captcha: e.target.value }));
                      if (errors.captcha) setErrors(prev => ({ ...prev, captcha: undefined }));
                    }}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.captcha ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200'} focus:border-blue-500 focus:ring-2 outline-none transition-all`}
                  />
                  {errors.captcha && <p className="text-red-500 text-xs error-field">{errors.captcha}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Admission Application <ChevronRight />
                    </>
                  )}
                </button>
              </div>
            </div>

          </form>
        </motion.div>
      </Container>
    </div>
  );
}

// Reusable Components

function InputField({ label, name, value, onChange, error, placeholder, type = "text", icon, maxLength }: any) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-slate-700">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`w-full px-4 py-3 ${icon ? 'pl-10' : ''} rounded-lg border ${error ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200'} focus:border-blue-500 focus:ring-2 outline-none transition-all`}
        />
        {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{icon}</div>}
      </div>
      {error && <p className="text-red-500 text-xs mt-1 error-field">{error}</p>}
    </div>
  );
}

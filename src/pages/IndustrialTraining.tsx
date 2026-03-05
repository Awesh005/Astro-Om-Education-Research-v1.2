import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Code, Database, Globe, Layers, Zap, ArrowRight, Clock, Award, Star, Quote, CheckCircle2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustrialTraining = () => {
  const programs = [
    {
      title: 'Web Development Basics',
      icon: Globe,
      desc: 'Learn HTML, CSS, and JavaScript to build your first website.',
      duration: '3 Months',
      level: 'Beginner',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Introduction to Python',
      icon: Code,
      desc: 'Master the basics of Python programming for data and automation.',
      duration: '3 Months',
      level: 'Beginner',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Robotics & IoT',
      icon: Cpu,
      desc: 'Hands-on training with Arduino and basic electronic components.',
      duration: '4 Months',
      level: 'Intermediate',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Data Science for Kids',
      icon: Database,
      desc: 'Understand how data works through fun projects and visualization.',
      duration: '4 Months',
      level: 'Intermediate',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const testimonials = [
    {
      name: 'Aryan Sharma',
      role: 'Class 9 Student',
      text: 'The robotics training was amazing! I built my first line-following robot in just 2 months.',
      image: 'https://picsum.photos/seed/student1/100/100'
    },
    {
      name: 'Sneha Kumari',
      role: 'Class 10 Student',
      text: 'Web development classes helped me understand how the internet works. Now I can build my own portfolio.',
      image: 'https://picsum.photos/seed/student2/100/100'
    },
    {
      name: 'Rahul Verma',
      role: 'Class 8 Student',
      text: 'Python is so fun at BN Intelhub! The teachers explain everything with real-world examples.',
      image: 'https://picsum.photos/seed/student3/100/100'
    }
  ];

  return (
    <div className="pt-32 pb-0">
      {/* Header / Hero Section */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-600 px-6 py-2 rounded-full text-sm font-bold mb-8 border border-blue-600/30 backdrop-blur-sm">
              <Zap size={16} fill="currentColor" />
              <span>Future-Ready Skills for Class 6-10</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Industrial <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Training</span>
            </h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Go beyond textbooks. Gain practical, hands-on experience in the technologies that are shaping the world today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Overview Section */}
      <section className="py-16 bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-slate-50 transition-colors duration-300">
                <img 
                  src="https://images.pexels.com/photos/6623833/pexels-photo-6623833.jpeg" 
                  alt="Practical Training" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden md:block"
              >
                <div className="flex items-center space-x-5">
                  <div className="bg-blue-600/10 p-5 rounded-2xl">
                    <Layers className="text-blue-600" size={36} />
                  </div>
                  <div>
                    <p className="text-3xl font-display font-bold text-slate-900">100%</p>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Practical Learning</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                Training Overview
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Why Practical Knowledge <br />
                <span className="text-blue-600">Matters?</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                In today's fast-paced world, theoretical knowledge alone isn't enough. Our industrial training programs are designed to give school students an early start in technology.
              </p>
              <div className="space-y-5">
                {[
                  'Hands-on projects with real-world applications.',
                  'Exposure to industry-standard tools and technologies.',
                  'Development of critical thinking and problem-solving.',
                  'Building a strong foundation for future career paths.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4 group">
                    <div className="bg-green-100 p-2 rounded-full group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="text-green-600" size={20} />
                    </div>
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors inline-flex items-center shadow-lg shadow-blue-200 group">
                  Learn More About Our Method
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Offered Section */}
      <section className="py-16 bg-slate-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-6"
            >
              Technologies Offered
            </motion.h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl">Choose your path and start building the future today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-10 group card-hover"
              >
                <div className={`bg-gradient-to-br ${program.color} p-8 rounded-[2.5rem] text-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                  <program.icon size={48} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
                      {program.level}
                    </span>
                    <div className="flex items-center text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                      <Clock size={14} className="mr-2" /> {program.duration}
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-blue-600 transition-colors">{program.title}</h3>
                  <p className="text-slate-600 text-base mb-8 leading-relaxed">{program.desc}</p>
                  <div className="flex items-center justify-end pt-6 border-t border-slate-50">
                    <button className="text-blue-600 font-bold text-base flex items-center hover:underline group">
                      Enroll Now <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Details Section */}
      <section className="py-16 bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block bg-purple-50 text-purple-600 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                Certification
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Get Recognized with <br />
                <span className="text-blue-600">Certification</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Every student who completes our industrial training program receives a certificate of excellence. This certificate validates your skills and can be a great addition to your academic portfolio.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Award, title: 'Skill Validation', desc: 'Proof of your technical expertise.', color: 'text-blue-600' },
                  { icon: Star, title: 'Portfolio Boost', desc: 'Stand out in your school and future applications.', color: 'text-amber-500' },
                ].map((item, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
                    <div className="bg-white w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center mb-6">
                      <item.icon className={item.color} size={28} />
                    </div>
                    <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-50 p-8 rounded-[4rem] border-4 border-slate-100 shadow-2xl">
                <div className="bg-white p-10 rounded-[3rem] shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                  <div className="text-center space-y-8">
                    <div className="flex justify-center">
                      <div className="bg-blue-600/10 p-6 rounded-full">
                        <Award className="text-blue-600" size={64} />
                      </div>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-slate-900">Certificate of Excellence</h3>
                    <div className="w-32 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    <p className="text-slate-400 text-base italic">Awarded to</p>
                    <p className="text-2xl font-bold text-slate-900 border-b-2 border-slate-100 pb-3 inline-block">Student Name</p>
                    <p className="text-slate-500 text-sm leading-relaxed">For successfully completing the Industrial Training in <br /> <strong className="text-blue-600">Web Development Basics</strong></p>
                    <div className="pt-10 flex justify-between items-end">
                      <div className="text-left">
                        <div className="w-24 h-0.5 bg-slate-200 mb-3" />
                        <p className="text-[11px] text-slate-400 uppercase tracking-widest">Director Signature</p>
                      </div>
                      <div className="bg-blue-600/10 p-3 rounded-xl">
                        <GraduationCap className="text-blue-600" size={32} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-6"
            >
              What Our Students Say
            </motion.h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl">Real stories from students who have transformed their skills with us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 relative group card-hover"
              >
                <div className="absolute top-10 right-12 text-blue-600/10 group-hover:text-blue-600/20 transition-colors">
                  <Quote size={72} fill="currentColor" />
                </div>
                <div className="flex items-center space-x-5 mb-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-600/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600 font-bold uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed text-base">"{testimonial.text}"</p>
                <div className="mt-8 flex text-amber-400 space-x-1">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enroll Now CTA Section */}
      <section className="py-16 bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/30"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
            </div>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">Start Your Tech Journey Today</h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't wait for college to start learning the skills of the future. Enroll in our industrial training program today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 hover:bg-slate-100 px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl flex items-center group active:scale-95"
              >
                Enroll Now
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
              <Link 
                to="/courses" 
                className="bg-transparent border-2 border-white/30 hover:border-white text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 active:scale-95"
              >
                View All Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialTraining;

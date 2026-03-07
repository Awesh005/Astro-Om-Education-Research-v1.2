import { motion } from 'motion/react';
import { Target, Lightbulb, Shield, Users, ArrowRight, Cpu, Award, DollarSign, Star, UserCheck, BookOpen, Laptop, Rocket, CheckCircle } from 'lucide-react';
import { SectionWrapper, Container } from '../components/ui/Layout';
import { Badge } from '../components/ui/Badge';
import { PrimaryButton } from '../components/ui/Buttons';
import { Card } from '../components/ui/Cards';

export default function About() {
  const focusAreas = [
    { icon: <Award size={24} />, title: "Academic Excellence", description: "World-class curriculum and modern teaching methodologies." },
    { icon: <Lightbulb size={24} />, title: "Clarity of Thought", description: "Building strong concepts and critical thinking skills." },
    { icon: <UserCheck size={24} />, title: "Personality Development", description: "Confidence building, communication skills, and leadership." },
    { icon: <Shield size={24} />, title: "Discipline & Values", description: "Inculcating ethical values for life's challenges." },
  ];

  const futurePlanning = [
    "Advanced Python and IT-based projects",
    "Career-oriented practical training",
    "Digital practical lab content",
    "Affordable fee structure for all students"
  ];

  const whatWeOffer = [
    "Class-wise separate online classes (Class 6-10)",
    "Complete IT (402) syllabus with Python programming",
    "Student practical files and project guidance",
    "Board-exam-oriented teaching methodology",
    "Easy-to-understand language with strong concept clarity",
    "Future-ready skills (Python, Digital Tools, IT Practicals)"
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 border-blue-200 bg-white text-blue-700">
              About Astro Om Education & Research
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Smart Learning with <br />
              <span className="text-blue-600">Pocket-Friendly Fee</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A modern, education-focused institute providing online classes for students of Class 6 to 10.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Who We Are */}
      <SectionWrapper background="default">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-3" />
                <img 
                  src="./aboutimage.png" 
                  alt="Education" 
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-10"
            >
              <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">Who We Are</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                ASTRO OM EDUCATION & RESEARCH is a modern, education-focused institute that provides <strong>online classes for students of Class 6 to 10 (JAC/CBSE)</strong>.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our core focus is on <strong>English | Mathematics | IT (Computer Science) + AI | Science | SST</strong>, where we combine strong theoretical concepts with practical learning, projects, and exam-oriented preparation.
              </p>
              
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-6">
                <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                  <Star className="fill-blue-600 text-blue-600" size={20} /> Fee Scholarship Policy
                </h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Top 10% students with excellent academic and practical performance after one year will be eligible for a fee refund.
                </p>
              </div>

              <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <UserCheck className="text-green-600" size={20} /> Parent Monitoring
                </h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  Weekly and monthly online tests conducted in a supportive home environment, where parents can be available to guide and monitor the student's discipline.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Vision & Future Planning */}
      <SectionWrapper background="light">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100"
            >
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold font-display text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our vision is to provide every student with <strong>quality education along with practical skills</strong>, at minimum and affordable fee, so that they can become strong both academically and professionally in the future.
              </p>
            </motion.div>

            {/* Future Planning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100"
            >
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Rocket size={32} />
              </div>
              <h2 className="text-2xl font-bold font-display text-slate-900 mb-4">Future Planning</h2>
              <ul className="space-y-3">
                {futurePlanning.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* What We Offer */}
      <SectionWrapper background="default">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-indigo-50 text-indigo-700 border-indigo-200">
              Our Offerings
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">What We Offer</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive education package designed for student success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeOffer.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 flex items-start gap-4 hover:border-indigo-200 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <p className="text-slate-700 font-medium">{item}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="light">
        <Container>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
             <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Ready to Excel?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join Astro Om Education today and experience smart learning with pocket-friendly fees.
              </p>
              <PrimaryButton 
                className="bg-white text-blue-700 hover:bg-blue-50 border-none px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Enquire Now <ArrowRight className="ml-2" />
              </PrimaryButton>
             </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}

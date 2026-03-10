import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, GraduationCap, Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Container } from "./ui/Layout";
import React, { useState, useEffect } from "react";
import BoardFlipBadge from "./BoardFlipBadge";

const courses = [
  "Class 6th",
  "Class 7th",
  "Class 8th",
  "Class 9th",
  "Class 10th",
  "Extra Skills",
];

export default function Hero() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % courses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  return (
    <section className="relative min-h-screen flex items-center bg-[#00256C] pt-32 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="text-left text-white">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-blue-200 text-sm font-medium mb-6"
            >
              <span>Home</span>
              <span>/</span>
              <span>Education</span>
              <span>/</span>
              <span className="text-white">Astro Om</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 min-h-[160px] md:min-h-[180px] lg:min-h-[200px]">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl lg:text-5xl mb-2">
                  Smart Learning with
                </span>
                <span>Pocket-Friendly Fee</span>
                <div className="h-[1.2em] overflow-hidden mt-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={courses[index]}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="block text-blue-400"
                    >
                      {courses[index]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </h1>

            {/* Board Logos */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-3 mb-8 items-center"
            >
              {[
                { src: "/cbse-logo.png", alt: "CBSE" },
                { src: "/jac-logo.png", alt: "JAC" },
                { src: "/bihar-board.jpg", alt: "Bihar Board" },
                { src: "/up-board.png", alt: "UP Board" },
                { src: "/wb-board.png", alt: "WB Board" },
                { src: "/chhattisgarh-board.jpg", alt: "Chhattisgarh Board" },
                { src: "/odisha-board.jpg", alt: "Odisha Board" },
              ].map((logo, i) => (
                <div
                  key={i}
                  className="bg-white p-1.5 rounded-lg shadow-sm hover:scale-105 transition-transform"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-blue-50">
                  <strong className="text-white">Affordable Education</strong> -
                  "Tea/Coffee" ke kharch mein padhe- Education for every student
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-blue-50">
                  <strong className="text-white">High Quality Content</strong>{" "}
                  with Practical Knowledge
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-blue-50">
                  Focus on{" "}
                  <strong className="text-white">Academic Excellence</strong> &
                  Personality Development
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Promotional Banners */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6 max-w-lg mx-auto w-full"
          >
            {/* Banner 1: Fee Scholarship Policy */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group"
              style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c4a6e 100%)",
              }}
            >
              {/* Decorative glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl group-hover:bg-amber-400/30 transition-all duration-500" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400/15 rounded-full blur-2xl" />

              <div className="relative p-6 md:p-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Scholarship Opportunity
                </div>

                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      Fee Scholarship Policy
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-blue-100/90 text-sm md:text-base leading-relaxed">
                  Top <span className="text-amber-300 font-bold">10%</span> students with excellent academic and practical performance after one year will be eligible for a <span className="text-amber-300 font-bold">free education</span> under the scholarship policy.
                </p>

                {/* Bottom accent line */}
                <div className="mt-5 h-1 w-full rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-transparent opacity-60" />
              </div>
            </motion.div>

            {/* Banner 2: Admission Open – Apply Now */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group"
              style={{
                background: "linear-gradient(135deg, #1a0a2e 0%, #3b0764 50%, #581c87 100%)",
              }}
            >
              {/* Decorative glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition-all duration-500" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-400/15 rounded-full blur-2xl" />

              <div className="relative p-6 md:p-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  Limited Time – Enroll Now
                </div>

                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      Admission Open – Apply Now
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-purple-100/90 text-sm md:text-base leading-relaxed mb-5">
                  Secure your child's future today! Admissions are open for all classes. Don't miss this opportunity.
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => navigate('/admission')}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-900 font-bold text-base transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:gap-3"
                >
                  Apply for Admission
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

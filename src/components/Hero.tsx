import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronDown } from "lucide-react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [board, setBoard] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % courses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    // ✅ Correct Google Form Entry IDs (Placeholder IDs - Update with actual if available)
    formData.append("entry.1345355600", name);
    formData.append("entry.335730671", email);
    formData.append("entry.994511878", studentClass); // Mapped to Class
    formData.append("entry.BOARD_ID_PLACEHOLDER", board); // Mapped to Board
    formData.append("entry.1963209061", mobile);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfbERB8_CBmQ_2PrZUxgWJXD-Yf4YU9ZIydWLuhsOynL8dRVg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        },
      );

      alert("Enquiry Submitted Successfully!");

      // Reset form
      setName("");
      setEmail("");
      setStudentClass("");
      setBoard("");
      setMobile("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

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

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-md mx-auto w-full"
          >
            <div className="mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Enquire Now
                </h3>
                <p className="text-slate-500 text-sm">
                  Get guidance for your bright future.
                </p>
              </div>
              <button
                onClick={() => navigate('/admission')}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-lg shadow-blue-600/30 whitespace-nowrap"
              >
                Apply for Admission
              </button>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Email Id <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email ID"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Class Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Class <span className="text-red-500">*</span>
                </label>
                <select
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-700 bg-white"
                >
                  <option value="" disabled>
                    Select your Class
                  </option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Board Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Select your Board <span className="text-red-500">*</span>
                </label>
                <select
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-700 bg-white"
                >
                  <option value="" disabled>
                    Select your Board
                  </option>
                  <option value="CBSE Board">CBSE Board</option>
                  <option value="JAC Board">JAC Board</option>
                  <option value="Other State Board">Other State Board</option>
                </select>
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <button className="w-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-red-900/20 text-lg">
                Submit Enquiry
              </button>

              <p className="text-xs text-slate-400 text-center leading-relaxed">
                By submitting, I agree to Astro Om's{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

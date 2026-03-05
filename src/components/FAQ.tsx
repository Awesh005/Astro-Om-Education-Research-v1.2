import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { SectionWrapper, Container } from './ui/Layout';
import { Badge } from './ui/Badge';

const FAQS = [
  {
    question: "What classes do you teach?",
    answer: "We offer comprehensive coaching for students from Class 6 to Class 10, covering all major subjects."
  },
  {
    question: "Do you prepare students for board exams?",
    answer: "Yes, we have specialized batches for Class 10 board exam preparation with rigorous practice and mock tests."
  },
  {
    question: "What is your fee structure?",
    answer: "We believe in affordable education for all. Our motto is 'Tea ke kharch mein padhe'. Please contact us for detailed fee structures for each class."
  },
  {
    question: "Do you offer any extra skill courses?",
    answer: "Yes, apart from academics, we offer courses in IT, Computer Science, Spoken English, and Personality Development to ensure holistic growth."
  },
  {
    question: "Where are you located?",
    answer: "Our head office is located in Ranchi, Jharkhand. You can visit us for a personal consultation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" background="default">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200">
            Common Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our programs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex justify-between items-center ${
                  openIndex === index
                    ? 'bg-emerald-50/50 border-emerald-200 shadow-sm'
                    : 'bg-white border-slate-100 hover:border-emerald-100'
                }`}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-emerald-900' : 'text-slate-700'}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-2 text-slate-600 leading-relaxed border-x border-b border-emerald-100/50 rounded-b-2xl bg-emerald-50/30 mx-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}

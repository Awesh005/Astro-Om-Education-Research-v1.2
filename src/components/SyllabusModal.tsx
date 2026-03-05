import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, ChevronRight, CheckCircle } from 'lucide-react';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: any;
  onEnquire: () => void;
}

export default function SyllabusModal({ isOpen, onClose, course, onEnquire }: SyllabusModalProps) {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  if (!course || !course.syllabus) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white shrink-0">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Course Syllabus</h2>
                <p className="text-sm text-slate-500">{course.title} - {course.level}</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X size={20} className="text-slate-500" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
              <div className="space-y-4">
                {course.syllabus.map((subject: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <button
                      onClick={() => setExpandedSubject(expandedSubject === subject.subject ? null : subject.subject)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                    >
                      <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">
                          {subject.subject.charAt(0)}
                        </span>
                        {subject.subject}
                      </h3>
                      {expandedSubject === subject.subject ? (
                        <ChevronDown size={20} className="text-slate-400" />
                      ) : (
                        <ChevronRight size={20} className="text-slate-400" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {expandedSubject === subject.subject && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-slate-100"
                        >
                          <div className="p-4 space-y-4">
                            {subject.description && (
                              <p className="text-sm text-slate-600 italic mb-2">{subject.description}</p>
                            )}
                            
                            {subject.topics && (
                              <div className="space-y-2">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Topics Covered</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {subject.topics.map((topic: string, i: number) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                      <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {subject.subSections && subject.subSections.map((section: any, idx: number) => (
                              <div key={idx} className="space-y-2">
                                <h4 className="text-sm font-bold text-slate-800 bg-slate-50 p-2 rounded-lg border border-slate-100">
                                  {section.title}
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2">
                                  {section.topics.map((topic: string, i: number) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-100 bg-white shrink-0 flex justify-end gap-3">
              <button 
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  onClose();
                  onEnquire();
                }}
                className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

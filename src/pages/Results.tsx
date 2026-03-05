import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, AlertCircle, CheckCircle, FileText, User, Phone, BookOpen, ChevronRight, Download } from 'lucide-react';
import Papa from 'papaparse';
import { Container } from '../components/ui/Layout';
import { PrimaryButton } from '../components/ui/Buttons';

// Google Sheet ID from user request
const SHEET_ID = '158ggidRkTm2SVk0yRAIJGzsOvKlhqUgJz8N_pmQVZho';
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

interface StudentResult {
  student_name: string;
  father_name: string;
  class: string;
  batch: string;
  mobile: string;
  subject1: string;
  subject1_max: string;
  subject1_marks: string;
  subject2: string;
  subject2_max: string;
  subject2_marks: string;
  subject3: string;
  subject3_max: string;
  subject3_marks: string;
  subject4: string;
  subject4_max: string;
  subject4_marks: string;
  subject5: string;
  subject5_max: string;
  subject5_marks: string;
  total_marks: string;
  percentage: string;
  result_status: string;
}

export default function Results() {
  const [searchParams, setSearchParams] = useState({
    studentClass: '',
    mobile: ''
  });
  const [result, setResult] = useState<StudentResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);
    setHasSearched(false);

    try {
      const response = await fetch(SHEET_CSV_URL);
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const csvText = await response.text();
      
      Papa.parse<StudentResult>(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const foundStudent = results.data.find(student => 
            student.mobile?.toString().trim() === searchParams.mobile.trim() &&
            student.class?.toString().trim() === searchParams.studentClass.trim()
          );

          if (foundStudent) {
            setResult(foundStudent);
          } else {
            setError('Result not found. Please check your details.');
          }
          setHasSearched(true);
          setLoading(false);
        },
        error: (err: any) => {
          setError('Error parsing result data. Please try again later.');
          setLoading(false);
        }
      });
    } catch (err) {
      setError('Network error. Please check your connection.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 bg-slate-50 print:p-0 print:bg-white">
      <style>{`
        @media print {
          @page { size: A4; margin: 10mm; }
          body { background: white; }
          nav, footer, .no-print { display: none !important; }
          .print-container { width: 100% !important; max-width: none !important; padding: 0 !important; margin: 0 !important; }
        }
      `}</style>
      <Container className="print-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto print:max-w-none"
        >
          <div className="text-center mb-10 no-print">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Check Your Result
            </h1>
            <p className="text-slate-600 text-lg">
              Enter your details below to view your academic performance.
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-slate-100 no-print">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-slate-700">Class</label>
                <div className="relative">
                  <select
                    required
                    value={searchParams.studentClass}
                    onChange={(e) => setSearchParams({...searchParams, studentClass: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white appearance-none"
                  >
                    <option value="">Select Class</option>
                    {['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-slate-700">Mobile Number</label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="Registered Mobile"
                    value={searchParams.mobile}
                    onChange={(e) => setSearchParams({...searchParams, mobile: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  />
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      View Result
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3 mb-8 no-print"
            >
              <AlertCircle className="w-6 h-6 flex-shrink-0" />
              <p>{error}</p>
            </motion.div>
          )}

          {/* Result Display Card */}
          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 print:shadow-none print:border-none print:w-full"
            >
              {/* Header */}
              <div className="bg-indigo-600 text-white p-6 print:bg-white print:text-black print:border-b-2 print:border-black print:p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold print:text-3xl">Result Sheet</h2>
                    <p className="opacity-80 print:text-lg">Astro Om Education</p>
                  </div>
                  <div className={`px-4 py-1 rounded-full text-sm font-bold ${
                    result.result_status === 'Pass' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  } print:border-2 print:border-black print:text-black print:bg-transparent print:px-6 print:py-2`}>
                    {result.result_status}
                  </div>
                </div>
              </div>

              {/* Student Info */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 border-b border-slate-100 print:bg-white print:grid-cols-2 print:gap-4 print:p-4">
                <div className="space-y-1">
                  <p className="text-sm text-slate-500 print:text-black">Student Name</p>
                  <p className="font-bold text-lg text-slate-900 print:text-black">{result.student_name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-slate-500 print:text-black">Father's Name</p>
                  <p className="font-bold text-lg text-slate-900 print:text-black">{result.father_name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-slate-500 print:text-black">Class</p>
                  <p className="font-bold text-lg text-slate-900 print:text-black">{result.class}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-slate-500 print:text-black">Batch</p>
                  <p className="font-bold text-lg text-slate-900 print:text-black">{result.batch}</p>
                </div>
              </div>

              {/* Marks Table */}
              <div className="p-6 print:p-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 text-sm print:text-black print:border-black">
                        <th className="py-3 font-medium">Subject</th>
                        <th className="py-3 font-medium text-center">Max Marks</th>
                        <th className="py-3 font-medium text-center">Obtained Marks</th>
                        <th className="py-3 font-medium text-right">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 print:text-black">
                      {[1, 2, 3, 4, 5].map((i) => {
                        const subject = result[`subject${i}` as keyof StudentResult];
                        if (!subject) return null;
                        return (
                          <tr key={i} className="border-b border-slate-100 print:border-black/20">
                            <td className="py-4 font-medium">{subject}</td>
                            <td className="py-4 text-center">{result[`subject${i}_max` as keyof StudentResult]}</td>
                            <td className="py-4 text-center font-bold">{result[`subject${i}_marks` as keyof StudentResult]}</td>
                            <td className="py-4 text-right">
                              {calculateGrade(
                                Number(result[`subject${i}_marks` as keyof StudentResult]),
                                Number(result[`subject${i}_max` as keyof StudentResult])
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot className="bg-slate-50 font-bold text-slate-900 print:bg-transparent print:text-black print:border-t-2 print:border-black">
                      <tr>
                        <td className="py-4 pl-4">Total</td>
                        <td className="py-4 text-center">-</td>
                        <td className="py-4 text-center">{result.total_marks}</td>
                        <td className="py-4 text-right pr-4">{result.percentage}%</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-4 print:hidden">
                <button 
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-medium flex items-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Print Result
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </div>
  );
}

function calculateGrade(marks: number, max: number) {
  if (!marks || !max) return '-';
  const percentage = (marks / max) * 100;
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B+';
  if (percentage >= 60) return 'B';
  if (percentage >= 50) return 'C';
  if (percentage >= 40) return 'D';
  return 'F';
}

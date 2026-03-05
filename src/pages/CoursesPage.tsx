import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSES } from '../constants';
import { Search, Filter, X, Clock, ChevronDown, IndianRupee } from 'lucide-react';
import { SectionWrapper, Container } from '../components/ui/Layout';
import { Badge } from '../components/ui/Badge';
import { PrimaryButton } from '../components/ui/Buttons';
import CourseEnquiryModal from '../components/CourseEnquiryModal';
import BoardFlipBadge from '../components/BoardFlipBadge';
import FeeStructureModal from '../components/FeeStructureModal';
import SyllabusModal from '../components/SyllabusModal';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedCourseData, setSelectedCourseData] = useState<any>(null);
  const [selectedFeeStructure, setSelectedFeeStructure] = useState<{ cbse: string; state: string } | null>(null);

  const classes = Array.from(new Set(COURSES.map(c => c.title)));
  const subjects = Array.from(new Set(COURSES.flatMap(c => c.technologies || [])));

  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            course.technologies?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesClass = selectedClass ? course.title === selectedClass : true;
      const matchesSubject = selectedSubject ? course.technologies?.includes(selectedSubject) : true;
      
      return matchesSearch && matchesClass && matchesSubject;
    });
  }, [searchQuery, selectedClass, selectedSubject]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedClass(null);
    setSelectedSubject(null);
  };

  return (
    <div className="pt-32 min-h-screen bg-slate-50">
      <SectionWrapper background="default" className="py-12">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-slate-900">
              Explore Our <span className="text-blue-600">Courses</span>
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Find the perfect program to accelerate your career growth.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0 space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <Filter size={20} /> Filters
                  </h3>
                  {(selectedClass || selectedSubject || searchQuery) && (
                    <button 
                      onClick={clearFilters}
                      className="text-xs text-red-500 hover:text-red-700 font-medium"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3 text-sm">Class</h4>
                    <div className="space-y-2">
                      {classes.map(cls => (
                        <label key={cls} className="flex items-center gap-2 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="class" 
                            checked={selectedClass === cls}
                            onChange={() => setSelectedClass(cls)}
                            className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                          />
                          <span className="text-slate-600 text-sm group-hover:text-blue-600 transition-colors">{cls}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <h4 className="font-semibold text-slate-700 mb-3 text-sm">Subject</h4>
                    <div className="space-y-2">
                      {subjects.map(subject => (
                        <label key={subject} className="flex items-center gap-2 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="subject" 
                            checked={selectedSubject === subject}
                            onChange={() => setSelectedSubject(subject)}
                            className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                          />
                          <span className="text-slate-600 text-sm group-hover:text-blue-600 transition-colors">{subject}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-medium text-slate-700"
              >
                <span className="flex items-center gap-2"><Filter size={18} /> Filters</span>
                <ChevronDown size={18} className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-2 space-y-6">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-3 text-sm">Class</h4>
                        <div className="flex flex-wrap gap-2">
                          {classes.map(cls => (
                            <button
                              key={cls}
                              onClick={() => setSelectedClass(selectedClass === cls ? null : cls)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                                selectedClass === cls 
                                  ? 'bg-blue-50 border-blue-200 text-blue-700' 
                                  : 'bg-white border-slate-200 text-slate-600 hover:border-blue-200'
                              }`}
                            >
                              {cls}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-3 text-sm">Subject</h4>
                        <div className="flex flex-wrap gap-2">
                          {subjects.map(subject => (
                            <button
                              key={subject}
                              onClick={() => setSelectedSubject(selectedSubject === subject ? null : subject)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                                selectedSubject === subject 
                                  ? 'bg-blue-50 border-blue-200 text-blue-700' 
                                  : 'bg-white border-slate-200 text-slate-600 hover:border-blue-200'
                              }`}
                            >
                              {subject}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={clearFilters}
                        className="w-full py-2 text-sm text-red-600 font-medium hover:bg-red-50 rounded-lg transition-colors"
                      >
                        Clear Filters
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search courses by name, technology, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-sm text-slate-700"
                />
              </div>

              {/* Results Count */}
              <div className="mb-6 text-slate-500 text-sm">
                Showing {filteredCourses.length} courses
              </div>

              {/* Course Grid */}
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col h-full group"
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          {course.icon}
                        </div>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-xs">
                          {course.level}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {course.title}
                      </h3>
                      
                      <div className="mb-3 transform scale-75 origin-left -ml-2">
                        <BoardFlipBadge />
                      </div>
                      
                      <p className="text-slate-600 mb-4 text-sm line-clamp-2 flex-grow">
                        {course.description}
                      </p>

                      <div className="space-y-4 mt-auto">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock size={14} />
                          <span>{course.duration}</span>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {course.technologies?.slice(0, 3).map((tech, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-100">
                              {tech}
                            </span>
                          ))}
                          {course.technologies && course.technologies.length > 3 && (
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 border border-slate-100">
                              +{course.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="flex gap-2">
                          {course.feeStructure && (
                            <button
                              onClick={() => {
                                setSelectedCourse(course.title);
                                setSelectedFeeStructure(course.feeStructure || null);
                                setIsFeeModalOpen(true);
                              }}
                              className="flex-1 py-2.5 text-sm font-medium rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-all flex items-center justify-center gap-1.5"
                            >
                              <IndianRupee size={14} /> Fees
                            </button>
                          )}
                          <PrimaryButton 
                            onClick={() => {
                              setSelectedCourse(course.title);
                              setSelectedCourseData(course);
                              setIsSyllabusModalOpen(true);
                            }}
                            className={`py-2.5 text-sm justify-center bg-slate-900 hover:bg-blue-600 border-none shadow-none ${course.feeStructure ? 'flex-1' : 'w-full'}`}
                          >
                            View Details
                          </PrimaryButton>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 border-dashed">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                    <Search size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">No courses found</h3>
                  <p className="text-slate-500 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
                  <button 
                    onClick={clearFilters}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <CourseEnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        courseName={selectedCourse}
      />
      
      {selectedFeeStructure && (
        <FeeStructureModal
          isOpen={isFeeModalOpen}
          onClose={() => setIsFeeModalOpen(false)}
          courseName={selectedCourse}
          feeStructure={selectedFeeStructure}
        />
      )}

      {selectedCourseData && (
        <SyllabusModal
          isOpen={isSyllabusModalOpen}
          onClose={() => setIsSyllabusModalOpen(false)}
          course={selectedCourseData}
          onEnquire={() => {
            setIsSyllabusModalOpen(false);
            setIsModalOpen(true);
          }}
        />
      )}
    </div>
  );
}

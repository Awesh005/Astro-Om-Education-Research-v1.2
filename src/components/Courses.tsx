import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { COURSES } from '../constants';
import { ArrowRight, Clock } from 'lucide-react';
import { SectionWrapper, Container } from './ui/Layout';
import { Badge } from './ui/Badge';
import BoardFlipBadge from './BoardFlipBadge';

export default function Courses() {
  const navigate = useNavigate();
  const visibleCount = 6;

  return (
    <SectionWrapper id="programs" background="default">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-blue-200 bg-blue-50 text-blue-700">
            Our Offerings
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900">
            Industry-Ready <span className="text-blue-600">Programs</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive curriculum designed by industry experts to help you master the latest technologies and launch your career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {COURSES.slice(0, visibleCount).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="group relative h-full bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {course.icon}
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                      {course.level}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <div className="mb-4 transform scale-75 origin-left -ml-2">
                    <BoardFlipBadge />
                  </div>
                  
                  <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {course.technologies?.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-100">
                          {tech}
                        </span>
                      ))}
                      {course.technologies && course.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-100">
                          +{course.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <button 
                      onClick={() => {
                        navigate('/courses');
                        window.scrollTo(0, 0);
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-slate-50 text-slate-900 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      View Details
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              navigate('/courses');
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View More Details <ArrowRight size={20} />
          </button>
        </div>
      </Container>
    </SectionWrapper>
  );
}

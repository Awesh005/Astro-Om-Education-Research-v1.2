import { motion } from 'motion/react';
import { SectionWrapper, Container } from './ui/Layout';

export default function IndustrialTrainingSection() {
  
  return (
    <SectionWrapper id="industrial-training" className="p-0">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group"
        >
          <img 
            src="https://media.istockphoto.com/id/499775926/photo/coal-production-at-one-of-the-open-fields.jpg?s=612x612&w=0&k=20&c=4T1NoTq-O6KBaQxkSEu4wSxR0ezr2RC58e5zPVmj0zI=" 
            alt="Industrial Training Banner" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 font-display"
            >
              Industrial Training
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-blue-100 text-lg md:text-xl max-w-2xl"
            >
              Future-ready skills for students.
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group"
        >
          <img 
            src="/astrology.jpeg" 
            alt="Astrology Services" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 font-display"
            >
              Astrology Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-purple-100 text-lg md:text-xl max-w-2xl"
            >
              Discover your path with our expert astrology consultation.
            </motion.p>
          </div>
        </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

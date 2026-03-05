import { SectionWrapper, Container } from './ui/Layout';

export default function IndustrialTrainingSection() {
  
  return (
    <SectionWrapper id="industrial-training" className="p-0">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div 
          className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group"
        >
          <img 
            src="https://media.istockphoto.com/id/499775926/photo/coal-production-at-one-of-the-open-fields.jpg?s=612x612&w=0&k=20&c=4T1NoTq-O6KBaQxkSEu4wSxR0ezr2RC58e5zPVmj0zI=" 
            alt="Industrial Training Banner" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Industrial Training
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl">
              Future-ready skills for students.
            </p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

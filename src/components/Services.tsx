import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { FOCUS_AREAS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper, Container } from './ui/Layout';
import { PrimaryButton } from './ui/Buttons';
import { Badge } from './ui/Badge';
import { Card } from './ui/Cards';

export default function Services() {
  const navigate = useNavigate();

  return (
    <SectionWrapper id="services" background="default" className="relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/4" />
      </div>

      <Container>
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-indigo-50 text-indigo-700 border-indigo-200">
            Our Focus
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900">
            Our <span className="text-indigo-600">Focus Areas</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We focus on holistic development to ensure students excel in all aspects of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {FOCUS_AREAS.slice(0, 4).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card 
                variant="glass" 
                className="group h-full p-8 hover:border-indigo-200 flex flex-col relative overflow-hidden"
                hoverEffect={true}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 ease-out" />
                
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    {service.icon}
                  </div>
                </div>

                <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="relative z-10 text-slate-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div className="relative z-10 pt-4 border-t border-slate-100/50">
                  <span className="inline-flex items-center text-sm font-medium text-indigo-600 group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <PrimaryButton 
            className="px-8 py-4 text-lg bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200"
            onClick={() => {
              navigate('/about');
              window.scrollTo(0, 0);
            }}
          >
            Learn More About Us
          </PrimaryButton>
        </div>
      </Container>
    </SectionWrapper>
  );
}

import { motion } from 'motion/react';
import { SectionWrapper, Container } from './ui/Layout';
import { Badge } from './ui/Badge';
import { Card } from './ui/Cards';
import { Monitor, BookOpen, TrendingUp, Users, IndianRupee, Calendar } from 'lucide-react';

export default function WhyChooseUs() {
  const academicFeatures = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Digital-First Online Testing",
      description: "Weekly and monthly examinations managed through a dedicated online testing department."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Concept + Practical Learning",
      description: "An educational approach that balances theoretical concepts with hands-on practical application."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Continuous Performance Improvement",
      description: "Constant monitoring and structured systems focused on steady student academic growth."
    }
  ];

  const supportFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Parent Involvement & Monitoring",
      description: "Systems designed for discipline monitoring and transparency between parents and teachers."
    },
    {
      icon: <IndianRupee className="w-6 h-6" />,
      title: "Pocket-Friendly Fee",
      description: "Affordable tuition rates paired with a robust scholarship and fee refund policy."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Structured Parent Meetings",
      description: "Regular meetings and transparent communication to keep families updated on student progress."
    }
  ];

  return (
    <SectionWrapper id="why-choose-us" background="light">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
            Our Unique Features & Facilities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900">
            Smart Learning: <span className="text-purple-600">The Astro Om Way</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We combine academic excellence with financial transparency and support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1: Academic & Digital Excellence */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 text-center mb-8">
              <h3 className="text-xl font-bold text-teal-800">Academic & Digital Excellence</h3>
            </div>
            
            {academicFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="flex items-start gap-4 p-6 hover:border-teal-200 transition-colors h-full">
                  <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2: Support & Financial Transparency */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center mb-8">
              <h3 className="text-xl font-bold text-orange-800">Support & Financial Transparency</h3>
            </div>

            {supportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="flex items-start gap-4 p-6 hover:border-orange-200 transition-colors h-full">
                  <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

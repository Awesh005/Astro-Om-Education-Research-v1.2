import { motion } from 'motion/react';
import { Users, BookOpen, Award, Clock } from 'lucide-react';
import { Container } from './ui/Layout';

const stats = [
  {
    id: 1,
    label: "Students Enrolled",
    value: "500+",
    icon: <Users className="w-6 h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-100"
  },
  {
    id: 2,
    label: "Expert Teachers",
    value: "20+",
    icon: <BookOpen className="w-6 h-6" />,
    color: "text-purple-600",
    bg: "bg-purple-100"
  },
  {
    id: 3,
    label: "Success Rate",
    value: "100%",
    icon: <Award className="w-6 h-6" />,
    color: "text-green-600",
    bg: "bg-green-100"
  },
  {
    id: 4,
    label: "Years of Excellence",
    value: "10+",
    icon: <Clock className="w-6 h-6" />,
    color: "text-orange-600",
    bg: "bg-orange-100"
  }
];

export default function Stats() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-1 font-display">
                {stat.value}
              </h3>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

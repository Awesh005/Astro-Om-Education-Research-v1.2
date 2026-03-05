import { motion } from 'motion/react';
import { Container } from '../components/ui/Layout';

const images = [
  {
    src: "/banner.png", // User needs to upload this
    alt: "Admission Open - Class 6-10",
    category: "Admissions"
  },
  {
    src: "https://edusaksham.com//eduadmin/public/uploads/classs/1571658669.png",
    alt: "Class 6",
    
  },
  {
    src: "https://implexedu.in/wp-content/uploads/2025/04/class-7.png",
    alt: "Class 7",
    
  },
  {
    src: "https://implexedu.in/wp-content/uploads/2025/04/class-8.png",
    alt: "Class 8",
    
  },
  {
    src: "https://vaishnavigroupofeducations.com/wp-content/uploads/2025/01/1571659996.png",
    alt: "Class 9",
   
  },
  {
    src: "https://implexedu.in/wp-content/uploads/2025/04/class-10.png",
    alt: "Class 10",
    
  }
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-slate-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Glimpses of life at Astro Om Education. From our classrooms to our events, see how we shape the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Fallback if image not found
                  if (img.src === "/admission-banner.jpg") {
                     e.currentTarget.src = "https://placehold.co/800x400?text=Upload+Admission+Banner";
                  } else {
                     e.currentTarget.src = "https://placehold.co/800x600?text=Image+Not+Found";
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-400 text-sm font-medium mb-1">{img.category}</span>
                <h3 className="text-white text-xl font-bold">{img.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

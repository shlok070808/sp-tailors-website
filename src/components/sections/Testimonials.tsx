'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { TESTIMONIALS } from '@/utils/constants';

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-20 px-4 bg-luxury-darkBg">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Client <span className="text-luxury-gold">Testimonials</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Hear from our satisfied clients</p>
          <div className="h-1 w-20 bg-luxury-gold mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="glass p-6 rounded-lg border border-luxury-gold/10 hover:border-luxury-gold/50 transition-all duration-300 hover:shadow-gold-glow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{testimonial.image}</span>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <div className="flex text-luxury-gold text-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm italic">"{testimonial.review}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

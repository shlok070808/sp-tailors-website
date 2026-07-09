'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { FEATURES } from '@/utils/constants';

const WhyChooseUs = () => {
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
    <section id="why-us" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Why <span className="text-luxury-gold">Choose Us</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Experience the difference of premium craftsmanship</p>
          <div className="h-1 w-20 bg-luxury-gold mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass p-8 rounded-lg border border-luxury-gold/10 hover:border-luxury-gold/50 transition-all duration-300 hover:shadow-gold-glow text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 font-poppins">{feature.title}</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

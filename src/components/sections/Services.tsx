'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { SERVICES } from '@/utils/constants';
import { useState } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

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
    <section id="services" className="py-20 px-4 bg-luxury-darkBg">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our <span className="text-luxury-gold">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive tailoring solutions for every occasion</p>
          <div className="h-1 w-20 bg-luxury-gold mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              className="group glass p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-gold-glow border border-luxury-gold/10 hover:border-luxury-gold/50"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 font-poppins">{service.name}</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              {activeService === service.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 pt-4 border-t border-luxury-gold/20"
                >
                  <button className="text-luxury-gold text-sm font-semibold hover:text-luxury-darkGold transition-colors">
                    Learn More →
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

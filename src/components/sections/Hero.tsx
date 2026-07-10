'use client';

import { motion } from 'framer-motion';
import { slideInUp } from '@/utils/animations';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-luxury-darkBg flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center z-10"
      >
        <motion.div {...slideInUp}>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-white leading-tight">
            Perfect Fit.
            <span className="text-luxury-gold block">Timeless Style.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Tailored for You. 21+ Years of Trusted Tailoring Excellence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#booking"
            className="px-8 py-4 bg-luxury-gold text-luxury-darkBg font-semibold rounded-lg hover:bg-luxury-darkGold transition-all duration-300 shadow-luxury hover:shadow-gold-glow"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-8 py-4 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-lg hover:bg-luxury-gold hover:text-luxury-darkBg transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto"
        >
          <div className="glass p-6 rounded-lg">
            <h3 className="text-3xl font-playfair font-bold text-luxury-gold">21+</h3>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-3xl font-playfair font-bold text-luxury-gold">1000+</h3>
            <p className="text-gray-400 text-sm">Happy Clients</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-3xl font-playfair font-bold text-luxury-gold">5★</h3>
            <p className="text-gray-400 text-sm">Rated Quality</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-luxury-gold"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;

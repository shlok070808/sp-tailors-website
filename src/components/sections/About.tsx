'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { BUSINESS_INFO } from '@/utils/constants';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">About <span className="text-luxury-gold">S.P Tailors</span></h2>
          <div className="h-1 w-20 bg-luxury-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-playfair font-bold text-luxury-gold">{BUSINESS_INFO.experience}+ Years of Excellence</h3>
            <p className="text-gray-300 leading-relaxed">
              Welcome to S.P Tailors, where tradition meets precision. For over two decades, we have been synonymous with premium tailoring and exceptional craftsmanship. Our journey is built on a foundation of trust, quality, and an unwavering commitment to our clients.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Under the expert guidance of Proprietor Surendra Pandit, our team of master tailors brings your vision to life with meticulous attention to detail. Every stitch, every seam, and every garment is crafted with passion and precision.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-luxury-gold text-2xl">✓</span>
                <span className="text-gray-300">Master Craftsmen</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-luxury-gold text-2xl">✓</span>
                <span className="text-gray-300">Premium Quality Materials</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-luxury-gold text-2xl">✓</span>
                <span className="text-gray-300">Personalized Service</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-luxury-gold text-2xl">✓</span>
                <span className="text-gray-300">On-Time Delivery</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 rounded-lg border-2 border-luxury-gold/30">
              <div className="text-6xl mb-4">👔</div>
              <h4 className="text-2xl font-playfair font-bold text-luxury-gold mb-4">Our Promise</h4>
              <p className="text-gray-300 mb-6">
                Every client deserves perfection. We don't just stitch clothes; we craft confidence, comfort, and timeless elegance.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p><strong>Proprietor:</strong> {BUSINESS_INFO.proprietor}</p>
                <p><strong>Phone:</strong> {BUSINESS_INFO.phone}</p>
                <p><strong>Instagram:</strong> {BUSINESS_INFO.instagram}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiInstagram } from 'react-icons/fi';
import { BUSINESS_INFO } from '@/utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-black border-t border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-playfair font-bold text-luxury-gold mb-4">S.P TAILORS</h3>
            <p className="text-gray-400 text-sm mb-4">{BUSINESS_INFO.subtitle}</p>
            <p className="text-gray-500 text-xs">Proprietor: {BUSINESS_INFO.proprietor}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Custom Tailoring</li>
              <li>Wedding Wear</li>
              <li>Alterations</li>
              <li>Premium Fabrics</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 text-gray-400 hover:text-luxury-gold transition-colors">
                <FiPhone size={16} /> {BUSINESS_INFO.phone}
              </a>
              <a href={`https://instagram.com/${BUSINESS_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-luxury-gold transition-colors">
                <FiInstagram size={16} /> {BUSINESS_INFO.instagram}
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-luxury-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {currentYear} S.P Tailors. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-luxury-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

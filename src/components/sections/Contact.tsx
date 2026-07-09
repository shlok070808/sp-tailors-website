'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiInstagram, FiMapPin } from 'react-icons/fi';
import { BUSINESS_INFO } from '@/utils/constants';

const Contact = () => {
  const contactMethods = [
    {
      icon: FiPhone,
      label: 'Phone',
      value: BUSINESS_INFO.phone,
      link: `tel:${BUSINESS_INFO.phone}`,
    },
    {
      icon: FiInstagram,
      label: 'Instagram',
      value: BUSINESS_INFO.instagram,
      link: `https://instagram.com/${BUSINESS_INFO.instagram.replace('@', '')}`,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'S.P Tailors Shop',
      link: '#',
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Get In <span className="text-luxury-gold">Touch</span></h2>
          <p className="text-gray-400">We'd love to hear from you</p>
          <div className="h-1 w-20 bg-luxury-gold mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={method.link}
                target={method.label === 'Instagram' ? '_blank' : undefined}
                rel={method.label === 'Instagram' ? 'noopener noreferrer' : undefined}
                className="glass p-8 rounded-lg border border-luxury-gold/10 hover:border-luxury-gold/50 transition-all duration-300 hover:shadow-gold-glow text-center group"
              >
                <Icon className="w-12 h-12 text-luxury-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{method.label}</h3>
                <p className="text-gray-400 group-hover:text-luxury-gold transition-colors">{method.value}</p>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-lg border border-luxury-gold/20 text-center"
        >
          <h3 className="text-2xl font-playfair font-bold text-luxury-gold mb-2">Proprietor</h3>
          <p className="text-xl font-semibold text-white mb-2">{BUSINESS_INFO.proprietor}</p>
          <p className="text-gray-400">{BUSINESS_INFO.experience}+ Years of Tailoring Excellence</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

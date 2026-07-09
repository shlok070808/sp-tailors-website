'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { FAQ as FAQData } from '@/utils/constants';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Frequently Asked <span className="text-luxury-gold">Questions</span></h2>
          <div className="h-1 w-20 bg-luxury-gold mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {FAQData.map((faq, index) => (
            <motion.div key={faq.id} variants={itemVariants}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass p-6 rounded-lg border border-luxury-gold/10 hover:border-luxury-gold/50 transition-all duration-300 flex items-center justify-between group"
              >
                <h3 className="text-left text-white font-semibold group-hover:text-luxury-gold transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-luxury-gold flex-shrink-0 ml-4"
                >
                  <FiChevronDown size={24} />
                </motion.div>
              </button>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: openIndex === index ? 1 : 0,
                  height: openIndex === index ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="glass mt-2 p-6 rounded-lg border border-luxury-gold/10">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

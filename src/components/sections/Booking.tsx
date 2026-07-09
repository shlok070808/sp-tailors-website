'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    appointmentDate: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        appointmentDate: '',
      });
    }, 3000);
  };

  return (
    <section id="booking" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Book Your <span className="text-luxury-gold">Appointment</span></h2>
          <p className="text-gray-400">Schedule your perfect fitting session</p>
          <div className="h-1 w-20 bg-luxury-gold mx-auto mt-4"></div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass p-8 rounded-lg border border-luxury-gold/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-300 mb-2 font-poppins">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-luxury-darkBg border border-luxury-gold/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-poppins">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-luxury-darkBg border border-luxury-gold/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-colors"
                placeholder="Your phone"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-300 mb-2 font-poppins">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-luxury-darkBg border border-luxury-gold/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-colors"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-poppins">Service Type</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full bg-luxury-darkBg border border-luxury-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
              >
                <option value="">Select a service</option>
                <option value="custom-shirt">Custom Shirt</option>
                <option value="custom-pants">Custom Pants</option>
                <option value="suit">Business Suit</option>
                <option value="wedding">Wedding Wear</option>
                <option value="alteration">Alteration</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2 font-poppins">Preferred Date</label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="w-full bg-luxury-darkBg border border-luxury-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-luxury-gold text-luxury-darkBg font-semibold py-3 rounded-lg hover:bg-luxury-darkGold transition-all duration-300 shadow-luxury hover:shadow-gold-glow"
          >
            Book Appointment
          </button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-3 text-luxury-gold"
            >
              <FiCheckCircle size={24} />
              <span>Appointment request submitted! We'll contact you soon.</span>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Booking;

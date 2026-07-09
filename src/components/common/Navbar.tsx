'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiPhone, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-luxury-darkBg/95 backdrop-blur-md shadow-luxury'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">✂️</span>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-luxury-gold">S.P TAILORS</h1>
              <p className="text-xs text-gray-400">Premium Tailoring</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-luxury-gold transition-colors duration-300 font-poppins"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:02532571363"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-luxury-gold text-luxury-darkBg font-semibold hover:bg-luxury-darkGold transition-colors"
            >
              <FiPhone size={18} />
              Call
            </a>
            <a
              href="https://instagram.com/s.p.tailors4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-darkBg transition-colors"
            >
              <FiInstagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-luxury-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-luxury-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 mt-4">
              <a
                href="tel:02532571363"
                className="flex-1 text-center px-4 py-2 rounded-lg bg-luxury-gold text-luxury-darkBg font-semibold"
              >
                Call Now
              </a>
              <a
                href="https://instagram.com/s.p.tailors4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 rounded-lg border border-luxury-gold text-luxury-gold"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
